import { useEffect, useRef } from "react";
import CodeEditor from "./components/CodeEditor";
import { cn } from "./lib/utils";
import { fonts, themes } from "./options";
import useStore from "./store";
import { Card, CardContent } from "./components/ui/card";
import ExportOptions from "./components/controls/ExportOptions";
import ThemeSelect from "./components/controls/ThemeSelect";
import LanguageSelect from "./components/controls/LanguageSelect";
import FontSelect from "./components/controls/FontSelect";
import FontSizeInput from "./components/controls/FontSizeInput";
import PaddingSlider from "./components/controls/PaddingSlider";
import BackgroundToggle from "./components/controls/BackgroundToggle";
import DarkModeToggle from "./components/controls/DarkModeToggle";
import { Resizable } from "re-resizable";

function App() {
  const { theme, padding, fontStyle, showBackground } = useStore();
  const editorRef = useRef(null);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    if (queryParams.size === 0) return;
    const state = Object.fromEntries(queryParams);

    useStore.setState({
      ...state,
      code: state.code ? atob(state.code) : "",
      autoDetectLanguage: state.autoDetectLanguage === "true",
      darkMode: state.darkMode === true,
      fontSize: Number(state.fontSize || 18),
      padding: Number(state.padding || 64),
    });
  }, []);

  return (
    <main className="dark min-h-screen flex justify-center items-center bg-neutral-950 text-white">
      <link
        rel="stylesheet"
        href={themes[theme].theme}
        crossOrigin="anonymous"
      />
      <link
        rel="stylesheet"
        href={fonts[fontStyle].src}
        crossOrigin="anonymous"
      />
      <Resizable
        enable={{ left: true, right: true }}
        minWidth={padding * 2 + 400}
      >
        <div
          className={cn(
            "overflow-hidden mb-2 transition-all ease-out",
            showBackground ? themes[theme].background : "ringring-neutral-900"
          )}
          style={{ padding }}
          ref={editorRef}
        >
          <CodeEditor />
        </div>
      </Resizable>

      <Card className="fixed bottom-16 py-6 px-8 mx-6 bg-neutral-900/90 backdrop-blur">
        <CardContent className="flex flex-wrap gap-6 p-0">
          <LanguageSelect />
          <ThemeSelect />
          <FontSelect />
          <PaddingSlider />
          <FontSizeInput />
          <BackgroundToggle />
          <DarkModeToggle />
          <div className="bg-neutral-800 w-px"></div>
          <div className="place-self-center">
            <ExportOptions targetRef={editorRef} />
          </div>
        </CardContent>
      </Card>
    </main>
  );
}

export default App;
