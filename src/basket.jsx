import { useContext } from "react";
import BasketProvider from "./basketContext"

function SameIdk(){
    const {sum,SetSum} = useContext(BasketProvider)
    return <h1>Сумма к оплате: {sum}</h1>
}
export default SameIdk