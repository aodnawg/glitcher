import React from "react";
import {
  Slider as ChakraSlider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb
} from "@chakra-ui/core";

interface SliderProps {
  onChangeHandler: (val: any) => void;
}

const Slider: React.FC<SliderProps> = ({ onChangeHandler }) => {
  const sliderProps = {
    defaultValue: 0.5,
    max: 1,
    min: 0,
    step: 0.01
  };

  return (
    <ChakraSlider {...sliderProps} onChange={onChangeHandler}>
      <SliderTrack />
      <SliderFilledTrack />
      <SliderThumb />
    </ChakraSlider>
  );
};

type Handlers = ((val: number) => void)[];

export const makeSliders = (handlers: Handlers) => {
  return handlers.map(handler => {
    return <Slider onChangeHandler={handler} />;
  });
};

export default Slider;
