"use client"

import { useState } from 'react';


export default function BuyToken() {



  const [amount, setAmount] = useState('');

  const handleSwap = async () => {
    const response = await fetch('/api/swap', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        account: 'YOUR_WALLET_ADDRESS',
        amountIn: amount
      })
    });

    const data = await response.json();
    console.log(data);
  };

  return (
    <div>
      <input className='text-dark-blue'
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount of ETH to swap"
      />
      <button className="text-dark-blue"onClick={handleSwap}>Swap ETH for DAI</button>
    </div>
  );
}

