import React, { useState } from 'react';
import Header from './Header';
import Deposit from './Deposit';
import Withdraw from './Withdraw';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';

function App() {
  const [balance, setBalance] = useState(0);

  const handleDeposit = (amount) => {
    setBalance(balance + amount);
  };

  const handleWithdraw = (amount) => {
    setBalance(balance - amount);
  };

  return (
    <Router>
      <div>
        <Header balance={balance} />
        
        <Routes>
          <Route path="/" element={<Deposit onDeposit={handleDeposit} />} />
          <Route
            path="/withdraw"
            element={<Withdraw onWithdraw={handleWithdraw} balance={balance} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
