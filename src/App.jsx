import { StrictMode, useState } from 'react'
import spamton from './assets/Spamton_battle_static.webp'
import Ironclad from './assets/Ironclad.webp'
import bigBird from './assets/bigb.webp'

import './App.css';
import Card from './Components/Card'
// Создать мини приложение с карточкой товара и счётчиком
//Требования : создать компонент продукт кард, который отображает цену товара, изображение товара, в компоненте должна быть кнопка добавить в корзину с счётчиком количества
//При нажатии кнопки количество увеличивается отображается текущее количество выбранного товара, использовать useState для хранения количества
//В основном компоненте App отобразить несколько карточек товара.
function App() {
  return (
   <div id='Main'>
    <ul id="cards">
      <li><Card Name="SPAMTON G. SPAMTON" Price="67$" Photo={spamton}/></li>
      <li><Card Name="Big bird" Price="23$" Photo={bigBird}/></li>
      <li><Card Name="Ironclad" Price="107$" Photo={Ironclad}/></li>
    </ul>
   </div>
  )
}

export default App
