import { useRef } from "react";
import { Card, CardContent } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Banner = () => {
  const plugin = useRef(Autoplay({ delay: 1500, stopOnInteraction: true }));

  return (
    <div className=" ">
      <Carousel
        plugins={[plugin.current]}
        className=""
        onMouseEnter={() => plugin.current.stop()}
        onMouseLeave={() => plugin.current.reset()}
      >
        <CarouselContent className="">
          {Array.from({ length: 3 }).map((_, index) => (
            <CarouselItem key={index} className={`embla__slide slide-${index}`}>
              <div className="">
                <Card className="bg-[#020228] border-none">
                  <CardContent className=" aspect-square flex w-full p-0  h-[600px] ">
                    {index === 1 ? (
                      <img
                        className="w-full h-full"
                        src="https://i.postimg.cc/mkm5HXTG/dark-lenovo-blue-logo-wallpaper-preview.jpg"
                        alt=""
                      />
                    ) : index === 2 ? (
                      <img
                        className="w-full h-full"
                        src="https://i.postimg.cc/XvZ1LQ1k/Xiaomi-Logo-Branding-2021.webp"
                        alt=""
                      />
                    ) : (
                      <img
                        className="w-full h-full"
                        src="https://i.postimg.cc/D0v7SSnD/dopely-google-logo-958x575.jpg"
                        alt=""
                      />
                    )}
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className=" ml-16 text-[#5969FF] bg-transparent" />
        <CarouselNext className=" mr-16 text-[#5969FF] bg-transparent" />
      </Carousel>
    </div>
  );
};

export default Banner;
