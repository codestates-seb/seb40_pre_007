import "./App.css";
import Router from "./router/Router";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <div className="flex items-center justify-center w-full min-h-min flex-wrap">
      <RecoilRoot>
        <Router />
      </RecoilRoot>
    </div>
  );
}

export default App;
