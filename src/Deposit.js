import React, { useState } from 'react';

function Deposit({ onDeposit }) {
  const [amount, setAmount] = useState();

  const handleChange = (e) => {
    setAmount(Number(e.target.value));
  };

  const handleSubmit = () => {
    onDeposit(amount);
    setAmount('');
  };

  return (
    <div>
      <h2>Deposit</h2>
      <input type="number" value={amount} onChange={handleChange} />
      <button onClick={handleSubmit}>Deposit</button>
    </div>
  );
}

export default Deposit;
