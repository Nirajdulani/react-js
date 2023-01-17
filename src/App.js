import React from "react";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";

import Widget from "./components/Widget";

function App() {
  const data = [
    { fl: "25k", per: "10" },
    { fl: "45k", per: "15" },
    { fl: "65k", per: "10" },
    { fl: "15k", per: "40" },
    { fl: "27k", per: "10" },
  ];

  return (
    <div className="flex justify-between m-6">
      {data.map((item) => {
        return <Widget fl={item.fl} per={item.per} />;
      })}
    </div>
  );
}

export default App;
