import styled from "styled-components";
import { type ForwardedRef, forwardRef, type InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef(
  ({ ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
    return <InputStyle type="text" ref={ref} {...props} />;
  }
);

export default Input;

const InputStyle = styled.input`
  padding: 0.25rem 0.75rem;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.borderRadius.default};
  font-size: 1rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.color.text};
`;
