import React, { ReactNode } from "react";
import styled, { css } from "styled-components";

export interface IBadgeProps {
  /** Badge Content */
  children: ReactNode;
  /** Can be set to primary, secondary, success, warning, danger or omitted (meaning default) */
  kind?: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
  /** Proccesing indication */
  pulse?: boolean;
  /** Badge size */
  size?: "small" | "medium" | "large";
  /** Text to show when hovering over the badge */
  title?: string;
}

const dot = css`
  min-width: 6px;
  height: 6px;
  border-radius: 100%;
  line-height: 0;
`;

const sizes = {
  small: css`
    font-size: 12px;
    font-weight: 500;
    white-space: nowrap;
    padding: 0 4px;
  `,
  medium: css`
    font-size: 14px;
    font-weight: 500;
    white-space: nowrap;
    padding: 0 5px;
  `,
  large: css`
    font-size: 16px;
    font-weight: 600;
    white-space: nowrap;
    padding: 1px 7px;
  `,
};

const BadgeStyled = styled.span<IBadgeProps>`
  background-color: red;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  z-index: 10;
  display: inline-flex;
  flex: 0 0 auto;
  max-width: 100%;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  border-radius: 0.25rem;
  user-select: none;
  padding-top: 1px;
  ${(props) => (props.children ? sizes[props.size] : dot)};
`;

/** Badge Component */
const Badge: React.FC<IBadgeProps> = (props: IBadgeProps) => (
  <BadgeStyled {...props} title={props.title}>
    {props.children}
  </BadgeStyled>
);

Badge.defaultProps = {
  kind: "default",
  pulse: false,
  size: "medium",
};

export default Badge;
