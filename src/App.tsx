import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { TopPage } from "./pages/Top";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TopPage />
    </QueryClientProvider>
  );
}

export default App;
