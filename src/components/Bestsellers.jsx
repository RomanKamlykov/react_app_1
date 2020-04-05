import React from 'react'
import './Bestsellers.scss'
import Item from 'components/Item'

import icon from 'assets/img/02_bestsellers/icon.png'
import search from 'assets/img/02_bestsellers/search.png'
import categories from 'data/categories.json'
import bestsellers from 'data/bestsellers.json'

export default function Bestsellers() {
  var [firstItem, setfirstItem] = React.useState(0);
  var [numberOfItems, setnumberOfItems] = React.useState();
  var [activeCategory, setactiveCategory] = React.useState('all'); //for navbar
  var [filteredItems, setfilteredItems] = React.useState(bestsellers); //for items

  function filterItems(items, category) {
    if (category === 'all') { return items; }
    return items.filter(item => item.category === category)
  }

  function changeCategory(categoryName) {
    setfirstItem(0);
    setactiveCategory(categoryName);
    setfilteredItems(filterItems(bestsellers, categoryName));
  }

  function handleResize() {
    if ((window.innerWidth >= 1200) && (numberOfItems !== 8)) { //for desktops
      setfirstItem(0);
      setnumberOfItems(8);
    }
    if ((window.innerWidth < 1200) && (numberOfItems !== 9)) { //for tablets
      setfirstItem(0);
      setnumberOfItems(9);
    }
  }

  function nextPage(arrayLehgth, num) {
    let newFirstItem = firstItem + numberOfItems * num;

    if (arrayLehgth <= numberOfItems) { return } //arrows won`t work
    if (newFirstItem >= arrayLehgth) { newFirstItem = 0 } //go to first page
    if (newFirstItem < 0) { (newFirstItem = (arrayLehgth - (arrayLehgth % numberOfItems || numberOfItems))) } //go to last page
    setfirstItem(newFirstItem);
  }

  React.useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="bestsellers">
      <div className="topic">
        <img src={icon} alt="" />
        <span>Bestsellers</span>
      </div>

      <nav className="nav">
        <ul>
          {categories.map((category, index) =>
            <li key={index} className={(category.className === activeCategory) ? 'active' : undefined}>
              <button type="button" onClick={() => changeCategory(category.className)}>{category.name}</button>
            </li>
          )}
        </ul>

        <div className="control">
          {filteredItems.length > numberOfItems && <>
            <button type="button" className="prev" onClick={() => nextPage(filteredItems.length, -1)}>&#10094;</button>
            <span className="more">More</span>
            <button type="button" className="next" onClick={() => nextPage(filteredItems.length, 1)}>&#10095;</button>
          </>}
          <button type="button" className="search" onClick={e => e.preventDefault()}><img src={search} alt="" /></button>
        </div>
      </nav>

      <div className="items">
        {filteredItems.slice(firstItem, firstItem + numberOfItems).map((item, index) =>
          <Item item={item} key={index} />
        )}
      </div>
    </section>
  )
}