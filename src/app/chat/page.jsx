'use client'

import { useState,useEffect } from "react"
import {io,Socket} from 'socket.io-client'

export default function Chat(){
    const [clientid, setClientid] = useState("")
    const [msg,setMsg]=useState("")
    const [socket, setSocket] = useState(null)

    const [messages, setMessages] = useState([]);
    useEffect(()=>{
        const soc=io("https://backend-chat-k5mx.onrender.com")
        
        soc.on('connect',()=>{
            setClientid(soc.id)
            setSocket(soc)
        })
        soc.on('rec-msg',(msg)=>{
            setMessages((prevMessages) => [
                ...prevMessages,
                { id: clientid, text: msg },
              ]);
        })
    },[])
    function sendMsg(){
        if (clientid!="" && msg!=""){
            socket.emit('send-msg',msg)
            setMessages((prevMessages) => [
                ...prevMessages,
                { id: clientid, text: msg },
              ]);
            setMsg('')
        }
    }

    return(
        <div>
        {socket && <h4>your id {clientid}</h4>}
        <h1>Chat</h1>

        <div style={{ height: '300px', overflowY: 'auto', border: '1px solid #ccc' }}>
        {messages.map((message) => (
            <>
            {/* <div>{message.text}</div> */}
            {message.id==clientid
            ?(            <div className="chat chat-end">
            <div className="chat-bubble" key={message.id}>{message.text}</div>
            </div>)
            :(            <div className="chat chat-start">
            <div className="chat-bubble" key={message.id}>{message.text}</div>
            </div>)
            }
            </>
          
        ))}
      </div>

        <input type="text" value={msg} className="input input-bordered input-primary w-full max-w-xs ml-6 mt-6" onChange={(event)=>setMsg(event.target.value)} />
        <button className="btn btn-circle ml-4 hover:border-cyan-50" onClick={sendMsg}>Send</button>

        {/* <h2>from server: {newmsg}</h2> */}
    </div>
    )
}