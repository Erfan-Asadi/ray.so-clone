import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { fonts } from "@/options";
import useStore from "@/store";

const FontSelect = () => {
  const { fontStyle } = useStore();



  return (
    <div>
      <label className="block mb-2 text-xs font-medium text-neutral-400">
        Font
      </label>
      <Select value={fontStyle} onValueChange={(fontStyle) => useStore.setState({fontStyle})}>
        <SelectTrigger className="w-40">
           
          <SelectValue placeholder="Select Font" />
        </SelectTrigger>
        <SelectContent className="dark max-h-[400px]">
          {Object.entries(fonts).map(([id, fontObj]) => {
            console.log(id, fontObj);
            
            return (
              <SelectItem key={id} value={id}>
                {fontObj.name}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
};

export default FontSelect;
