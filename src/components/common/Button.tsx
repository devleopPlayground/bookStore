import styled from "styled-components";
import type { ButtonScheme, ButtonSize } from "../../styles/theme";
import { ButtonHTMLAttributes } from "react";

type ButtonProps = {
  size: ButtonSize;
  scheme: ButtonScheme;
  isLoading?: boolean;
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  children,
  size = "medium",
  scheme,
  isLoading = false,
  ...props
}: ButtonProps) => {
  return (
    <ButtonStyle size={size} scheme={scheme} isLoading={isLoading} {...props}>
      {children}
    </ButtonStyle>
  );
};

export default Button;

const ButtonStyle = styled.button<Omit<ButtonProps, "children">>`
  font-size: ${({ theme, size }) => theme.button[size].fontSize};
  padding: ${({ theme, size }) => theme.button[size].padding};
  color: ${({ theme, scheme }) => theme.buttonScheme[scheme].color};
  background-color: ${({ theme, scheme }) =>
    theme.buttonScheme[scheme].backgroundColor};
  border: 0;
  border-radius: ${({ theme }) => theme.borderRadius.default};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
  cursor: ${({ disabled }) => (disabled ? "none" : "pointer")};
`;
