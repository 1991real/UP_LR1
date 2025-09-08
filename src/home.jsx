// import Card from "./Components/Card"
import spamton from './assets/Spamton_battle_static.webp'
import Ironclad from './assets/Ironclad.webp'
import bigBird from './assets/bigb.webp'
// import { useState, useRef } from "react"
import { useContext } from 'react';
import { BasketContext } from "./basketContext";

function Home() 
    {
    const { Cards,updateItemAmount } = useContext(BasketContext);
    const decreaseAmount = (itemId, currentAmount) => {
    if (currentAmount > 0) {
      updateItemAmount(itemId, currentAmount - 1);
    }
  };

  const increaseAmount = (itemId, currentAmount) => {
    updateItemAmount(itemId, currentAmount + 1);
  };
    return <div>
    <ul>
        <div style={{display:'flex'}}>
        {Cards.map((item, index) => (
          <li  style={{display: 'inline'}} key={index}>
            <img class="preview" src={item.Picture}></img>
            <h2 class="productName">{item.Name}</h2>
            <h3>{item.Price}$</h3>
            <div class="ControlPanel">
            <button onClick={() => decreaseAmount(item.id,item.Amount)}>-</button>
            <h1>{item.Amount}</h1>
            <button onClick={() => increaseAmount(item.id,item.Amount)}>+</button>
            </div>
          </li>
        ))}
        </div>
      </ul>
    </div>
}
export default Home