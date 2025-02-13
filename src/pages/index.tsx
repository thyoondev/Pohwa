import Intro from "@/features/home/intro";
import { Carousel, CarouselContent, CarouselItem } from "@/shared/ui/carousel";
import Image from "next/image";

const SHOP_ITEMS = [
  {
    id: 1,
    title: "Item 1",
    description: "Description 1",
    content: "Content 1",
  },
  {
    id: 2,
    title: "Item 2",
    description: "Description 2",
    content: "Content 2",
  },
  {
    id: 3,
    title: "Item 3",
    description: "Description 3",
    content: "Content 3",
  },
  {
    id: 4,
    title: "Item 4",
    description: "Description 4",
    content: "Content 4",
  },
  {
    id: 5,
    title: "Item 5",
    description: "Description 5",
    content: "Content 5",
  },
  {
    id: 6,
    title: "Item 6",
    description: "Description 6",
    content: "Content 6",
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
                className="w-full"
              >
                <CarouselContent className="-ml-2">
                  {SHOP_ITEMS.map((item) => (
                    <CarouselItem
                      key={item.id}
                      className="pl-8 basis-full md:basis-[45%] lg:basis-[30%]"
                    >
                      <div
                        className="w-full cursor-pointer bg-white"
                        onClick={() =>
                          window.open("https://pohwashop.imweb.me", "_blank")
                        }
                      >
                        <div className="aspect-[3/4] w-full">
                          <Image
                            src={`/pohwa_logo.png`}
                            alt={`Shop item ${item.id}`}
                            width={1000}
                            height={1000}
                            className="object-contain w-full h-full"
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
