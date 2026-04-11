import { useRoutes } from "react-router-dom";
import { routes } from "./routers/router";

function App() {
  let mainElement = useRoutes(routes);
  return mainElement;
}

export default App;
