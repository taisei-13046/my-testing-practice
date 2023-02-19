import "./App.css";
import { TopPage } from "./pages/Top";
import { AppProvider } from "./provider";

function App() {
  return (
    <AppProvider>
      <TopPage />
    </AppProvider>
  );
}

export default App;
