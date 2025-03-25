"use client";

import * as React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { MenuItem } from "@/data/menu";

interface FeaturedItemsProps {
  items: MenuItem[];
}

export default function FeaturedItems({ items }: FeaturedItemsProps) {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold tracking-tight">Featured Items</h2>
      </div>
      
      <Carousel className="w-full max-w-screen-lg mx-auto">
        <CarouselContent>
          {items.map((item) => (
            <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex flex-col p-0 overflow-hidden">
                    <div className="relative h-52 w-full">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
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
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </div>
  );
}