import { myStore } from "../../Store/myStore"

type FilterItemProps = {
    filterName: string,
    handler: (filterName: string, mode: "REMOVE" | "ADD") => void
}

export function FilterItem(props: FilterItemProps) {

    function handleFilterItemOnChange(e: any){
        props.handler(props.filterName, e.target.checked ? 'ADD' : 'REMOVE' )
        myStore.getFilteredShopItemsReq(myStore.activeFilters)
        if(myStore.activeFilters.length === 0){myStore.getShopItemsDataReq()}
        
    }

    return <div className="filterCheckBox">
        <input type="checkbox" onChange= {handleFilterItemOnChange} /> 
        <span>{props.filterName}</span>
    </div>
}