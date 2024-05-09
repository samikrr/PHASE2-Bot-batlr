function Bot({ bot, onUpdateBot, onDeleteBot }) {
    function handleAddToCartClick() {
      // add fetch request
      fetch(`https://phase2-bot-batlr-6.onrender.com/${bot.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          isInCart: !bot.isInCart,
        }),
      })
        .then((r) => r.json())
        .then((updatedBot) => console.log(updatedBot));
    }
  
    // handle delete
    function handleDeleteClick() {
      fetch(`http://localhost:3000/bots/${bot.id}`, {
        method: "DELETE",
      })
        .then((r) => r.json())
        .then(() => console.log("deleted!"));
    }
  
    return (
      <li className={bot.isInCart ? "in-cart" : ""}>
        <img src={bot.avatar_url} alt={bot.name} style={{width: '200px', height: '300px'}} />
        <span>{bot.name}</span>
      {/* <span className="category">{bot.category}</span>*/}
        {/* add the onClick listener */}
        <button
          className={bot.isInCart ? "remove" : "add"}
          onClick={handleAddToCartClick}
        >
          {bot.isInCart ? "Remove From" : "Add to"} Cart
        </button>
        <button className="remove" onClick={handleDeleteClick}>Delete</button>
      </li>
    );
  }
  
  export default Bot;
  