import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import { Card, CardContent } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

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
                <Card className=" border-none">
                  <CardContent className=" aspect-square flex w-full p-0  h-[550px] ">
                    {index === 1 ? (
                      <img
                        className="w-full h-full"
                        src="https://res.cloudinary.com/dudjn6epk/image/upload/v1730361197/zdfigxd7kabpa985ebgw.webp"
                        alt=""
                      />
                    ) : index === 2 ? (
                      <img
                        className="w-full h-full"
                        src="
                        https://res.cloudinary.com/dudjn6epk/image/upload/v1730361198/bbzodlljbldg3hbxmuva.png
                        "
                        alt=""
                      />
                    ) : (
                      <img
                        className="w-full h-full"
                        src="
                      https://res.cloudinary.com/dudjn6epk/image/upload/v1730361370/un4z0trlrfxcyqnm6ehe.jpg
                      "
                        alt=""
                      />
                    )}
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className=" ml-16 text-[#FF4500] bg-transparent" />
        <CarouselNext className=" mr-16 text-[#FF4500] bg-transparent" />
      </Carousel>
    </div>
  );
};

export default Banner;
