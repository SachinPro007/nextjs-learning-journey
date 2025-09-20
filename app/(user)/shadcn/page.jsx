import React from "react";
import Navigation from "./Navigation";
import CarouselDemo from "./carouseltest";
import CardSection from "./cardSection";
import DialogDemo from "./dialog";
import DrawerDemo from "./drawer";
import SideMenu from "./sideMenu";
import { Separator } from "@radix-ui/react-separator";
import { AccordionDemo } from "./accordion";

function ShadcnComponentDemo() {
  return (
    <>
      <section className="flex justify-center">
        <Navigation />
      </section>

      <section className="w-[80%] container mx-auto my-4">
        <CarouselDemo />
      </section>

      <section className="mt-5">
        <h1 className="text-6xl text-center">WHAT I DO...?</h1>
        <CardSection />
      </section>

      <section className="mt-10 flex justify-center gap-4">
        <DialogDemo />
        <DrawerDemo />
        <SideMenu />
      </section>

      <Separator className="my-4" />

      <section className="container mx-auto w-[80%">
        <h1 className="text-6xl text-center my-6">Hahahahaahah.......</h1>
        <AccordionDemo />
      </section>
    </>
  );
}

export default ShadcnComponentDemo;
