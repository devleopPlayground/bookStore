import useTimeout from "@src/hooks/useTimeout";
import { useToastStore, type ToastType } from "@src/store/toast.store";
import { useState } from "react";
import { FaBan, FaInfoCircle, FaPlus } from "react-icons/fa";
import styled from "styled-components";

export const TOAST_REMOVE_DELAY = 3000;

const Toast = ({ id, message, type }: ToastType) => {
  const removeToast = useToastStore((state) => state.removeToast);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const handleRemoveToast = () => {
    setIsFadingOut(true); // 버튼 눌러서 삭제하기 위한 함수
  };

  useTimeout(handleRemoveToast, TOAST_REMOVE_DELAY); // 3초 후에 자동삭제

  const handleAnimationEnd = () => {
    if (isFadingOut) {
      // 토스트 삭제 함수 (눌러서 삭제, 3초 후 삭제)
      removeToast(id);
    }
  };

  return (
    <ToastStyle
      className={isFadingOut ? "fade-out" : "fade-in"}
      onAnimationEnd={handleAnimationEnd}
    >
      <p>
        {type == "info" && <FaInfoCircle />}
        {type == "error" && <FaBan />}
        {message}
      </p>
      <button onClick={handleRemoveToast}>
        <FaPlus className="fa-icon" />
      </button>
    </ToastStyle>
  );
};

export default Toast;

const ToastStyle = styled.div`
  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fade-out {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  &.fade-in {
    animation: fade-in 0.3s ease-in-out forwards;
  }

  &.fade-out {
    animation: fade-out 0.3s ease-in-out forwards;
  }

  background-color: ${({ theme }) => theme.color.secondary};
  padding: 12px;
  border-radius: ${({ theme }) => theme.borderRadius.default};

  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 24px;

  p {
    color: ${({ theme }) => theme.color.text};
    line-height: 1;
    margin: 0;

    display: flex;
    flex: 1;

    align-items: end;
    gap: 4px;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    margin: 0;

    .fa-icon {
      transform: rotate(45deg);
    }
  }
`;
