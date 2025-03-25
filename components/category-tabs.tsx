"use client";

import * as React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { Category } from "@/data/menu";

interface CategoryTabsProps {
  categories: (Category | { id: string; name: string; description: string });
  activeCategory: string;
  onChange: (value: string) => void;
}

export default function CategoryTabs({ categories, activeCategory, onChange }: CategoryTabsProps) {
  return (
    <Tabs value={activeCategory} onValueChange={onChange} className="w-full">
      <TabsList className="h-auto flex flex-wrap gap-2 bg-transparent">
        {categories.map((category) => (
          <TabsTrigger
            key={category.id}
            value={category.id}
            className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            {category.name}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}