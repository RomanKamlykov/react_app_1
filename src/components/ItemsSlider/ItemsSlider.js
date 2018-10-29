import React from 'react';
import Item from './Item';
import './ItemsSlider.scss';

// компонент ItemsSlider отображает карточки товаров - 'Item', и переключатели - 'стрелочки' влево и вправо
// принимает параметры
// props.items - массив карточек товаров для отображения
// props.itemsCount - кол-во карточек товаров для отображения

class ItemsSlider extends React.Component {
    state = {
        firstItem: 0
    }

    // методы 'prev' и 'next' используются для 'перелистывания' отображаемых карточек товаров
    // используются параметры: 'firstItem' - первый элемент для отображения, 'itemsCount' - кол-во элементов для отображения
    prev = () => {
        const newFirstItem = this.state.firstItem - this.props.itemsCount;
        if (newFirstItem >= 0) {
            this.setState({ firstItem: newFirstItem });
        } else if (newFirstItem < 0) {
            this.setState({ firstItem: 0 });
        }
    }    
    next = () => {
        const newFirstItem = this.state.firstItem + this.props.itemsCount;
        if (newFirstItem < this.props.items.length) {
            this.setState({ firstItem: newFirstItem });
        }
    }

    // при наступлении события 'componentWillReceiveProps' значение параметра 'firstItem' сбрасывается до нуля
    componentWillReceiveProps = () => {
        this.setState({ firstItem: 0 });
    }

    render() {
        return (
            <div className="slider">
                <div className="items">
                    {this.props.items
                    .slice(this.state.firstItem, this.state.firstItem+this.props.itemsCount)
                    .map((item, index) => {
                        return (
                            <Item item={item} key={index} />
                        )
                    })}
                </div>

                <div className="arrows" style={(this.props.items.length < this.props.itemsCount) ? {display: "none"}:{display: "block"}}>
                    <div className="prev" onClick={() => this.prev()} style={(this.state.firstItem <= 0) ? {display: "none"}:{display: "block"}}></div>
                    <div className="next" onClick={() => this.next()} style={(this.state.firstItem+this.props.itemsCount >= this.props.items.length) ? {display: "none"}:{display: "block"}}></div>
                </div>                
            </div>
        );
    }
}

export default ItemsSlider;