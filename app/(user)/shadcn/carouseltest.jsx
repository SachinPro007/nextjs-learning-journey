"use client";

import Autoplay from "embla-carousel-autoplay"

import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function CarouselDemo() {
  return (
    <Carousel 
      plugins={
        [
        Autoplay({
          delay: 2000,
        }),
      ]}
      opts={{
      align: "start",
      loop: true,
    }}>
      <CarouselContent >
        {Array.from({length: 8}).map((_, i) => (
          <CarouselItem key={i} className="basis-1/3">
            <Card className={"flex justify-center text-5xl items-center h-16"}>{i + 1}</Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default CarouselDemo;
