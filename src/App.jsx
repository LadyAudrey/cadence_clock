import "./App.css";

import { store } from "./models/preferences";

import { Greeting } from "./components/Greeting";
import { FocusInput } from "./components/focusInput";

function App() {
  return (
    <>
      {/* <Greeting /> */}
      <FocusInput />
    </>
  );
}

export default App;
