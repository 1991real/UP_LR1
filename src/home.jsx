import Card from "./Components/Card"
import spamton from './assets/Spamton_battle_static.webp'
import Ironclad from './assets/Ironclad.webp'
import bigBird from './assets/bigb.webp'
import SummaryProvider from "./basketContext"
function Home() 
    {
    return <div>
        <ul id="cards">
        <li><Card Name="SPAMTON G. SPAMTON" Price={67} Photo={spamton}/></li>
        <li><Card Name="Big bird" Price={32} Photo={bigBird}/></li>
        <li><Card Name="Ironclad" Price={56} Photo={Ironclad}/></li>
        </ul>
       
    </div>
}
export default Home