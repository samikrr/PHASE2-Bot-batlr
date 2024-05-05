

const BotCollection = ({ bots }) => {


    return( 
        <div>
            <h3>Bots Collection</h3>
    
          <h4>hj</h4>

            <ol>
                {bots.map(bot=>(
                    <li key={bot.id} >
                        <h2>{bot.title}</h2>
                        <p>ID:{bot.id}</p>
                        <p>Name: {bot.name}</p>
                         <p>Health: {bot.health}</p>
                         <p>Armor: {bot.armor}</p>
                         <p>Bot_class: {bot.bot_class}</p>
                       {/*  <img src={bot.avatar_url} alt={bot.name} style={{width: '100px', height: '200px'}} />*/}
                    </li>
                ))}
            </ol>
        </div>
    

)};
export default BotCollection;