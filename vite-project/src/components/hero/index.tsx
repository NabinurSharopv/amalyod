// src/components/hero/index.tsx
import { useState, useEffect } from "react";
import HeroItem from "../hero/HeroItem/hero-item";
import { ChevronLeft, ChevronRight } from "lucide-react";

// ✅ Data direkt komponent ichida (mocks fayli yo'q bo'lsa)
const hero_mock = [
  {
    id: 0,
    title: "Let's Make a Better",
    subTitle: "WELCOME TO GREENSHOP",
    description: "We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle.",
    buttonText: "SHOP NOW",
    big_img_url: "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fflower1.png?alt=media&token=0b",
    small_img_url: "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fflower2.png?alt=media&token=90"
  },
  {
    id: 1,
    title: "LET'S LIVE IN A BETTER",
    subTitle: "WELCOME TO GREENSHOP",
    description: "We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle.",
    buttonText: "LET'S START",
    big_img_url: "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fhero-flower-1.png?alt=media&token=0b",
    small_img_url: "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fflower2.png?alt=media&token=90"
  },
  {
    id: 2,
    title: "LET'S OBSERVE A BETTER",
    subTitle: "WELCOME TO GREENSHOP",
    description: "We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle.",
    buttonText: "GET CREDITS",
    big_img_url: "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fflower3.png?alt=media&token=0b",
    small_img_url: "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fflower4.png?alt=media&token=90"
  }
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const totalItems = hero_mock.length;

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalItems);
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalItems]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false); // Pause auto-play when user interacts
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume after 10 seconds
  };

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? totalItems - 1 : currentIndex - 1;
    goToSlide(newIndex);
  };

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % totalItems;
    goToSlide(newIndex);
  };

  // Background gradient based on index
  const bgGradients = [
    "bg-gradient-to-r from-green-50 to-emerald-50",
    "bg-gradient-to-r from-blue-50 to-cyan-50", 
    "bg-gradient-to-r from-amber-50 to-orange-50"
  ];

  return (
    <section className={`relative overflow-hidden rounded-3xl mx-4 md:mx-8 my-6 ${bgGradients[currentIndex % bgGradients.length]}`}>
      {/* Main Carousel */}
      <div className="relative h-full">
        <HeroItem {...hero_mock[currentIndex]} />
        
        {/* Navigation Buttons */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-10"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {hero_mock.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? "bg-[#46A358] scale-125" 
                : "bg-white/70 hover:bg-white"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Auto-play toggle */}
      <button
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        className="absolute bottom-6 right-6 bg-white/80 hover:bg-white text-gray-800 px-4 py-2 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 z-10"
      >
        {isAutoPlaying ? "⏸️ Pause" : "▶️ Play"}
      </button>

      {/* Slide Counter */}
      <div className="absolute top-6 right-6 bg-white/80 text-gray-800 px-4 py-2 rounded-full text-sm font-medium shadow-lg z-10">
        {currentIndex + 1} / {totalItems}
      </div>
    </section>
  );
};

export default Hero;