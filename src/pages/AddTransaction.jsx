import React, { useState, useEffect } from "react";
import Transactions from "./Transactions";
import './addTransactions.css'


function AddTransaction() {
  const [date, SetDate] = useState("");
  const [type, SetType] = useState("");
  const [product, SetProduct] = useState("");
  const [quantity, SetQuantity] = useState("");
  const [price, SetPrice] = useState("");
  const [price_total, SetPrice_total] = useState("0");
  const [addCount, SetAddCount] = useState(-1);

  const [options, SetOptions] = useState([]);

  // const selectField = document.querySelector("#options-select");

  const submit = async (e) => {
    e.preventDefault();
    await fetch("https://nutriovos-backend.herokuapp.com//transaction", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        date,
        type,
        product,
        quantity,
        price,
        price_total,
      }),
    });
    SetAddCount(addCount + 1);
  };

  useEffect(() => {
    fetch("https://nutriovos-backend.herokuapp.com//product/")
      .then((response) => response.json())
      .then((data) => SetOptions(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="add-transactions">
      <h1>Transaction</h1>

      <form className="transaction-form" onSubmit={submit}>
      <div className="form-cjt-group">
      <div className="form-cjt">
        <label htmlFor="date">Date</label>   
        <input
          type="date"
          name=""
          id=""
          onChange={(e) => SetDate(e.target.value)}
          
        />
        </div>
         <div className="form-cjt">
        <label htmlFor="type">Type</label>   
        <select onChange={(e) => SetType(e.target.value)}>
        <option  value="">-- Select option --</option>
          <option  value="Sales">Sales</option>
          <option value="Purchase">Purchase</option>
        </select>
        </div>
        <div className="form-cjt">
        <label htmlFor="description">Description</label>    
        <select
          id="options-select"
          placeholder="description"
          // onClick={(e) => getProducts(e)}
          onChange={(e) => SetProduct(e.target.value)}
          
        >
          <option value="">-- Select option --</option>
          {options.map((option) => (
            <option value={option.name}>{option.name}</option>
          ))}
        </select>
        </div>
        </div>
        <div className="form-cjt-group">
        <div className="form-cjt">
        <label htmlFor="quantity" >Qty</label>    
        <input
          type="text"
          placeholder="Quantity"
          className="add-quantity"
          onChange={(e) => {
            SetQuantity(e.target.value);
            SetPrice_total(e.target.value * price);
          }}
        />
        </div>
        <div className="form-cjt">
        <label htmlFor="price">Price</label>   
        <input
          type="text"
          placeholder="Price unitary"
          onChange={(e) => {
            SetPrice(e.target.value);
            SetPrice_total(quantity * e.target.value);
          }}
        />
  </div>
  <div className="form-cjt">
        <label htmlFor="total">Total</label>   
        <input
          type="text"
          placeholder="prix_total"
          value={price_total}
          readOnly
        />
        </div>
        
        <button>Add</button>
        </div>
      </form>

      <h4>LAST TRANSACTIONS</h4>
      <Transactions addCount={addCount} />
    </div>
  );
}

export default AddTransaction;
