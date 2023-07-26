import {React, useState} from 'react';

export default function Sampleform() {


    const [name,         setName] = useState('');
    const [email,       setEmail] = useState('');

    const handelClick = (e)=>{
        e.preventDefault();
        alert(`name of the user is ${name}`);
        alert(`email of the user is ${email}`);
    }

    return (
        <div style={{display: "flex", justifyContent : "center"}}>
            <form style={{display : "flex",flexDirection : "column", width : "30rem"}}>
                <label>Enter your name</label>
                <input type='text' style={{marginBottom : "10px", height : "2rem"}} value={name} onChange={(e)=>{setName(e.target.value)}}></input>
                <label>Enter your email</label>
                <input type='email' style={{marginBottom : "10px", height : "2rem"}} value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
                <button onClick={(e)=>{handelClick(e)}} style={{marginTop : "10px", fontSize : "1.2rem", padding : "0.5rem",backgroundColor : "blue", color : "white", border : "none"}}>Submit</button>
            </form>
        </div>
    )
}
