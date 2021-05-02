import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
// import './list.css'
import './listProducts.css'
import { FaRegTrashAlt, FaEdit } from "react-icons/fa";



function ListProduct() {
    const [products, setProducts] = useState([]);
    // const [id, setId] = useState("");
    const [count, setCount] = useState(0);

    useEffect(()=>{
        fetch('https://nutriovos-backend.herokuapp.com/product/')
            .then(response => response.json())
            .then(data=> setProducts(data))
    },[count])

const deleteProduct = async (e) => {
    await fetch("https://nutriovos-backend.herokuapp.com/product/"+e, {
        method: "DELETE",

    })
    setCount(count+1);
}

// const editProduct =  (e) => {
//     console.log(e)
//     setId(e)
//     console.log(id)
//     return
//     // <Redirect  to="/prod_edit" id={id} />
// }


  
//    console.log(products)

    return (
        <div className="list-products">
            <h1>Products List</h1> 
            <ul className="list-container">
                {products.map((product)=>(
                    <li key={product._id}>
                        <input className="product-name" type="text" value= {product.name} readOnly/>    
                        <input className="product-description" type="text" value= {product.description} readOnly/> 
                        <input className="product-unit"type="text" value= {product.unit} readOnly/> 
                        <input className="product-price" type="text" value= {product.price}  readOnly/>  
                        <Link to={`/prod_edit/${product._id}`} className="fa"><FaEdit /></Link>
                        <button className="fad" value={product._id} onClick={(e) =>deleteProduct(e.target.value)}><FaRegTrashAlt /></button>   
                     
                          

                    </li>
                       
                ))}
               
               
            </ul>
        </div>
    )
}

export default ListProduct
