import { useState, useRef, useEffect } from "react";
import { Box, Image } from "@chakra-ui/react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

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
      <div className="keen-slider__slide">
        <Image
          borderRadius="2xl"
          src="testimonial/test.png"
          objectFit="contain"
          height={["300"]}
          width={["275"]}
        />
      </div>
      <div className="keen-slider__slide">
        <Image
          borderRadius="2xl"
          src="testimonial/test2.png"
          objectFit="contain"
          height={["300"]}
          width={["275"]}
        />
      </div>
      <div className="keen-slider__slide">
        <Image
          borderRadius="2xl"
          src="testimonial/test25.png"
          objectFit="contain"
          height={["300"]}
          width={["275"]}
        />
      </div>
      <div className="keen-slider__slide">
        <Image
          borderRadius="2xl"
          src="testimonial/test26.png"
          objectFit="contain"
          height={["300"]}
          width={["275"]}
        />
      </div>
      <div className="keen-slider__slide">
        <Image
          borderRadius="2xl"
          src="testimonial/test7.png"
          objectFit="contain"
          height={["300"]}
          width={["275"]}
        />
      </div>
      <div className="keen-slider__slide">
        <Image
          borderRadius="2xl"
          src="testimonial/test11.png"
          objectFit="contain"
          height={["300"]}
          width={["275"]}
        />
      </div>
      <div className="keen-slider__slide">
        <Image
          borderRadius="2xl"
          src="testimonial/test13.png"
          objectFit="contain"
          height={["300"]}
          width={["275"]}
        />
      </div>

      <div className="keen-slider__slide">
        <Image
          borderRadius="2xl"
          src="testimonial/test14.png"
          objectFit="contain"
          height={["300"]}
          width={["275"]}
        />
      </div>
      <div className="keen-slider__slide">
        <Image
          borderRadius="2xl"
          src="testimonial/test10.png"
          objectFit="contain"
          height={["300"]}
          width={["275"]}
        />
      </div>
      <div className="keen-slider__slide">
        <Image
          borderRadius="2xl"
          src="testimonial/test5.png"
          objectFit="contain"
          height={["300"]}
          width={["275"]}
        />
      </div>
      <div className="keen-slider__slide">
        <Image
          borderRadius="2xl"
          src="testimonial/test28.png"
          objectFit="contain"
          height={["300"]}
          width={["275"]}
        />
      </div>
      <div className="keen-slider__slide">
        <Image
          borderRadius="2xl"
          src="testimonial/test30.png"
          objectFit="contain"
          height={["300"]}
          width={["275"]}
        />
      </div>
      <div className="keen-slider__slide">
        <Image
          borderRadius="2xl"
          src="testimonial/test16.png"
          objectFit="contain"
          height={["300"]}
          width={["275"]}
        />
      </div>
      <div className="keen-slider__slide">
        <Image
          borderRadius="2xl"
          src="testimonial/test17.png"
          objectFit="contain"
          height={["300"]}
          width={["275"]}
        />
      </div>
      <div className="keen-slider__slide">
        <Image
          borderRadius="2xl"
          src="testimonial/test23.png"
          objectFit="contain"
          height={["300"]}
          width={["275"]}
        />
      </div>
      <div className="keen-slider__slide">
        <Image
          borderRadius="2xl"
          src="testimonial/test31.jpg"
          objectFit="contain"
          height={["300"]}
          width={["275"]}
        />
      </div>
      <div className="keen-slider__slide">
        <Image
          borderRadius="2xl"
          src="testimonial/test32.jpg"
          objectFit="contain"
          height={["300"]}
          width={["275"]}
        />
      </div>
      <div className="keen-slider__slide">
        <Image
          borderRadius="2xl"
          src="testimonial/test33.jpg"
          objectFit="contain"
          height={["300"]}
          width={["275"]}
        />
      </div>
    </Box>
  );
};
