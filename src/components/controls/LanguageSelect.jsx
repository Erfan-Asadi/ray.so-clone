import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { languages } from "@/options";
import useStore from "@/store";
import { MagicWandIcon } from "@radix-ui/react-icons";

const LanguageSelect = () => {
  const { language, autoDetectLanguage } = useStore();

  const handleLanguageChange = () => {
    if (language === "auto-detect") {
      useStore.setState({ autoDetectLanguage: true, language: "plaintext" });
    } else {
      useStore.setState({ autoDetectLanguage: false, language });
    }
  };
  return (
    <div>
      <label className="block mb-2 text-xs font-medium text-neutral-400">
        Language
      </label>
      <Select value={language} onValueChange={handleLanguageChange}>
        <SelectTrigger className="w-40">
            {autoDetectLanguage && <MagicWandIcon className="mr-2" />}
          <SelectValue placeholder="Select Language" />
        </SelectTrigger>
        <SelectContent className="dark max-h-[500px]">
          <SelectItem value="auto-detect">Auto Detect</SelectItem>
          {Object.entries(languages).map(([lang, name]) => {
            return (
              <SelectItem key={lang} value={lang}>
                {name}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageSelect;
