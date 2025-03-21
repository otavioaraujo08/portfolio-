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
    <ShadcnCarousel>
      <CarouselContent>
        {pictures.map((item) => (
          <CarouselItem key={item.id}>
            <div className="p-1">
              <Card className="bg-[#161D34] h-fit border-none">
                <CardContent>
                  <img
                    src={item.url}
                    alt="project image"
                    className="size-fit max-w-[70rem] rounded-xl"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </ShadcnCarousel>
  );
}
