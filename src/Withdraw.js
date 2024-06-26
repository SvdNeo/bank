import React, { useState } from 'react';

function Withdraw({ onWithdraw ,balance}) {
  const [amount, setAmount] = useState();

  const handleChange = (e) => {
    setAmount(Number(e.target.value));
  };

  const handleSubmit = () => {
    if (amount > balance || 0) {
      alert('Insufficient Balance');
    }else{
      onWithdraw(amount);
    }
    
    setAmount('');
  };

  return (
    <div>
      <h2>Withdraw</h2>
      <input type="number" value={amount} onChange={handleChange} />
      <button onClick={handleSubmit}>Withdraw</button>
    </div>
  );
}

export default Withdraw;
