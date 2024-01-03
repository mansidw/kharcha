// /*global chrome*/
import "./App.css";
import { useState } from "react";
import { ErrorView } from "./views/Error";
import { InitialView } from "./views/Initial";

function App() {
  const [view, setView] = useState("initial");

  const setExtensionView = async (view: any) => {
    setView(view);
  };

  const renderView = () => {
    switch (view) {
      case "error":
        return <ErrorView />;
      default:
        return <InitialView setExtensionView={setExtensionView} />;
    }
  };
  return (
    <div className="App">
      {/* <h2>Welcome to Mansis extension</h2> */}
      {renderView()}
    </div>
  );
}

export default App;
