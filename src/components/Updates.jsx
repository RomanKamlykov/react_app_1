import React from 'react'
import './Updates.scss'
import Item from 'components/Item'

import icon from 'assets/img/02_bestsellers/icon.png'
import updates from 'data/updates.json'

export default function Updates() {
  var items = updates;
  var [firstItem, setfirstItem] = React.useState(0);
  var [numberOfItems, setnumberOfItems] = React.useState();

  function nextPage(arrayLehgth, num) {
    let newFirstItem = firstItem + numberOfItems * num;

    if (arrayLehgth <= numberOfItems) { return } //arrows won`t work
    if (newFirstItem >= arrayLehgth) { newFirstItem = 0 } //go to first page
    if (newFirstItem < 0) { (newFirstItem = (arrayLehgth - (arrayLehgth % numberOfItems || numberOfItems))) } //go to last page
    setfirstItem(newFirstItem);
  }

  function handleResize() {
    if ((window.innerWidth >= 1200) && (numberOfItems !== 4)) { //for desktops
      setfirstItem(0);
      setnumberOfItems(4);
    }
    if ((window.innerWidth < 1200) && (numberOfItems !== 3)) { //for tablets
      setfirstItem(0);
      setnumberOfItems(3);
    }
  }

  function showAllUpdates() {
    setfirstItem(0);
    setnumberOfItems(Number.MAX_VALUE);
  }

  React.useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="updates">
      <div className="topic">
        <img src={icon} alt="" className="icon" />
        <span>Fresh updates</span>
      </div>

      <div className="items">
        {items.slice(firstItem, firstItem + numberOfItems).map((item, index) =>
          <Item item={item} key={index} />
        )}

        {items.length > numberOfItems && <>
          <button type="button" className="prev" onClick={() => nextPage(items.length, -1)}>&#10094;</button>
          <button type="button" className="next" onClick={() => nextPage(items.length, 1)}>&#10095;</button>
        </>}
      </div>
      
      {items.length > numberOfItems &&
        <div className="button">
          <button type="button" onClick={showAllUpdates}>All updates</button>
        </div>
      }
    </section>
  )
}