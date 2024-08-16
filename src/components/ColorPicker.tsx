import "../styles/ColorPicker.scss";
import { useState } from "react";
import ColorSquare from "./ColorSquare";

interface info {
  color: string;
  active: boolean;
}

const activePickerMap = new Map<string, info>([
  ["primary", { color: "#194138", active: false }],
  ["secondary", { color: "#aaded3", active: false }],
  ["accent", { color: "#f1ea53", active: false }],
  ["background", { color: "#ffffff", active: false }],
  ["headlines", { color: "#000000", active: false }],
  ["text", { color: "#313131", active: false }],
]);

const ColorPicker = () => {
  const [activePicker, setActivePicker] = useState(activePickerMap);

  return (
    <div className="fixed-full-width">
      <div className="color-picker-container">
        {Array.from(activePickerMap.entries()).map(
          ([key, value]: [string, info]) => {
            return (
              <ColorSquare
                key={key}
                type={key}
                initColor={value.color}
                activePicker={activePicker}
                setActivePicker={setActivePicker}
              />
            );
          }
        )}

        <button
          onClick={() => {
            const root = document.querySelector<HTMLElement>(":root");

            activePicker.forEach((value, key) => {
              root!.style.setProperty(`--color-${key}`, value.color);
            });
          }}
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default ColorPicker;
