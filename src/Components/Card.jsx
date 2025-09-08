// import { useContext, useState } from 'react'
// import {BasketContext} from '../basketContext'
// // InitValue = null
// // Создать мини приложение с карточкой товара и счётчиком
// //Требования : создать компонент продукт кард, который отображает цену товара, изображение товара, в компоненте должна быть кнопка добавить в корзину с счётчиком количества
// //При нажатии кнопки количество увеличивается отображается текущее количество выбранного товара, использовать useState для хранения количества
// //В основном компоненте App отобразить несколько карточек товара.
// function Card(props) {
//       const {AddCard,removeCard} = useContext(BasketContext)
//       const [Value, SetValue] = useState(0)
//       const incrementCard = () => {
//       SetValue((Value) => Value + 1)
//       AddCard(props.id,{Name:props.Name, Price:props.Price,Value: Value})
//       }
//     const decrementCard = () =>{
//       if (Value > 0) {
//         SetValue((Value) => Value - 1)
//         AddCard(props.id,{Name:props.Name, Price:props.Price,Value: Value})
//       }
//     }
  
//     return <div class='Card'>
//       <img class="preview" src={props.Photo}></img>
//       <h2 class="productName">{props.Name}</h2>
//       <h3>{props.Price}$</h3>
//       <h1>{props.id}</h1>
//       <div class="ControlPanel">
//       <button onClick={decrementCard}>-</button>
//       <h1>{Value}</h1>
//       <button onClick={incrementCard}>+</button>
//       </div>
//     </div>
//   } 

// export default Card
