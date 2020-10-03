import React from "react";
import "./styles.css";
import BelajaruseCallback from "./useCallback";
import BelajaruseMemo from "./useMemo";

export default function App() {
  const [kelas, setKelas] = React.useState();
  return (
    <div className="App mt-3">
      
      <div>
        <p>BElajar React</p>
        <BelajaruseMemo/>
      </div>
    </div>
  );
}