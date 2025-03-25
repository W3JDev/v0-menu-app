"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { menuData } from "@/data/menu";
import type { MenuItem } from "@/data/menu";

interface MenuItemCardProps {
  item: MenuItem;
}

export default function MenuItemCard({ item }: MenuItemCardProps) {
  const category = menuData.categories.find(cat => cat.id === item.categoryId);
  
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
          <CardContent className="p-0">
            <div className="relative h-48 w-full">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
              />
              {item.popular && (
                <div className="absolute top-2 right-2">
                  <Badge>Popular</Badge>
                </div>
              )}
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-lg">{item.name}</h3>
                <p className="font-semibold text-muted-foreground">
                  ${item.price.toFixed(2)}
                </p>
              </div>
              <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {item.vegetarian && (
                  <Badge variant="outline">Vegetarian</Badge>
                )}
                {item.spicy && <Badge variant="outline">Spicy</Badge>}
                {item.dietaryInfo?.includes("Gluten-Free") && (
                  <Badge variant="outline">Gluten-Free</Badge>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-lg">
        <DialogTitle>{item.name}</DialogTitle>
        <div className="grid gap-4 py-4">
          <div className="relative h-60 w-full rounded-md overflow-hidden">
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover"
            />
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-1">Description</h4>
            <p className="text-muted-foreground">{item.description}</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-1">Price</h4>
            <p className="text-lg font-medium">${item.price.toFixed(2)}</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-1">Category</h4>
            <p className="text-muted-foreground">{category?.name || item.categoryId}</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-1">Ingredients</h4>
            <ul className="list-disc pl-5 text-muted-foreground">
              {item.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
          
          {item.allergens && item.allergens.length > 0 && (
            <div>
              <h4 className="text-lg font-semibold mb-1">Allergens</h4>
              <div className="flex flex-wrap gap-2">
                {item.allergens.map((allergen, index) => (
                  <Badge key={index} variant="outline" className="text-red-500 border-red-200">
                    {allergen}
                  </Badge>
                ))}
              </div>
            </div>
          )}
          
          {item.dietaryInfo && item.dietaryInfo.length > 0 && (
            <div>
              <h4 className="text-lg font-semibold mb-1">Dietary Info</h4>
              <div className="flex flex-wrap gap-2">
                {item.dietaryInfo.map((info, index) => (
                  <Badge key={index} variant="outline" className="text-green-500 border-green-200">
                    {info}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}