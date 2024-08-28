import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/shared/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/shared/ui/carousel";
import { InstagramEmbed } from "react-social-media-embed";

const instaContent = [
  "https://www.instagram.com/reel/C81Mfuayj0N/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  "https://www.instagram.com/reel/C9kPpEYyvJ1/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  "https://www.instagram.com/reel/C9xAtl7yuI8/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  "https://www.instagram.com/reel/C-PtYkQS2-p/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  "https://www.instagram.com/reel/C-uSTWMSi9j/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
];

export function InstaCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-screen"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="-ml-1">
        {instaContent.map((contentUrl, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className=" border-none">
                <CardContent className="flex aspect-square items-center justify-center p-8">
                  <span className="text-4xl font-semibold">
                    <InstagramEmbed
                      url={contentUrl}
                      width={"100%"}
                      placeholderDisabled={true}
                    />
                  </span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
