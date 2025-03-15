import { HomePage } from "./pages";
import { initializeStores } from "@stores";

function App() {
  initializeStores();
  return (
    <>
      <HomePage />
    </>
  );
}

export default App;
