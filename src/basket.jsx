import { useContext, useState } from "react";
import { BasketContext } from "./basketContext";

function SameIdk() {
  const { Cards,updateItemAmount } = useContext(BasketContext);

  const calculateTotal = () => {
    let total = 0;
    for (let item of Cards) {
      total += item.Price * item.Amount; 
    }
    return total;
  };
   const decreaseAmount = (itemId, currentAmount) => {
    if (currentAmount > 0) {
      updateItemAmount(itemId, currentAmount - 1);
    }
  };

  const increaseAmount = (itemId, currentAmount) => {
    updateItemAmount(itemId, currentAmount + 1);
  };
  const totalSum = calculateTotal();

  return (
    <div>
      <h1>Общая сумма: {totalSum}$</h1>
      <ul>
        {Cards.map((item, index) => (
          <li key={index}>
            <h2>{item.Name}</h2>
            <p>Цена: {item.Price}$</p>
            <p>Количество: {item.Amount}</p>
            <p>Стоимость: {item.Price * item.Amount}$</p>
            <button onClick={() => decreaseAmount(item.id,item.Amount)}>-</button>
            <button onClick={() => increaseAmount(item.id,item.Amount)}>+</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SameIdk;