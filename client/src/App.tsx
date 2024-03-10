import "./App.css";
import AppRouter from "./router/router";
import ReduxProvider from "./redux/ReduxProvider";
function App() {
  return (
    <ReduxProvider>
      <AppRouter />
    </ReduxProvider>
  );
}

export default App;
