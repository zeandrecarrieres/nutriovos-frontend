import React, { useContext } from 'react'
import { Link, Redirect } from 'react-router-dom';
import { UserContext } from '../UserContext';
import './navbar.css'
import Logo from "../assets/logo.png"
import HomeIcon from "../assets/home_icon.svg"
import ClientsIcon from "../assets/clients_icon.svg"
import ProductsIcon from "../assets/products_icon.svg"
import TransactionsIcon from "../assets/transactions_icon.svg"
import UsersIcon from "../assets/users_icon.svg"





function Navbar() {
    const {user, setUser} = useContext(UserContext); 
    


    //Logou function
    const logout = async () => {
        await fetch('http://localhost:3001/user/logout', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
        });

        setUser(null);
        alert('logout')
    }



    return (
        <>
        <div className="mobile-menu">
            
            <div className="menu-header">
            {user ? 
             <ul>
               

                <li><Link to="/" className="burguer-menu-item"><img src={HomeIcon} alt=""/></Link></li>
                
                

                <li><Link to="/transaction" className="burguer-menu-item"><img src={TransactionsIcon} alt=""/></Link></li>
                
                <li><Link to="/register" className="burguer-menu-item"><img src={ClientsIcon} alt=""/></Link></li>
                <li><Link to="/list" className="burguer-menu-item"><img src={ClientsIcon} alt=""/></Link></li>
                
                <li><Link to="/prod_register" className="burguer-menu-item"><img src={ProductsIcon} alt=""/></Link></li>
                <li><Link to="/prod_list" className="burguer-menu-item"><img src={ProductsIcon} alt=""/></Link></li>
              
            </ul>
            :'' }
            {user ? "" : <Redirect to="/" />}
            { user ? <button onClick={logout} className="sign-out">SIGN-OUT</button> : ''}
            
            {user ? "":
             <li><Link to="/user_register" className="menu-item"><img src={UsersIcon} alt=""/>Add User</Link></li> 
        }
             </div>
        </div>
        <div className="side-menu">
            <li><Link to="/"><img className='logo-top' src={Logo} alt=""/></Link></li>
             
             <div className="menu-container">
             
             {user ? 
             <ul>
               

                <li><Link to="/" className="menu-item"><img src={HomeIcon} alt=""/> Home</Link></li>
                
                <h3>TRANSACTION</h3>

                <li><Link to="/transaction" className="menu-item"><img src={TransactionsIcon} alt=""/>Add Transaction</Link></li>
                <h3>CLIENT</h3>
                <li><Link to="/register" className="menu-item"><img src={ClientsIcon} alt=""/>Add Client</Link></li>
                <li><Link to="/list" className="menu-item"><img src={ClientsIcon} alt=""/>List Clients</Link></li>
                <h3>PRODUCT</h3>
                <li><Link to="/prod_register" className="menu-item"><img src={ProductsIcon} alt=""/>Add Product</Link></li>
                <li><Link to="/prod_list" className="menu-item"><img src={ProductsIcon} alt=""/>List Products</Link></li>
              
            </ul>
            :'' }
            {user ? "" : <Redirect to="/" />}
            { user ? <button onClick={logout} className="sign-out">SIGN-OUT</button> : ''}
            
            {user ? "":
             <li><Link to="/user_register" className="menu-item"><img src={UsersIcon} alt=""/>Add User</Link></li> 
        }
             </div>
           
        </div>
        </>
    )
}

export default Navbar
