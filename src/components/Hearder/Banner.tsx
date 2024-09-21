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
                        src=" https://cdn.dribbble.com/users/3226801/screenshots/16671384/media/94cb2dc3903e83f2222e0599e97ca592.jpg"
                        alt=""
                      />
                    ) : index === 2 ? (
                      <img
                        className="w-full h-full"
                        src="
                        https://img.pikbest.com/origin/06/39/82/47ppIkbEsT7dJ.jpg!bwr800
                        "
                        alt=""
                      />
                    ) : (
                      <img
                        className="w-full h-full"
                        src="
                      https://i.pinimg.com/originals/a8/72/ed/a872ede45154798639d642e1bb1bf6d0.jpg
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
        <CarouselPrevious className=" ml-16 text-[#5969FF] bg-transparent" />
        <CarouselNext className=" mr-16 text-[#5969FF] bg-transparent" />
      </Carousel>
    </div>
  );
};

export default Banner;
