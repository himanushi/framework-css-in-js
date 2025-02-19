import { useEffect, useRef } from "react";
import { Ui, type UiProps } from "~/core/ui/Ui";
import { colors } from "~/core/ui/values";

export type CheckboxProps = {
  checked?: boolean;
  indeterminate?: boolean;
} & UiProps<"input">;

const baseContainer: UiProps = {
  w: 20,
  h: 20,
  border: "2px solid",
  radius: 4,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
};

const baseCheckMark: UiProps = {
  color: "white",
  fontSize: 16,
};

export const Checkbox = (props: CheckboxProps) => {
  const {
    checked,
    value,
    indeterminate,
    className,
    style,
    disabled,
    ...inputProps
  } = props;
  const isChecked = checked ?? !!value ?? false;

  const containerStyle: UiProps = {
    ...baseContainer,
    backgroundColor:
      indeterminate || isChecked ? colors["blue-500"] : "transparent",
    borderColor:
      indeterminate || isChecked ? colors["blue-500"] : colors["gray-200"],
    ...(disabled ? { opacity: 0.5, cursor: "not-allowed" } : {}),
    style,
  };

  const isFirstRender = useRef(true);
  useEffect(() => {
    isFirstRender.current = false;
  }, []);

  return (
    <Ui as="label" userSelect="none" className={className} {...containerStyle}>
      {indeterminate ? (
        <Ui
          as="div"
          $motion
          initial={isFirstRender.current ? undefined : { scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.1 }}
          {...baseCheckMark}
        >
          —
        </Ui>
      ) : isChecked ? (
        <Ui
          as="div"
          $motion
          initial={isFirstRender.current ? undefined : { scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.1 }}
          {...baseCheckMark}
        >
          ✓
        </Ui>
      ) : null}
      <Ui
        as="input"
        type="checkbox"
        checked={isChecked}
        disabled={disabled}
        style={{ display: "none" }}
        {...inputProps}
      />
    </Ui>
  );
};
