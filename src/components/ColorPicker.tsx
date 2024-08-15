import "../styles/ColorPicker.scss";

import { HexAlphaColorPicker, HexColorInput } from "react-colorful";
import { useState } from "react";
import ColorSquare from "./ColorSquare";

const colors = {
  primary: {
    color: "#194138",
    active: false,
  },
  secondary: {
    color: "#aaded3",
    active: false,
  },
  background: {
    color: "#ffffff",
    active: false,
  },
  text: {
    color: "#313131",
    active: false,
  },
  headlines: {
    color: "#000000",
    active: false,
  },
  accent: {
    color: "#f1ea53",
    active: false,
  },
};

const ColorPicker = () => {
  // picker state
  const [showPicker, setShowPicker] = useState(false);
  const [color, setColor] = useState("#aabbcc");
  const [mousePosition, setMousePosition] = useState(0);

  return (
    <>
      <div
        className="picker-container"
        style={{
          left: mousePosition,
          visibility: showPicker ? "visible" : "hidden",
        }}
      >
        <HexAlphaColorPicker color={color} onChange={setColor} />
        <HexColorInput
          className="color-input"
          color={color}
          onChange={setColor}
          placeholder="Type a color"
          prefixed
          alpha
        />
      </div>

      <div className="color-picker-container">
        <ColorSquare
          setShowPicker={setShowPicker}
          setMousePosition={setMousePosition}
          showPicker={showPicker}
          initColor={colors.primary.color}
          inputColor={color}
        />
        <ColorSquare
          setShowPicker={setShowPicker}
          setMousePosition={setMousePosition}
          showPicker={showPicker}
          initColor={colors.secondary.color}
          inputColor={color}
        />
        <ColorSquare
          setShowPicker={setShowPicker}
          setMousePosition={setMousePosition}
          showPicker={showPicker}
          initColor={colors.accent.color}
          inputColor={color}
        />
        <ColorSquare
          setShowPicker={setShowPicker}
          setMousePosition={setMousePosition}
          showPicker={showPicker}
          initColor={colors.background.color}
          inputColor={color}
        />
        <ColorSquare
          setShowPicker={setShowPicker}
          setMousePosition={setMousePosition}
          showPicker={showPicker}
          initColor={colors.headlines.color}
          inputColor={color}
        />
        <ColorSquare
          setShowPicker={setShowPicker}
          setMousePosition={setMousePosition}
          showPicker={showPicker}
          initColor={colors.text.color}
          inputColor={color}
        />
        <button>Apply</button>
      </div>
    </>
  );
};

export default ColorPicker;
