import React from 'react';

import Header from './components/Header';
import Slider from './components/Slider';
import Bestsellers from './components/Bestsellers';
import Updates from './components/Updates';
import Seo from './components/Seo';
import Footer from './components/Footer';

import carousel from './data/carousel.json';
import bestsellers from './data/bestsellers.json';
import categories from './data/categories.json';
import updates from './data/updates.json';

class App extends React.Component {
  state = {
    carousel: carousel,
    bestsellers: bestsellers,
    categories: categories,
    updates: updates,
    
    bestsellersCount: 0,
    updatesCount: 0
  }

  // метод 'allUpdates' используем для отображения всех карточек товаров в категории 'updates',также он скрывает кнопку 'ALL UPDATES'
  allUpdates = (className) => {
    document.querySelector(className + " .slider").style.height = "auto";
    document.querySelector(className + " .allUpdates").style.display = "none";
    this.setState({ updatesCount: Infinity });
  }

  // метод для получения кол-ва карточек товаров для отображения в зависимости от размера экрана браузера
  // условие 'updatesCount !== Infinity' добавлено для того, чтобы после нажатия кнопки 'ALL UPDATES' компонент 'Updates' не изменялся при изменении размера окна браузера
  getCount = () => {
    if (window.innerWidth >= 992) {
      this.setState({ bestsellersCount: 8 });

      if (this.state.updatesCount !== Infinity) {
        this.setState({ updatesCount: 4 });
      }      
    }
    if ((window.innerWidth >= 576)&&(window.innerWidth < 992)) {
      this.setState({ bestsellersCount: 9 });

      if (this.state.updatesCount !== Infinity) {
        this.setState({ updatesCount: 3 });
      }
    }
    if (window.innerWidth < 576) {
      this.setState({ bestsellersCount: 1 });

      if (this.state.updatesCount !== Infinity) {
        this.setState({ updatesCount: 1 });
      }
    }
  }

  // при загрузке компонента вызываем расчет кол-ва карточек товаров для отображения и передаем эту функцию событию брузера 'onresize' для отслеживания изменения браузера
  componentWillMount = () => {
      this.getCount();
      document.getElementsByTagName("body")[0].onresize = () => {this.getCount()};
  }
  
  render() {
    return (
      <div className="App">
        <Header />
        <Slider 
          carousel={this.state.carousel} />
        <Bestsellers            
          items={this.state.bestsellers} 
          bestsellersCount={this.state.bestsellersCount}
          categories={this.state.categories} />
        <Updates 
          items={this.state.updates} 
          updatesCount={this.state.updatesCount} 
          allUpdates={this.allUpdates} />
        <Seo />
        <Footer />
      </div>
    );
  }
}

export default App;