import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/shared/ui/sheet";
import { Button } from "@/shared/ui/button";
import Link from "next/link";
import { MENU_LIST } from "@/entities/menuList";
import Image from "next/image";
import { Menu } from "lucide-react";

export function MobileSideMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="p-2">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side={"fullRight"}>
        <SheetHeader>
          <SheetTitle className="justify-center flex">
            <Image src="/pohwa_logo.svg" width={80} height={80} alt="logo" />
          </SheetTitle>
        </SheetHeader>
        <div className="grid py-4 text-2xl font-archivo">
          {MENU_LIST.map((menu) => (
            <SheetClose
              asChild
              className="grid grid-cols-4 border-b py-4"
              key={menu.id}
            >
              <Link
                href={menu.url.startsWith("http") ? menu.url : `${menu.url}`}
                target={menu.url.startsWith("http") ? "_blank" : "_self"}
              >
                {menu.title}
              </Link>
            </SheetClose>
          ))}
        </div>
        <SheetFooter></SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
