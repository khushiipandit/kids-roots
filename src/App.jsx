import { BrowserRouter } from "react-router-dom";
import GlobalLayout from "./components/layout/GlobalLayout";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <GlobalLayout>
        <AppRoutes />
      </GlobalLayout>
    </BrowserRouter>
  );
}

export default App;
