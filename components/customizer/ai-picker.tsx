import { Button } from "../ui/button";
import { useSnapshot } from "valtio";

import state from "@/store";
import { generateStyle } from "@/config/helpers";

export default function AiPicker({
  prompt,
  setPrompt,
  generatingImg,
  handleSubmit,
}: {
  prompt: string;
  setPrompt: any;
  generatingImg: boolean;
  handleSubmit: any;
}) {
  const snap = useSnapshot(state);
  return (
    <div className="aipicker-container">
      <textarea
        placeholder="Ask AI..."
        rows={5}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="aipicker-textarea"
      />
      <div className="flex flex-wrap gap-3">
        {generatingImg ? (
          <Button style={generateStyle("outline", snap)} className="text-xs">
            Asking AI...
          </Button>
        ) : (
          <>
            <Button style={generateStyle("outline", snap)} onClick={() => handleSubmit("logo")} className="text-xs">
              AI Logo
            </Button>

            <Button style={generateStyle("filled", snap)} onClick={() => handleSubmit("full")} className="text-xs">
              AI Full
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
