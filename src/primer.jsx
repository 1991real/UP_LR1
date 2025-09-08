import { act, useReducer } from "react";

function reducer(state,action){
    switch(action.type){
        case "increment": return {count: state.count + 1};
        case "decrement": return {count: state.count - 1};
        case "reset": return {count: 0};
        default: return state
    }
}
// каталог товары корзиной и глобальным состоянияем, создать S.P.A. приложение на реакт с каталогом товаров, глобальной корзиной и сменой темы, пользователь должен иметь возможность просматривать список товаров, менять товаы
//Менять темы сайта, перемещаться без перезагрузки
//Список товаров Минимум 5 штук с изображением
//каждый товар имеет цену, фото, кнопку добавить
//Корзина показывает список добавленных товаров, название, цену, кнопку удалить, показывает сумму всех товаров, значения выбира.тся глобальные
//Тема - темная светлая тема, через контекст,кнопка переключения темы в меню, цвет кнопок меняется в зависимости от темы
//Использовать NavLink для ReactRoute
//После добавления
// использовать Контекст апи или редюсер для корзины и темы
export default function Counter(){
const [state,dispatch] = useReducer(reducer, {count: 0});
    return(
        <div>
            <h1>Counter: {state.count}</h1>
            <button onClick={() => dispatch({})}
        </div>
    )
}