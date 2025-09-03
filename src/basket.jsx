import { useContext } from "react";
import { BasketContext } from "./basketContext"; // Import the context object

function SameIdk() {
  const context = useContext(BasketContext);
  
  if (!context) {
    return <h1>Контекст корзины не доступен</h1>;
  
  
  const { sum, SetSum } = context;
  
  return (
    <div>
      <h1>Сумма к оплате: {sum}$</h1>
    </div>
  );
  }
}

export default SameIdk