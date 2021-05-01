import React, { useContext } from 'react'
// import { Link } from 'react-router-dom';
import { UserContext } from '../UserContext';



const User = () => {

    const {user, setUser} = useContext(UserContext);
    
    const logout = async () => {
        await fetch('http://localhost:3001/user/logout', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
        });

        setUser(null);
    }

    return (
        <div>
            {user ? `You are connected as ${user.username}` : `Log-in to discover new stuff`}
            console.log('esta conectado')
            {/* {link} */}
        </div>
    )
}

export default User
