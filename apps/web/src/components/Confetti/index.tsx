import Fireworks from "react-canvas-confetti/dist/presets/fireworks";
import Pride from "react-canvas-confetti/dist/presets/pride";
import Snow from "react-canvas-confetti/dist/presets/snow";
import Realstic from "react-canvas-confetti/dist/presets/realistic";
import Crossfire from "react-canvas-confetti/dist/presets/crossfire";
import type { TPresetInstanceProps } from "react-canvas-confetti/dist/types";
import useWindowSize from "../../hooks/useWindowSize";

interface ConfettiProps extends TPresetInstanceProps {
  type: "fireworks" | "pride" | "snow" | "realistic" | "crossfire";
}

const Confetti = ({ type, ...props }: ConfettiProps) => {
  const Preset =
    type === "fireworks"
      ? Fireworks
      : type === "pride"
        ? Pride
        : type === "snow"
          ? Snow
          : type === "crossfire"
            ? Crossfire
            : Realstic;

  const windowSize = useWindowSize();

  return (
    <Preset
      {...props}
      width={windowSize.width}
      height={windowSize.height}
      style={{
        zIndex: 9999,
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
      }}
    />
  );
};

export default Confetti;
