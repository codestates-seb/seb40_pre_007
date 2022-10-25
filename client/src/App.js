import "./App.css";
import Router from "./router/Router";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <div className="flex items-center justify-center w-full min-h-min">
        <Router />
      </div>
    </RecoilRoot>
  );
}

export default App;
