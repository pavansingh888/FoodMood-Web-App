import React, { useEffect, useState } from "react";
import { Provider } from "react-redux"; //We will need Provider given by react-redux to connect react app to our store.
import appStore from "./utils/appStore";
import AppComponent from "./components/AppComponent";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <div className="app flex flex-col min-h-screen">
          <AppComponent />
        </div>
      </Provider>
    </>
  );
}
export default App;
