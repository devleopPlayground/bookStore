import { FaRegCircle } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6";
import styled from "styled-components";

type CheckIconButtonProps = {
  isChecked: boolean;
  onCheck: () => void;
};

const CheckIconButton = ({ isChecked, onCheck }: CheckIconButtonProps) => {
  return (
    <CheckIconButtonStyle onClick={onCheck}>
      {isChecked ? <FaRegCircleCheck /> : <FaRegCircle />}
    </CheckIconButtonStyle>
  );
};

export default CheckIconButton;

const CheckIconButtonStyle = styled.button`
  background: none;
  border: 0;
  cursor: pointer;

  svg {
    width: 24px;
    height: 24px;
  }
`;
