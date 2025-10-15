import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface Officer {
  name: string;
  role: string;
  img: string;
  quote: string;
}

const Team = () => {
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

  const officers: Officer[] = [
    // Leadership
    { name: "Bryan Tineo", role: "President", img: "/Officers_Image/BryanTineo.png", quote: "Mindset is Everything" },
    { name: "Keshav Jindal", role: "Co-President", img: "/Officers_Image/KeshavJindal.png", quote: "Do the impossible, see the invisible" },
    { name: "Krisha Hemani", role: "Treasurer", img: "/Officers_Image/KrishaHemani.png", quote: "Live, Laugh, Love" },
    { name: "Angel Rivera", role: "Secretary", img: "/Officers_Image/AngelRivera.png", quote: "Imagine you're on your deathbed, and standing around your deathbed are the ghosts representing your unfulfilled potential" },
    { name: "Divyanshu Mehta", role: "Webmaster", img: "/Officers_Image/DivyanshuMehta.png", quote: "I am the danger. A guy opens his door and gets shot and you think that of me? No. I am the one who knocks" },
    
    // BeachHacks Directors
    { name: "Vansh Patel", role: "BeachHacks Tech Director", img: "/Officers_Image/VanshPatel.png", quote: "Why not me?" },
    { name: "Marisol Morales", role: "BeachHacks Logistics Director", img: "/Officers_Image/MarisolMorales.png", quote: "Bingle bongle, dingle dangle, yickedy doo" },
    { name: "Winston Ta", role: "BeachHacks Marketing Director", img: "/Officers_Image/WinstonTa.png", quote: "Take the leap of faith" },
    
    // Other Officers
    { name: "Sophia Doan", role: "Media Chair", img: "/Officers_Image/SophiaDoan.png", quote: "Live young, live hard" },
    { name: "Soham Vankudre", role: "Recruitment Chair", img: "/Officers_Image/SohamVankudre.png", quote: "You can't be a winner if you're always afraid of losing" },
    { name: "Aalind Kale", role: "Outreach Chair", img: "/Officers_Image/AalindKale.png", quote: "I am McLovin" },
    { name: "Deanna Solis", role: "UI/UX Designer", img: "/Officers_Image/DeannaSolis.png", quote: "90% of people quit before they win big" },
    { name: "Nathan Nguyen", role: "Membership Chair", img: "/Officers_Image/Nathan Nguyen.png", quote: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind" },
    { name: "Tiago Borges", role: "Social Media Chair", img: "/Officers_Image/Tiago Borges.png", quote: "Do or do not, there is no try" },
    { name: "Krrish Kohli", role: "ASEB Representative", img: "/Officers_Image/KrrishKohli.png", quote: "Limits only exist until you shatter them" },
  ];

  const toggleCard = (index: number) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <section id="team" className="py-24 bg-card/30 relative overflow-hidden">
      <div className="absolute inset-0 scan-effect opacity-20"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto space-y-12 animate-slide-in">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gradient glow-text">
              Meet Us
            </h2>
            <p className="text-muted-foreground text-lg">
              Meet the ACM officers leading the way
            </p>
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })]}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {officers.map((officer, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <div
                    className="relative h-80 cursor-pointer perspective-1000"
                    onClick={() => toggleCard(index)}
                  >
                    <div
                      className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
                        flippedCards.has(index) ? "rotate-y-180" : ""
                      }`}
                    >
                      {/* Front */}
                      <Card className="absolute inset-0 backface-hidden border-primary/30 hover:border-primary/50 transition-all overflow-hidden group animate-glow-pulse">
                        <div className="h-3/4 overflow-hidden bg-muted">
                          <img
                            src={officer.img}
                            alt={officer.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            onError={(e) => {
                              e.currentTarget.src = "/images/acm.png";
                            }}
                          />
                        </div>
                        <CardContent className="h-1/4 p-4 bg-gradient-to-b from-card to-card/80 flex flex-col justify-center">
                          <h3 className="font-bold text-foreground truncate">{officer.name}</h3>
                          <p className="text-sm text-primary truncate">{officer.role}</p>
                        </CardContent>
                      </Card>

                      {/* Back */}
                      <Card className="absolute inset-0 backface-hidden rotate-y-180 border-primary/50 bg-gradient-to-br from-primary/20 to-secondary/10 flex items-center justify-center p-6">
                        <CardContent className="text-center">
                          <blockquote className="text-foreground italic leading-relaxed">
                            "{officer.quote}"
                          </blockquote>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 -translate-x-12" />
            <CarouselNext className="right-0 translate-x-12" />
          </Carousel>

          {/* Edge gradient overlays for a fancier slide effect */}
          <div className="pointer-events-none absolute inset-y-28 left-0 w-16 bg-gradient-to-r from-background via-background/60 to-transparent" />
          <div className="pointer-events-none absolute inset-y-28 right-0 w-16 bg-gradient-to-l from-background via-background/60 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Team;
