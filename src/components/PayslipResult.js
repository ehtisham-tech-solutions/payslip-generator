import React from "react";

function PayslipResult({ data }) {
  if (!data) return null;

  const gross = data.basic + data.allowances;
  const net = gross - data.deductions;

  return (
    <div className="result-container">
      <h2>Payslip</h2>
      <p><strong>Name:</strong> {data.name}</p>
      <p><strong>Basic Salary:</strong> ${data.basic.toFixed(2)}</p>
      <p><strong>Allowances:</strong> ${data.allowances.toFixed(2)}</p>
      <p><strong>Deductions:</strong> ${data.deductions.toFixed(2)}</p>
      <hr />
      <p><strong>Gross Salary:</strong> ${gross.toFixed(2)}</p>
      <p><strong>Net Salary:</strong> ${net.toFixed(2)}</p>
    </div>
  );
}

export default PayslipResult;
