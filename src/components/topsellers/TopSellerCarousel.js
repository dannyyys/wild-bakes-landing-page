import { useState, useRef, useEffect } from "react";
import { Box, Image } from "@chakra-ui/react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export const TopSellerCarousel = () => {
  const [pause, setPause] = useState(false);
  const timer = useRef();
  const [sliderRef, slider] = useKeenSlider({
    duration: 3000,
    loop: true,
    mode: "free-snap",

    spacing: 16,
    dragStart: () => {
      setPause(true);
    },
    dragEnd: () => {
      setPause(false);
    },
    breakpoints: {
      "(min-width: 480px)": {
        slidesPerView: 2,
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
    <Box className="keen-slider" width={["95vw"]} ref={sliderRef} marginTop="5">
      <div className="keen-slider__slide">
        <Image
          borderRadius="2xl"
          boxShadow="2xl"
          src="buttercream.jpg"
          boxSize="300"
        />
      </div>
      <div className="keen-slider__slide">
        <Image
          borderRadius="2xl"
          boxShadow="2xl"
          src="vanillaRose.jpg"
          boxSize={["300", "300", "300"]}
        />
      </div>
      <div className="keen-slider__slide">
        <Image
          borderRadius="2xl"
          boxShadow="2xl"
          src="lemon yuzu honey tart.jpg"
          boxSize="300"
        />
      </div>
      <div className="keen-slider__slide">
        <Image
          borderRadius="2xl"
          boxShadow="2xl"
          src="ʜᴀᴢᴇʟɴᴜᴛ ᴄʜᴏᴄᴏʟᴀᴛᴇ ɢᴀɴᴀᴄʜᴇ ᴛᴀʀᴛᴇ.jpg"
          boxSize="300"
        />
      </div>
      <div className="keen-slider__slide">
        <Image
          borderRadius="2xl"
          boxShadow="2xl"
          src="ᴄʜᴏᴄᴏʟᴀᴛᴇ ᴄʀᴇᴀᴍ ᴄʜᴏᴜx ᴀᴜ ᴄʀᴀǫᴜᴇʟɪɴ.jpg"
          boxSize="300"
        />
      </div>
      <div className="keen-slider__slide">
        <Image
          borderRadius="2xl"
          boxShadow="2xl"
          src="Choux Au Craquelin.jpg"
          boxSize="300"
        />
      </div>
    </Box>
  );
};
