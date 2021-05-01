import React from 'react'
import './transaction.css'
// import { format } from 'date-fns'


function Transaction({transaction}) {
    

    return (
        <div className="transaction-item">
            <li className="champ-date">{(transaction.date)}</li>
            
            <li className="champ-type">{transaction.type === 'Sales' ? "S" : "P"}</li>
            <li className="champ-product">{transaction.product}</li>
            <li className="champ-quantity">{transaction.quantity}</li>
            <li className="champ-price">{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'EUR'}).format(transaction.price)} </li> 
            <li className="champ-price-total"> {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'EUR'}).format(transaction.price_total)} </li>    
        </div>
     )
}

export default Transaction
