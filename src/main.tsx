import { createRoot } from "react-dom/client";
import App from "./App.tsx";

const mountApp = async () => {
  if (import.meta.env.DEV) {
    const { worker } = await import("./mocks/browsers.ts");
    await worker.start(); // msw 시작
  }

  createRoot(document.getElementById("root")!).render(<App />);
};

mountApp();
