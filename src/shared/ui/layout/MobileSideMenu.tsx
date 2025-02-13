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
import { NAV_MENU_LIST } from "@/shared/constants/menu";
import Image from "next/image";
import { Menu } from "lucide-react";
import router from "next/router";

export function MobileSideMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size={"icon"}
          className="border-none bg-transparent focus:ring-0 hover:bg-transparent"
        >
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side={"fullRight"}>
        <SheetHeader>
          <SheetTitle className="justify-center flex">
            <Image src="/pohwa_logo.png" width={80} height={80} alt="logo" />
          </SheetTitle>
        </SheetHeader>
        <div className="grid py-4 text-2xl font-archivo">
          {NAV_MENU_LIST.map((menu) => (
            <SheetClose
              asChild
              className="grid grid-cols-4 border-b py-4"
              key={menu.id}
            >
              <Link
                href={menu.url.startsWith("http") ? menu.url : `${menu.url}`}
                target={menu.target === "_blank" ? "_blank" : "_self"}
                className={`relative  ${
                  router.pathname === menu.url
                    ? "text-red-700 hover:text-red-500"
                    : "text-white"
                }`}
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
