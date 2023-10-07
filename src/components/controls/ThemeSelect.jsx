import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { themes } from "@/options";
import useStore from "@/store";
import { cn } from "@/lib/utils";

const ThemeSelect = () => {
  const { theme } = useStore();

  return (
    <div>
      <label className="block mb-2 text-xs font-medium text-neutral-400">
        Theme
      </label>
      <Select
        value={theme}
        onValueChange={(theme) => useStore.setState({ theme })}
      >
        <SelectTrigger className="w-40">
          <SelectValue placeholder="Select Theme" />
        </SelectTrigger>
        <SelectContent className="dark">
          {Object.entries(themes).map(([name, theme]) => {
            return (
              <SelectItem key={name} value={name}>
                <div className="flex gap-2 items-center">
                  <div
                    className={cn("h-4 w-4 rounded-full", theme.background)}
                  ></div>
                  <span className="capitalize">{name}</span>
                </div>
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
};

export default ThemeSelect;
