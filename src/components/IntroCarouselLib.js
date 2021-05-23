import { Box, Image } from "@chakra-ui/react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

export const IntroCarouselLib = () => {
  const [sliderRef] = useKeenSlider({
    slidesPerView: 2,
    spacing: 10,
    mode: "free-snap",
    centered: true,
    loop: true,
  });

  return (
    <Box
      className="keen-slider"
      width={["95vw", "50vw", "40vw"]}
      ref={sliderRef}
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
    </Box>
  );
};
