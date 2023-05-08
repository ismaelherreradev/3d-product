import { generateStyle } from "@/config/helpers";
import { Button } from "../ui/button";
import { Dispatch, SetStateAction } from "react";
import state from "@/store";
import { useSnapshot } from "valtio";

export default function FilePicker({
  file,
  setFile,
  readFile,
}: {
  file: File | "";
  setFile: Dispatch<SetStateAction<File>>;
  readFile: (type: string) => void;
}) {
  const snap = useSnapshot(state);
  return (
    <div className="filepicker-container">
      <div className="flex-1 flex flex-col">
        <input id="file-upload" type="file" accept="image/*" onChange={(e) => setFile(e.target.files![0])} />
        <label htmlFor="file-upload" className="filepicker-label">
          Upload File
        </label>

        <p className="mt-2 text-gray-500 text-xs truncate">{file === "" ? "No file selected" : file.name}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        <Button style={generateStyle("outline", snap)} onClick={() => readFile("logo")} className="text-xs">
          Logo
        </Button>
        <Button style={generateStyle("filled", snap)} onClick={() => readFile("full")} className="text-xs">
          Full
        </Button>
      </div>
    </div>
  );
}
