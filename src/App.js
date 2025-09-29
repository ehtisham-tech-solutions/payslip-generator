import React, { useState } from "react";
import PayslipForm from "./components/PayslipForm";
import PayslipResult from "./components/PayslipResult";
import "./App.css";

function App() {
  const [payslip, setPayslip] = useState(null);

  return (
    <div className="app-container">
      <h1>Payslip Generator</h1>
      <PayslipForm onGenerate={setPayslip} />
      <PayslipResult data={payslip} />
    </div>
  );
}

export default App;
