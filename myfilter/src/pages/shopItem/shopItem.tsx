import './shopItem.css'
import {ShopItemType} from '../../../../back/types/shopDataTypes'
import {useDrag} from "react-dnd"


export function ShopItem(props: ShopItemType) {

    const x = useDrag(() => ({
        type: 'shopItem',
        item: props,
        end: (item, monitor) => {}
        
    }))

    const ref = x[1]
    
    


    return <div className="shopItem" ref = {ref}>
        <div className="shopItem__pic">
            <img className = 'shopItemPic' src = {props.image} alt="" />
        </div>
        <div className="shopItem__info">
            <div className="shopItem__title">{props.title}</div>
            <div className="shopItem__text">{props.text}</div>
            <div className="shopItem__price">Стоимость: <b>{props.price} Руб.</b></div>
        </div>

    </div>
}