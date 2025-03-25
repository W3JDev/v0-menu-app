"use client";

import { useState } from "react";
import CategoryTabs from "@/components/category-tabs";
import MenuItemCard from "@/components/menu-item-card";
import FilterSystem from "@/components/filter-system";
import { menuData } from "@/data/menu";
import type { MenuItem } from "@/data/menu";

export default function MenuApp() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [filters, setFilters] = useState<{
    vegetarian: boolean;
    spicy: boolean;
    glutenFree: boolean;
    popular: boolean;
  }>({
    vegetarian: false,
    spicy: false,
    glutenFree: false,
    popular: false,
  });

  const handleFilterChange = (name: string, value: boolean) => {
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const filteredItems = menuData.items.filter((item) => {
    // Category filter
    if (activeCategory !== "all" && item.categoryId !== activeCategory) {
      return false;
    }

    // Dietary filters
    if (filters.vegetarian && !item.vegetarian) {
      return false;
    }

    if (filters.spicy && !item.spicy) {
      return false;
    }

    if (filters.glutenFree && !item.dietaryInfo?.includes("Gluten-Free")) {
      return false;
    }

    if (filters.popular && !item.popular) {
      return false;
    }

    return true;
  });

  return (
    <div className="w-full">
      <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight mb-6">Our Menu</h2>
        
        <CategoryTabs 
          categories={[
            { id: "all", name: "All", description: "All menu items" },
            ...menuData.categories
          ]} 
          activeCategory={activeCategory} 
          onChange={setActiveCategory} 
        />
        
        <div className="mt-4">
          <FilterSystem filters={filters} onFilterChange={handleFilterChange} />
        </div>
      </div>

      {filteredItems.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-muted-foreground">No items match your filters</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item: MenuItem) => (
            <MenuItemCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}