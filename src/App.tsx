import { ThemeProvider } from "./components/ui/theme-provider";
import Index from "./router";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <Index />
    </ThemeProvider>
  );
}

export default App;
