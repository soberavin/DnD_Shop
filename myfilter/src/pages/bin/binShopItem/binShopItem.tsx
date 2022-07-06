import { ShopItemType } from "../../../../../back/types/shopDataTypes";
import "./binShopItem.css"


type BinItemProps = ShopItemType 

export default function BinShopItem(props: BinItemProps){




    return <div className="binShopItem">
    <div className="binShopItem__pic">
        <img className = 'binShopItemPic' src = {props.image} alt="" />
    </div>
    <div className="binShopItem__info">
        <div className="binShopItem__title">{props.title}</div>
        <div className="binShopItem__price">Стоимость: <b>{props.price} Руб.</b></div>
        <div className="binShopItem__qty">Количество: {[props.qty]}</div>
    </div>

</div>
}