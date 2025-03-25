"use client";

import * as React from "react";
import { Check, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

interface FilterSystemProps {
  filters: {
    vegetarian: boolean;
    spicy: boolean;
    glutenFree: boolean;
    popular: boolean;
  };
  onFilterChange: (name: string, value: boolean) => void;
}

export default function FilterSystem({ filters, onFilterChange }: FilterSystemProps) {
  const handleClearFilters = () => {
    onFilterChange("vegetarian", false);
    onFilterChange("spicy", false);
    onFilterChange("glutenFree", false);
    onFilterChange("popular", false);
  };

  const filtersActive = Object.values(filters).some((value) => value);

  return (
    <div className="flex items-center gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="gap-1">
            Filters
            {filtersActive && (
              <span className="ml-1 rounded-full bg-primary w-2 h-2" />
            )}
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-56">
          <DropdownMenuLabel>Dietary</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuCheckboxItem
              checked={filters.vegetarian}
              onCheckedChange={(checked) =>
                onFilterChange("vegetarian", !!checked)
              }
            >
              Vegetarian
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={filters.glutenFree}
              onCheckedChange={(checked) =>
                onFilterChange("glutenFree", !!checked)
              }
            >
              Gluten-Free
            </DropdownMenuCheckboxItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuLabel>Preferences</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuCheckboxItem
              checked={filters.spicy}
              onCheckedChange={(checked) => onFilterChange("spicy", !!checked)}
            >
              Spicy
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={filters.popular}
              onCheckedChange={(checked) =>
                onFilterChange("popular", !!checked)
              }
            >
              Popular
            </DropdownMenuCheckboxItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            disabled={!filtersActive}
            onClick={handleClearFilters}
            className="justify-center text-muted-foreground"
          >
            Clear Filters
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}