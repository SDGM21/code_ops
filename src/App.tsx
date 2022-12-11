import AppRouter from "./router/Routes";
import LoadingScreen from "./components/layout/LoadingScreen";
const App = () => {
  return (
    <>
      <AppRouter fallBack={<LoadingScreen />} />
    </>
  );
};

export default App;
