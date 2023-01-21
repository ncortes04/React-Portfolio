import React, { useState } from "react";

function Contact(){
    const[name, setName] = useState('')
    const[email, setEmail] = useState('')
    const[message, setMessage] = useState('')
    const[response, setResponse] = useState('')

    const handleFormSubmit = (e) => {
        e.preventDefault()
        if(!name){
            setResponse("Please Enter a Name")
           return
        }
        if(!email){
            setResponse("Please Enter an Email")
            return
         }
         if(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(email) === false){
            setResponse("Please Enter a Correct Email Format")
            return
         }
        if(!message){
            setResponse("Please Enter a Message")
            return
         }
        setResponse("You have successfully sent an email")
    }
    return (
        <div className="contactContainer">
            <form onSubmit={handleFormSubmit}>
            <h1>Contact</h1>
                <div>
                    <h2>Name:</h2>
                    <input 
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <h2>Email Address:</h2>
                    <input 
                    type="text" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <h2>Message:</h2>
                    <textarea 
                    type="text" 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    />
                </div>
                <h2>{response}</h2>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Contact