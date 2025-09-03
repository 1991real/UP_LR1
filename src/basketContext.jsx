import { createContext, useState } from "react";

export const BasketContext = createContext();

function BasketProvider({ children }) {
  const [sum, SetSum] = useState(0)
  
  return (
    <BasketContext.Provider value={{ sum, SetSum }}>
      {children}
    </BasketContext.Provider>
  )
}

export default BasketProvider