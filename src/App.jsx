import { useRef } from "react";
import CodeEditor from "./components/CodeEditor";
import { Button } from "./components/ui/button";
import { cn } from "./lib/utils";
import { fonts, themes } from "./options";
import useStore from "./store";

function App() {
  const { theme, padding, fontStyle, showBackground } = useStore();
  const editorRef = useRef(null);

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
    </main>
  );
}

export default App;
