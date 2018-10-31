import React from 'react';
import ItemsSlider from './ItemsSlider/ItemsSlider';
import './Updates.scss';

// компонент состоит из трех "частей"
// заголовок с className="topic"
// слайдер карточек товаров 'ItemsSlider'
// кнопка отображения всех карточек товаров с className="allUpdates" в категории 'Updates'

// слайдеру карточек товаров 'ItemsSlider' передается массив 'props.items' и параметр 'props.itemsCount' - кол-во карточек товаров для отображения

const Updates = (props) => (
    <div id="updates">
        <div className="topic">
            <img src="img/02_bestsellers/icon.png" alt="" className="icon" />
            <span className="Fresh_updates"> Fresh updates</span>
        </div>

        <ItemsSlider items={props.items} itemsCount={props.updatesCount} />

        <div className="allUpdates">
            <button type="button" className="btn btn-success" onClick={() => props.allUpdates("#updates")}>ALL UPDATES</button>
        </div>
    </div>
)

export default Updates;