import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import "@testing-library/jest-dom";
import Title from "../components/common/Title";
import { BookStoreThemeProvider } from "../context/themeContext";

describe("Title 컴포넌트 테스트", () => {
  it("렌더 확인", () => {
    // 렌더
    render(
      <BookStoreThemeProvider>
        <Title size="small">타이틀</Title>
      </BookStoreThemeProvider>
    );

    // 확인
    expect(screen.getByText("타이틀")).toBeInTheDocument();
  });
  it("size props 적용", () => {
    const { container } = render(
      <BookStoreThemeProvider>
        <Title size="small">타이틀</Title>
      </BookStoreThemeProvider>
    );

    expect(container?.firstChild).toHaveStyle({ fontSize: "1rem" });
  });
  it("color props 적용", () => {
    const { container } = render(
      <BookStoreThemeProvider>
        <Title size="small" color="primary">
          타이틀
        </Title>
      </BookStoreThemeProvider>
    );

    expect(container?.firstChild).toHaveStyle({ color: "brown" });
  });
});
