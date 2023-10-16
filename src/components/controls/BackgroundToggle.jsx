import React from "react";
import { Switch } from "../ui/switch";
import useStore from "@/store";

const BackgroundToggle = () => {
    const {showBackground: showBg} = useStore();

  return (
    <div>
      <label className="block mb-2 text-xs font-medium text-neutral-400">
        Background
      </label>
      <Switch 
      className="my-1.5"
      checked={showBg}
      onCheckedChange={checked => useStore.setState({showBackground: checked})}/>
    </div>
  );
};

export default BackgroundToggle;
