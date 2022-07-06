import { observer } from "mobx-react-lite"
import { useEffect, useState } from "react"
import { myStore } from "../../Store/myStore"
import { FilterItem } from "./filterCb"
import './filterCbList.css'
import { RangeInput } from "./rangeInput/rangeInput"

type FilterCbProps = { data: string[] }

function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
}

function FilterCbList(props: FilterCbProps) {

    const [rangeInputValue, setRangeInputValue] = useState('5')



    function handleRangeInputChange(e: any){
        let newValue = e.target.value
        setRangeInputValue(newValue)
    }

    useEffect(() => {myStore.getShopItemsDataReq(rangeInputValue)}, [rangeInputValue])



    function handleFilterItemOnChange(filterName: string, mode: "REMOVE" | "ADD") {
        if (mode === 'ADD') {
            myStore.activeFilters.push(filterName)
        }
        else {
            myStore.removeFilter(filterName)
        }
    }

    let currentCbListData: JSX.Element[] = []
    for (let i = 0; i < props.data.length; i++) {

        currentCbListData.push(<FilterItem key={getRandomInt(10000)} handler={handleFilterItemOnChange} filterName={props.data[i]} />)
    }


    return <div className="filterList">
        {currentCbListData}
        <RangeInput onChange={handleRangeInputChange} value = {rangeInputValue}/>
    </div>
}

export default observer(FilterCbList)