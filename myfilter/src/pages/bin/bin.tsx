import { useContext, useState } from "react";
import { useDrop } from "react-dnd";
import { ShopItemType } from "../../../../back/types/shopDataTypes";

import "./bin.css";
import BinShopItem from "./binShopItem/binShopItem";

export default function Bin() {
  const [binPrice, setBinPrice] = useState(0);
  const [bin, setBin] = useState({ items: [] as ShopItemType[] });
  const [droppedItems, setDroppedItems] = useState({
    counter: 0,
    items: [] as ShopItemType[],
  });

  const x = useDrop(() => ({
    accept: "shopItem",
    drop: (item: ShopItemType, m) => {
      setDroppedItems((droppedItems) => {
        const foundi = droppedItems.items.findIndex(x => x.id === item.id)

        if (foundi === -1) {
          return ({
            counter: droppedItems.counter + 1,
            items: [
              ...droppedItems.items,
              { ...item, qty: 1 },
            ],
          })
        } else {
          const foundItem = droppedItems.items[foundi]
          const items = [ ...droppedItems.items]
          items.splice(foundi, 1, { ...foundItem, qty: foundItem.qty ? foundItem.qty + 1 : 1 })

          return ({
            counter: droppedItems.counter + 1,
            items,
          })
        }
      });
      setBinPrice((binPrice) => {
        return binPrice + Number(item.price);
      });
    },
  }));

  const ref = x[1];


  function ClearBin() {
    setDroppedItems({
      counter: 0,
      items: [],
    });
    setBinPrice(0);
  }

  return (
    <div className="binContent" ref={ref}>
      <div className="binInterface">
        <button className="clearBtn" onClick={ClearBin}>
          Очистить корзину
        </button>
        <span className="numOfBinObjects">
          Кол-во товаров: <b>{droppedItems.counter}</b>
        </span>
        <span className="binSummaryPrice">
          {" "}
          Суммарная цена товаров: <b>{binPrice}</b> руб.{" "}
        </span>
      </div>
      <div className="binItems">{droppedItems.items.map(x => <BinShopItem {...x} />)}</div>
    </div>
  );
}
