import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function Child({ handleValue }) {
  return (
    <>
      <div>Child</div>
      <button onClick={handleValue}>Parent Değeri Değiştir</button>
    </>
  );
}

function Parent() {
  const [value, setValue] = useState("Child'dan bilgi almam gerekiyor");
  const handleValue = () => {
    setValue("Importan Info");
  };
  return (
    <>
      <h3>Parent State Update (Callback)</h3>
      <div className="wrapper">
        <div>Parent</div>
        <div className="box-wrapper">{value}</div>
      </div>

      <div className="wrapper">
        <Child handleValue={handleValue} />
      </div>
    </>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Parent />
  </StrictMode>
);
