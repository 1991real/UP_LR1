import { createContext, useState } from "react";

export const BasketContext = createContext();

export function BasketProvider({ children }) {
  const [sum, SetSummary] = useState(0)
  function SetSum(numb){
    SetSummary(() => numb)
  }
  return (
    <BasketContext.Provider value={{ sum, SetSum }}>
      {children}
    </BasketContext.Provider>
  )
}

export default BasketProvider