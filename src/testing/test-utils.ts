import { render } from "@testing-library/react";
import { AppProvider } from "../provider";

export const appRender = (ui: React.ReactElement) => {
  return render(ui, { wrapper: AppProvider });
};
