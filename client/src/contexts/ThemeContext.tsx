import { createContext, Dispatch, SetStateAction } from "react";

export const ThemeContext = createContext<{
  isDark: boolean;
  setIsDark: Dispatch<SetStateAction<boolean>>;
}>({
  isDark: true,
  setIsDark: () => {} // Placeholder function for initialization
});