import { Ui, type UiProps } from "~/core";
import {
  type ShortHandType,
  type WithShorthandProps,
  resolveShorthandProps,
} from "~/utils/shorthand";

const shortHands = {
  bold: { fontWeight: "bold" },
  nowrap: { whiteSpace: "nowrap" },
} as const satisfies ShortHandType;

const defaultProps: TextProps = {
  display: "inline",
  color: "gray-900",
  fontWeight: "normal",
  as: "span",
};

export type TextProps = WithShorthandProps<UiProps<"span">, typeof shortHands>;

export const Text = (props: TextProps) => {
  const mergedProps = { ...defaultProps, ...props };
  const newProps = resolveShorthandProps(mergedProps, shortHands);
  return <Ui {...newProps} />;
};
