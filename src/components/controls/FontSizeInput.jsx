import React from "react";
import { Input } from "../ui/input";
import useStore from "@/store";

const FontSizeInput = () => {
    const {fontSize} = useStore();

  return <div>
    <label className="black mb-2 text-xs font-medium text-neutral-400">
        font Size
    </label>
    <Input 
        type="number"
        className="!dark w-16 bg-transparent"
        min={6}
        value={fontSize}
        onChange={e => useStore.setState({fontSize: Number(e.target.value)})}
    />
  </div>;
};

export default FontSizeInput;
