import { useEffect, useState } from "react";
import { HexAlphaColorPicker, HexColorInput } from "react-colorful";

interface info {
  color: string;
  active: boolean;
}

interface props {
  initColor: string;
  type: string;
  activePicker: Map<string, info>;
  setActivePicker: React.Dispatch<React.SetStateAction<Map<string, info>>>;
}

const ColorSquare = ({
  initColor,
  type,
  activePicker,
  setActivePicker,
}: props) => {
  // Picker State
  const [showPicker, setShowPicker] = useState(false);
  const [color, setColor] = useState(initColor);
  const [mousePosition, setMousePosition] = useState(0);

  useEffect(() => {
    if (activePicker.get(type)?.active) {
      setShowPicker(true);
    } else {
      setShowPicker(false);
    }
  }, [activePicker]);

  useEffect(() => {
    activePicker.set(type, {
      color: color,
      active: activePicker.get(type)!.active,
    });
  }, [color]);

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
      <div
        className="color-picker c-primary"
        style={{ backgroundColor: color }}
        onClick={(e) => {
          if (!activePicker.get(type)?.active) {
            activePicker.forEach((value, key) => {
              if (key !== type) {
                setActivePicker((activePicker) => {
                  const updatedmap = new Map(
                    activePicker.set(key, { color: value.color, active: false })
                  );

                  return updatedmap;
                });
              } else {
                setActivePicker((activePicker) => {
                  const updatedmap = new Map(
                    activePicker.set(key, { color: value.color, active: true })
                  );

                  return updatedmap;
                });
              }
            });
          } else {
            setShowPicker(!showPicker);
            activePicker.set(type, { color: color, active: false });
          }
          setMousePosition(e.clientX);
        }}
      ></div>
    </>
  );
};

export default ColorSquare;

// make inactive if you click outside / click on another one

// make a shared state with the parent
// change the state
