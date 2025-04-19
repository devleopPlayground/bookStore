import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import "@testing-library/jest-dom";
import { BookStoreThemeProvider } from "../context/themeContext";
import Input from "../components/common/Input";
import React from "react";

describe("Input 컴포넌트 테스트", () => {
  it("렌더 확인", () => {
    // 렌더
    render(
      <BookStoreThemeProvider>
        <Input placeholder="안녕하세요" />
      </BookStoreThemeProvider>
    );

    // 확인
    expect(screen.getByPlaceholderText("안녕하세요")).toBeInTheDocument();
  });
  it("forwardRef 테스트", () => {
    const ref = React.createRef<HTMLInputElement>();

    render(
      <BookStoreThemeProvider>
        <Input placeholder="안녕하세요" ref={ref} />
      </BookStoreThemeProvider>
    );

    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });
});
