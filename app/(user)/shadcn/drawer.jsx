import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

function DrawerDemo() {
  return (
    <Drawer>
      <DrawerTrigger asChild><Button>Open Drawer</Button></DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Are you absolutely sure?</DrawerTitle>
          <DrawerDescription>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit
            omnis tempora molestias accusamus tempore! Obcaecati quaerat, et
            dolorum sapiente unde fugit culpa blanditiis nisi illum mollitia
            placeat voluptate uos sit cum voluptatibus repellendus eius
            doloremque eligendi nam fuga optio neque! Dolorum magni iste
            perferendis dolor. Incidunt autem unde facilis cum!
          </DrawerDescription>
          <DrawerDescription>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit
            omnis tempora molestias accusamus tempore! Obcaecati quaerat, et
            dolorum sapiente unde fugit culpa blanditiis nisi illum mollitia
            placeat voluptate quos sit cum voluptatibus repellendus eius
            doloremque eligendi nam fuga optio neque! Dolorum magni iste
            perferendis dolor. Incidunt autem unde facilis cum!
          </DrawerDescription>
          <DrawerDescription>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit
            omnis tempora molestias accusamus tempore! Obcaecati quaerat, et
            dolorum sapiente unde fugit culpa blanditiis nisi illum mollitia
            placeat voluptate quos sit cum voluptatibus repellendus eius
            doloremque eligendi nam fuga optio neque! Dolorum magni iste
            perferendis dolor. Incidunt autem unde facilis cum!
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <Button>Submit</Button>
          <DrawerClose>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export default DrawerDemo;
