import {
  type ShortHandType,
  type WithShorthandProps,
  resolveShorthandProps,
} from "~/utils/shorthand";
import { BaseMotion, type BaseMotionProps } from "./BaseMotion";

const shortHands = {
  iCenter: { alignItems: "center" },
  iStart: { alignItems: "flex-start" },
  iEnd: { alignItems: "flex-end" },
  jCenter: { justifyContent: "center" },
  jStart: { justifyContent: "flex-start" },
  jEnd: { justifyContent: "flex-end" },
  jBetween: { justifyContent: "space-between" },

  column: { flexDirection: "column" },

  p: "padding",
  pt: "paddingTop",
  pr: "paddingRight",
  pb: "paddingBottom",
  pl: "paddingLeft",
  py: (value: string | number) => ({
    paddingTop: value,
    paddingBottom: value,
  }),
  px: (value: string | number) => ({
    paddingLeft: value,
    paddingRight: value,
  }),

  w: "width",
  h: "height",

  solid: { border: "1px solid" },

  radius: "borderRadius",
} as const satisfies ShortHandType;

const defaultProps: MotionProps = {
  display: "flex",
};

export type MotionProps<E extends React.ElementType = React.ElementType> =
  WithShorthandProps<BaseMotionProps<E>, typeof shortHands>;

export const Motion = (props: MotionProps) => {
  const mergedProps = { ...defaultProps, ...props };
  const newProps = resolveShorthandProps(mergedProps, shortHands);
  return <BaseMotion {...newProps} />;
};
