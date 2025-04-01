import { Card, CardContent } from '@/components/ui/card';
import {
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Carousel as ShadcnCarousel,
} from '@/components/ui/carousel';

export function Carousel({ pictures }) {
  return (
    <ShadcnCarousel
      className="relative overflow-hidden"
      opts={{ loop: true, align: 'center' }}
    >
      <CarouselContent className="flex w-full flex-nowrap">
        {pictures.map((item) => (
          <CarouselItem key={item.id} className="w-full">
            <div className="p-1">
              <Card className="bg-[#161D34] h-fit border-none">
                <CardContent className="flex justify-center">
                  <img
                    src={item.url}
                    alt="project image"
                    className="max-w-[70rem] rounded-xl"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-20 top-1/2 transform -translate-y-1/2 text-blue-700 cursor-pointer" />
      <CarouselNext className="absolute right-20 top-1/2 transform -translate-y-1/2 text-blue-700 cursor-pointer" />
    </ShadcnCarousel>
  );
}
