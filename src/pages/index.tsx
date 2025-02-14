import Intro from "@/features/home/intro";
import { Carousel, CarouselContent, CarouselItem } from "@/shared/ui/carousel";
import Image from "next/image";

const SHOP_ITEMS = [
  {
    id: 1,
    title: "POHWA Logo Balaclava - Black",
    description: "₩18,000",
    imgUrl: "https://cdn.imweb.me/thumbnail/20250214/8dabe2e3aaffd.gif",
    url: "http://shop.pohwa.xyz/?idx=16",
  },
  {
    id: 2,
    title: "POHWA Logo Cap - Black",
    description: "₩35,000",
    imgUrl: "https://cdn.imweb.me/thumbnail/20250214/d38e210bcaaba.gif",
    url: "http://shop.pohwa.xyz/?idx=15",
  },
  {
    id: 3,
    title: "POHWA Logo Hoodie - Black",
    description: "₩65,000",
    imgUrl: "https://cdn.imweb.me/thumbnail/20250214/04021b7a0cda1.gif",
    url: "http://shop.pohwa.xyz/?idx=14",
  },
];

export default function Home() {
  return (
    <div className="relative w-full">
      {/* 첫 번째 섹션 - 고정 */}
      <section className="fixed top-0 left-0 w-full h-[100dvh] flex items-center justify-center">
        <Intro />
      </section>

      {/* 스크롤 컨텐츠 */}
      <div className="relative">
        {/* 첫 번째 섹션의 공간 확보 */}
        <div className="h-[100dvh]" />

        {/* 두 번째 섹션 */}
        <section className="relative w-full h-[100dvh] bg-background">
          <div className="w-full h-full flex flex-col justify-center items-center bg-background/50 p-4">
            <div className="relative w-full max-w-6xl">
              <Carousel
                opts={{
                  align: "center",
                  loop: true,
                }}
                className="w-full "
              >
                <CarouselContent className="justify-around">
                  {SHOP_ITEMS.map((item) => (
                    <CarouselItem
                      key={item.id}
                      className="basis-10/12 md:basis-[45%] lg:basis-[30%]"
                    >
                      <div
                        className=" w-full cursor-pointer bg-white "
                        onClick={() => window.open(item.url)}
                      >
                        <div className="aspect-[3/4] w-full ">
                          <Image
                            src={item.imgUrl}
                            alt={`Shop item ${item.id}`}
                            width={1000}
                            height={1000}
                            className="object-cover w-full h-full "
                          />
                        </div>
                        <div className="p-4">
                          <p className="font-medium text-lg text-black">
                            {item.title}
                          </p>
                          <p className="text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
