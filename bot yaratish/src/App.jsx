import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

const App = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState(""); // 1. Telefon uchun yangi state

  const SendMessage = (e) => {
    e.preventDefault();

    const token = "8577663803:AAHSI4cayUCJzdb1YpViVDyAx9Osu5xhUqQ";
    const chatId = 6417763668;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    // 2. Xabar matniga telefonni qo'shdik
    const text = `🚀 Yangi xabar:\n\n👤 Ism: ${name}\n👥 Familiya: ${lastname}\n📞 Tel: ${phone}`;

    axios.post(url, {
      chat_id: chatId,
      text: text
    })
    .then(() => {
      alert("Ma'lumotlar yuborildi!");
      setName("");
      setLastname("");
      setPhone(""); // 3. Yuborgandan keyin tozalash
    })
    .catch((error) => {
      console.error(error);
      alert("Xatolik yuz berdi!");
    });
  }

  return (
    <div className='form-container' >
      <h2>Ro'yxatdan o'tish</h2>
      <form onSubmit={SendMessage}>
        <input 
          type="text" 
          placeholder='Ism' 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
        <br /><br />
        <input 
          type="text" 
          placeholder='Familiya' 
          value={lastname} 
          onChange={(e) => setLastname(e.target.value)} 
          required 
        />
        <br /><br />
        
        {/* 4. Telefon raqam uchun input */}
        <input 
          type="tel" 
          placeholder='+998 () _ _ _  _ _  _ _' 
          value={phone} 
          onChange={(e) => setPhone(e.target.value)} 
          required 
        />
        <br /><br />

        <button type="submit">Jo'natish</button>
      </form>
    </div>
  )
}

export default App;