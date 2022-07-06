import { ShopItem} from "../shopItem/shopItem";
import {ShopItemType} from '../../../../back/types/shopDataTypes'
import './shopItemList.css'

export type ShopItemListProps = {data: ShopItemType[]}

function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

export function ShopItemsList(props: ShopItemListProps) {
    const toRenderData: React.ReactNode[] = [] 
    for(let i = 0; i < props.data.length; i ++){
        const {title, text, price, image, type, id, qty} = props.data[i]
        const shopItem = <ShopItem key={getRandomInt(10000)} title= {title} text = {text} price = {price} image = {image} type = {type} id = {id} qty = {qty}/>
        toRenderData.push(shopItem)
    }

    return <div className="shopItemListBox">
        {toRenderData}
    </div>
}