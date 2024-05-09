

import './App.css';
import React,{ useEffect,useState } from 'react';  
import BotForm from './BotForm';
import Bot from './Bot';

function App() {
 const [selectedCategory, setSelectedCategory] = useState("All");
const [bots,setBots]= useState([]);
const [armyCart, setArmyCart] = useState([]);

  useEffect(() =>{
    fetch('https://phase2-bot-batlr-6.onrender.com')
    .then(response => response.json())
    .then((data) =>{
      setBots(data);
    })
    .catch((error)=>{
      console.error('Error fetching data:',error);
    })
  },[]);

  function handleDeleteBot(deletedBot) {
   // console.log("In ArmyCart:", deletedBot);
   const updatedBots = bots.filter((bot) => bot.id !== deletedBot.id);
  setBots(updatedBots);
  }

  function handleUpdateBot(updatedBot) {
   // console.log("In ArmyCart:", updatedBot);
   const updatedBots = bots.map((bot) => {
    if (bot.id === updatedBot.id) {
      return updatedBot;
    } else {
      return bot;
    }
  });
  setBots(updatedBots);
  }

  function handleAddBot(newBot) {
    setBots([...bots, newBot])  ;
  }

  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  const botsToDisplay = bots.filter((bot) => {
    if (selectedCategory === "All") return true;

    return bot.category === selectedCategory;
  });
  


  return (
    <div className="ArmyList">


    {/* add the onAddItem prop! */}
    <BotForm onAddBot={handleAddBot} />
   
    <h1>MAWOWO GAMERS</h1>
    <ul className="Bots">
      {botsToDisplay.map((bot) => (
        <Bot key={bot.id} 
        bot={bot} 
        armyCart={armyCart}
            setArmyCart={setArmyCart}
        onUpdateBot={handleUpdateBot} 
        onDeleteBot={handleDeleteBot}/>
      ))}
    </ul>
    
  </div>
  );
}

export default App;