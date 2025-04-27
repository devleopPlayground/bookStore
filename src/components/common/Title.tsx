import styled from "styled-components";
import type { ColorKey, HeadingSize } from "../../styles/theme";
import { HTMLAttributes } from "react";

type TitleProps = {
  children: React.ReactNode;
  size: HeadingSize;
  color?: ColorKey;
} & HTMLAttributes<HTMLSpanElement>;

const Title = ({ children, size, color, ...props }: TitleProps) => {
  return (
    <TitleStyle size={size} color={color} {...props}>
      {children}
    </TitleStyle>
  );
};

export default Title;

const TitleStyle = styled.h1<Omit<TitleProps, "children">>`
  font-size: ${({ theme, size }) => theme.heading[size].fontSize};
  color: ${({ theme, color }) =>
    color ? theme.color[color] : theme.color.primary};
`;
