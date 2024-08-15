import { useEffect, useState } from "react";

interface props {
  setShowPicker: React.Dispatch<React.SetStateAction<boolean>>;
  setMousePosition: React.Dispatch<React.SetStateAction<number>>;
  showPicker: boolean;
  initColor?: string;
  inputColor: string;
}

const ColorSquare = ({
  setShowPicker,
  setMousePosition,
  showPicker,
  initColor,
  inputColor,
}: props) => {
  const [bgColor, setBgColor] = useState(initColor ? initColor : "");
  useEffect(() => {
    setBgColor(inputColor);
  }, [inputColor]);
  return (
    <div
      className="color-picker c-primary"
      style={{ backgroundColor: bgColor }}
      onClick={(e) => {
        setShowPicker(!showPicker);
        setMousePosition(e.clientX);
      }}
    ></div>
  );
};

export default ColorSquare;
