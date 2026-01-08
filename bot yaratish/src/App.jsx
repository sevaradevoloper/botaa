import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");

  const SendMessage = (e) => {
    e.preventDefault();

    // .env fayldan ma'lumotlarni o'qib olish
    const token = "8577663803:AAGrY0UgDZmaFS8JiktFczwVueFBjx4mDnw";
    const chatId = 6417763668;
    
    // Telegram API URL
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    // Xabar matni
    const text = `🚀 Yangi xabar:\n\n👤 Ism: ${name}\n👥 Familiya: ${lastname}\n📞 Tel: ${phone}`;

    axios.post(url, {
      chat_id: chatId,
      text: text
    })
    .then(() => {
      alert("Ma'lumotlar muvaffaqiyatli yuborildi!");
      setName("");
      setLastname("");
      setPhone("");
    })
    .catch((error) => {
      console.error("Xatolik yuz berdi:", error);
      alert("Xabar yuborishda xatolik! Token yoki Chat ID ni tekshiring.");
    });
  }

  return (
    <div className="form-container">
      <h2>Ro'yxatdan o'tish</h2>
      <form onSubmit={SendMessage}>
        <input 
          type="text" 
          placeholder='Ism' 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
        
        <input 
          type="text" 
          placeholder='Familiya' 
          value={lastname} 
          onChange={(e) => setLastname(e.target.value)} 
          required 
        />
        
        <input 
          type="tel" 
          placeholder='Telefon (masalan: +998901234567)' 
          value={phone} 
          onChange={(e) => setPhone(e.target.value)} 
          required 
        />

        <button type="submit">Jo'natish</button>
      </form>
    </div>
  )
}

export default App;