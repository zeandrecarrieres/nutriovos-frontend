import React, { useState } from "react";
import { Redirect } from "react-router";
import "./register.css";

function Register() {
  const [type, setType] = useState("");
  const [register_number, setRegister_number] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [telephone, setTelephone] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [contact, setContact] = useState("");
  const [create, setCreate] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:3001/client", {
      //await fetch("https://eggerp-backend.herokuapp.com/client", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type,
        register_number,
        name,
        address,
        telephone,
        mobile,
        email,
        website,
        contact,
      }),
    });
    setCreate(true)
  };
  if(create){
    return <Redirect to="/list" />;
  }

  return (
    <div className="add-client">
      <h1>Add new client</h1>
      <div className="form-group">
        <form onSubmit={submit}>
          <div className="form-line">
            <div className="form-cjt">
            <label htmlFor="type">Type</label>
            <select className="select-field" onChange={(e) => setType(e.target.value)}>
              <option value="business">Bussiness</option>
              <option value="personal">Personal</option>
            </select>
            </div>
           
            <div className="form-cjt">
            <label htmlFor="contact">Contact</label>
            <input
              type="text"
              placeholder="contact"
              onChange={(e) => setContact(e.target.value)}
            />
            </div>
           
          </div>

          <div className="form-line">
          <div className="form-cjt">
          <label htmlFor="reg_number">Register Number</label>
            <input
              type="text"
              placeholder="register_number"
              onChange={(e) => setRegister_number(e.target.value)}
            />
            </div>
         
            <div className="form-cjt">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="name"
              onChange={(e) => setName(e.target.value)}
            />
            </div>
          
          </div>

          <div className="form-line">
          <div className="form-cjt">
          <label htmlFor="address">Address</label>
            <input
              type="text"
              placeholder="address"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
       
          </div>

          <div className="form-line">
          <div className="form-cjt">
          <label htmlFor="email">Email</label> 
            <input
              type="text"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-cjt">
          <label htmlFor="website">Website</label>
            <input
              type="text"
              placeholder="website"
              onChange={(e) => setWebsite(e.target.value)}
            />
          </div>
            
          </div>

          <div className="form-line">
          <div className="form-cjt">
          <label htmlFor="telephone">Telephone</label>
            <input
              type="text"
              placeholder="telephone"
              onChange={(e) => setTelephone(e.target.value)}
            />
          </div>
          <div className="form-cjt">
          <label htmlFor="mobile">Mobile</label>
            <input
              type="text"
              placeholder="mobile"
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>
          
          </div>

          <button type="submit">Create Client</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
