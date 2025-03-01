import { css } from "@emotion/css";
import { Ui, type UiProps } from "~/core";
import {
  type ShortHandType,
  type WithShorthandProps,
  resolveShorthandProps,
} from "~/utils/shorthand";

const shortHands = {
  size: "fontSize",
} as const satisfies ShortHandType;

const defaultProps: IconProps = {
  as: "span",

  display: "inline-block",
  lineHeight: "0.1rem",

  className: css("svg { width: 1em; height: 100%; }"),
};

export type IconProps = WithShorthandProps<UiProps<"span">, typeof shortHands>;

/**
 * @shorthands
 * size
 */
export const Icon = (props: IconProps) => {
  const newProps = resolveShorthandProps(
    { ...defaultProps, ...props },
    shortHands,
  );
  return <Ui {...newProps} />;
};
