import { Box, Image } from "@chakra-ui/react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

export const IntroCarouselLib = () => {
  const [sliderRef] = useKeenSlider({
    slidesPerView: 2,
    spacing: 16,
    mode: "free-snap",
    centered: true,
    loop: true,
  });

  return (
    <Box
      className="keen-slider"
      width={["100vw", "50vw", "40vw"]}
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
