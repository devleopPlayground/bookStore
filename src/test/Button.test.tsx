import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import "@testing-library/jest-dom";
import { BookStoreThemeProvider } from "../context/themeContext";
import Button from "../components/common/Button";

describe("Button 컴포넌트 테스트", () => {
  it("렌더 확인", () => {
    // 렌더
    render(
      <BookStoreThemeProvider>
        <Button size="small" scheme="primary">
          버튼
        </Button>
      </BookStoreThemeProvider>
    );

    // 확인
    expect(screen.getByText("버튼")).toBeInTheDocument();
  });
  it("size props 적용", () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { container } = render(
      <BookStoreThemeProvider>
        <Button size="small" scheme="primary">
          버튼
        </Button>
      </BookStoreThemeProvider>
    );

    expect(screen.getByRole("button")).toHaveStyle({ fontSize: "1.5rem" });
  });
});
