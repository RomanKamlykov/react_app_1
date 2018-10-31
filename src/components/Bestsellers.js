import React from 'react';
import NavBar from './NavBar/NavBar';
import ItemsSlider from './ItemsSlider/ItemsSlider';
import './Bestsellers.scss';

class Bestsellers extends React.Component {

    // параметр 'activeCategory' - для фильтрации карточек товаров по категориям
    // параметры 'firstCategory' и 'categoryCount' - для "перелистывания" категорий в "мобильной" версии сайта
    state = {
        activeCategory: "all",
        firstCategory: 0,
        categoryCount: 3
    }

    // методы для "перелистывания" категорий в "мобильной" версии сайта
    prev = () => {
        const newFirstItem = this.state.firstCategory - this.state.categoryCount;
        if (newFirstItem >= 0) {
            this.setState({ firstCategory: newFirstItem });
        } else if (newFirstItem < 0) {
            this.setState({ firstCategory: 0 });
        }
    }    
    next = () => {
        const newFirstItem = this.state.firstCategory + this.state.categoryCount;
        if (newFirstItem < this.props.categories.length) {
            this.setState({ firstCategory: newFirstItem });            
        }
    }

    // методы для установки и фильтрации карточек товаров по категориям
    setActiveCategory = (category) => {
        this.setState({ activeCategory: category });       
    }
    filterByActiveCategory = (el) => {
        if (this.state.activeCategory === "all") {
            return true;
        } else {
            return el.category === this.state.activeCategory;
        }        
    }

    // метод 'render' этого компонента возвращает различное содержимое в зависимости от размера окна браузера
    // в "пк" и в "планшетной" версии компнонент отображает три части
    // -заголовок с className="topic"
    // -панель навигации 'NavBar', в которую передаем массив 'categories' и функцию фильтрации 'filter', которая позволяет изменять массив 'props.items'
    // -слайдер карточек товаров 'ItemsSlider', в который передаем фильтрованый массив 'props.items' и параметр 'props.itemsCount' - кол-во карточек товаров для отображения

    // в "мобильной" версии компнонент отображает три части
    // -заголовок с className="topic"
    // -слайдер категорий товаров, который отображает по три слайдера карточек товаров 'ItemsSlider'
    // -стрелки навигации с className="nextCategory" для "перелистывания" категорий
    render() {
        if (window.innerWidth >= 576) {
            return (
                <div id="bestsellers">
                    <div className="desktop">

                        <div className="topic">
                            <img src="img/02_bestsellers/icon.png" alt="" />
                            <span className="BESTSELLERS"> BESTSELLERS</span>

                            <div className="search">
                            </div>
                        </div>
            
                        <NavBar 
                            categories={this.props.categories} 
                            filter={this.setActiveCategory} />

                        <ItemsSlider items={this.props.items.filter(this.filterByActiveCategory)} itemsCount={this.props.bestsellersCount} />

                    </div>
                </div>
            );
        }

        else if (window.innerWidth < 576) {
            return (
                <div id="bestsellers">
                    <div className="mobile">

                        <div className="topic">
                            <img src="img/02_bestsellers/icon.png" alt="" />
                            <span className="BESTSELLERS"> BESTSELLERS</span>

                            <div className="search">
                            </div>
                        </div>

                        {this.props.categories
                        .slice(1)
                        .slice(this.state.firstCategory, this.state.firstCategory+this.state.categoryCount)
                        .map((category, index) => {
                            // в цикле фильтуем и выводим массив 'props.items' по категории 'category.className'
                            let items = this.props.items.filter(el => el.category === category.className);
                            return (
                                <div key={index}>
                                    <p>{category.name}</p>
                                    <ItemsSlider items={items} itemsCount={this.props.bestsellersCount} />                                                         
                                </div>
                            )
                        })}

                        <div className="nextCategory">
                            <div className="prev" 
                                onClick={() => this.prev()} 
                                style={(this.state.firstCategory <= 0) ? {display: "none"}:{display: "block"}}></div>
                            <span>Next</span>
                            <div className="next" 
                                onClick={() => this.next()} 
                                style={(this.state.firstCategory+this.state.categoryCount >= this.props.categories.length-1) ? {display: "none"}:{display: "block"}}></div>
                        </div>

                    </div>
                </div>
            );
        }            
    }
}

export default Bestsellers;