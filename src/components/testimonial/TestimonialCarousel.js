import { useState, useRef, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import { TestimonialCarouselImage } from "./TestimonialCarouselImage";

export const TestimonialCarousel = () => {
  const [pause, setPause] = useState(false);
  const timer = useRef();
  const [sliderRef, slider] = useKeenSlider({
    centered: true,
    duration: 3000,
    loop: true,
    mode: "free-snap",
    spacing: 5,
    dragStart: () => {
      setPause(true);
    },
    dragEnd: () => {
      setPause(false);
    },
    breakpoints: {
      "(min-width: 480px)": {
        slidesPerView: 1,
        mode: "free-snap",
      },
      "(min-width: 768px)": {
        slidesPerView: 3,
        mode: "free-snap",
      },
      "(min-width: 1300px)": {
        slidesPerView: 4,
        mode: "free-snap",
      },
    },
  });

  useEffect(() => {
    sliderRef.current.addEventListener("mouseover", () => {
      setPause(true);
    });
    sliderRef.current.addEventListener("mouseout", () => {
      setPause(false);
    });
  }, [sliderRef]);

  useEffect(() => {
    timer.current = setInterval(() => {
      if (!pause && slider) {
        slider.next();
      }
    }, 3000);
    return () => {
      clearInterval(timer.current);
    };
  }, [pause, slider]);

  return (
    <Box
      className="keen-slider"
      width={["100vw", "70vw"]}
      ref={sliderRef}
      marginTop="5"
    >
      {[...Array(33)].map((_, i) => {
        return (
          <div key={i} className="keen-slider__slide">
            <TestimonialCarouselImage src={`testimonial/test${i}.png`} />
          </div>
        );
      })}
    </Box>
  );
};
