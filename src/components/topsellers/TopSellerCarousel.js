import { useState, useRef, useEffect } from "react";
import { Box, Image } from "@chakra-ui/react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export const TopSellerCarousel = () => {
  const [pause, setPause] = useState(false);
  const timer = useRef();
  const [sliderRef, slider] = useKeenSlider({
    centered: true,
    duration: 1000,
    loop: true,
    mode: "free-snap",
    slidesPerView: 2,
    spacing: 16,
    dragStart: () => {
      setPause(true);
    },
    dragEnd: () => {
      setPause(false);
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
    }, 2000);
    return () => {
      clearInterval(timer.current);
    };
  }, [pause, slider]);

  return (
    <Box
      className="keen-slider"
      width={["100vw", "60vw", "50vw"]}
      ref={sliderRef}
      marginTop="5"
    >
      <div className="keen-slider__slide">
        <Image borderRadius="2xl" boxShadow="2xl" src="buttercream.jpg" />
      </div>
      <div className="keen-slider__slide">
        <Image borderRadius="2xl" boxShadow="2xl" src="vanillaRose.jpg" />
      </div>
      <div className="keen-slider__slide">
        <Image
          borderRadius="2xl"
          boxShadow="2xl"
          src="lemon yuzu honey tart.jpg"
        />
      </div>
      <div className="keen-slider__slide">
        <Image
          borderRadius="2xl"
          boxShadow="2xl"
          src="ʜᴀᴢᴇʟɴᴜᴛ ᴄʜᴏᴄᴏʟᴀᴛᴇ ɢᴀɴᴀᴄʜᴇ ᴛᴀʀᴛᴇ.jpg"
        />
      </div>
      <div className="keen-slider__slide">
        <Image
          borderRadius="2xl"
          boxShadow="2xl"
          src="ᴄʜᴏᴄᴏʟᴀᴛᴇ ᴄʀᴇᴀᴍ ᴄʜᴏᴜx ᴀᴜ ᴄʀᴀǫᴜᴇʟɪɴ.jpg"
        />
      </div>
      <div className="keen-slider__slide">
        <Image
          borderRadius="2xl"
          boxShadow="2xl"
          src="Choux Au Craquelin.jpg"
        />
      </div>
    </Box>
  );
};
