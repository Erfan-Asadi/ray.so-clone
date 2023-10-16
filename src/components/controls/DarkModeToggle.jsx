import React from "react";
import { Switch } from "../ui/switch";
import useStore from "@/store";

const DarkModeToggle = () => {
    const {darkMode} = useStore();

  return (
    <div>
      <label className="block mb-2 text-xs font-medium text-neutral-400">
        DarkMode
      </label>
      <Switch 
      className="my-1.5"
      checked={darkMode}
      onCheckedChange={darkMode => useStore.setState({darkMode})}/>
    </div>
  );
};

export default DarkModeToggle;
