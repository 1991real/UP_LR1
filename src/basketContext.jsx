import { createContext, useState } from "react";
import spamton from './assets/Spamton_battle_static.webp'
import Ironclad from './assets/Ironclad.webp'
import bigBird from './assets/bigb.webp'
import Face from './assets/Meme_Man_on_transparent_background.webp'
import WhiteNight from './assets/WhiteNightCrop.webp'
export const BasketContext = createContext();

export function BasketProvider({ children }) {
  const [Cards, SetCards] = useState([
    {id:1, Name: "Spamton", Picture:spamton, Price: 23,Amount:0},
    {id:2,Name: "Big Bird", Picture:bigBird, Price: 43,Amount:0},
    {id:3,Name: "Ironclad", Picture:Ironclad, Price: 25,Amount:0},
    {id:4,Name: "4:12?!?!?!?", Picture:Face, Price: 33,Amount:0},
    {id:5,Name: "White Night", Picture:WhiteNight, Price: 86,Amount:0}
  ]);
  const updateItemAmount = (itemId, newAmount) => {
    SetCards(prevCards => 
      prevCards.map(item => 
        item.id === itemId 
          ? { ...item, Amount: newAmount }
          : item
      )
    );
  };

  return (
    <BasketContext.Provider value={{Cards,updateItemAmount}}>
      {children}
    </BasketContext.Provider>
  )
}

export default BasketProvider