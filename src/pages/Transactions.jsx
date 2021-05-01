import React, { useState, useEffect } from "react";
import Transaction from '../components/Transaction'

function Transactions({addCount}) {
  const [transactions, setTransactions] = useState([]);
  const [totalInd, setTotalInd] = useState(0);

  const getTotal = () => {
    const total = transactions.reduce((prev, transaction)=>{
        return prev + transaction.price_total;
    },0)
    setTotalInd(total)
}



  useEffect(() => {
    fetch("http://localhost:3001/transaction/")
      .then((response) => response.json())
      .then((data) => setTransactions(data));
  },[addCount]);

  return (

    <div>
      <div className="transactions-list">
      {transactions.map((transaction)=>
        (
          <Transaction key={transaction._id} transaction={transaction} />
          )
         
          )}
         
      </div>
     
    </div>
  );
}

export default Transactions;
