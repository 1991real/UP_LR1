import { useParams } from "react-router-dom";
import Card from "./Components/Card";
function Product() {
    const {id} = useParams();
    if ({id} == 1) {
        return <Card Name="SPAMTON G. SPAMTON" Price={67} Photo={spamton}/>
    }
    if ({id} == 2) {
        return <Card Name="Big bird" Price={32} Photo={bigBird}/>
    }
}
export default Product