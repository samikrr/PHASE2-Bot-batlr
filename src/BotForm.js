import React, { useState } from "react";

function BotForm({ onAddBot }) {
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
  
    function handleSubmit(e) {
        e.preventDefault();
        const botData = {
          name: name,
          category: category,
          isInCart: false,
        };
        fetch("https://phase2-bot-batlr-6.onrender.com", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(botData),
        })
          .then((r) => r.json())
          .then((newBot) => {
            onAddBot(newBot);
            setName("");
            setCategory("");
          })
          .catch((error) => {
            console.error('Error adding bot:', error);
          });
    }
  
    return (
      <form  className="NewItem" onSubmit={handleSubmit}>
        {/* Input fields */}
        <input
            type="text"
            id="submit"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
        <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
        />
        <button type="submit">Add Bot</button>
      </form>
    );
}

export default BotForm;