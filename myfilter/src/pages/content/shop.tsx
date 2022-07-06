import { observer } from 'mobx-react-lite'
import { myStore } from '../../Store/myStore'
import  FilterCbList  from '../filter/filterCbList'
import { ShopItemsList } from '../shopItemList/shopItemList'


import './shop.css'

function Shop() {
    return <div className="shopContent">
        <FilterCbList data={myStore.filterCbListData} />
        <ShopItemsList data={myStore.shopItemsData} />
    </div>
}

export default observer(Shop)