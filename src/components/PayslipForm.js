import React, { useState } from "react";

function PayslipForm({ onGenerate }) {
  const [name, setName] = useState("");
  const [basic, setBasic] = useState("");
  const [allowances, setAllowances] = useState("");
  const [deductions, setDeductions] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onGenerate({
      name,
      basic: parseFloat(basic) || 0,
      allowances: parseFloat(allowances) || 0,
      deductions: parseFloat(deductions) || 0,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>Generate Payslip</h2>
      <label>
        Employee Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </label>

      <label>
        Basic Salary:
        <input type="number" value={basic} onChange={(e) => setBasic(e.target.value)} required />
      </label>

      <label>
        Allowances:
        <input type="number" value={allowances} onChange={(e) => setAllowances(e.target.value)} />
      </label>

      <label>
        Deductions:
        <input type="number" value={deductions} onChange={(e) => setDeductions(e.target.value)} />
      </label>

      <button type="submit">Generate</button>
    </form>
  );
}

export default PayslipForm;
