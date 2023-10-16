import React from "react";
import { Slider } from "../ui/slider";
import useStore from "@/store";

const PaddingSlider = () => {
  const { padding } = useStore();
  console.log(padding);

  return (
    <div>
      <label className="block mb-2 text-xs font-medium text-neutral-400">
        Padding
      </label>
      <Slider
        className="my-5 w-40"
        value={[padding]}
        min={0}
        max={100}
        step={4}
        onValueChange={([padding]) => useStore.setState({ padding })}
      />
    </div>
  );
};

export default PaddingSlider;
