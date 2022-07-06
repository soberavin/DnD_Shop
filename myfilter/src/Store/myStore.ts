import { makeAutoObservable } from "mobx";
import { ShopItemType } from "../../../back/types/shopDataTypes";

export class Store {

    constructor(){
        makeAutoObservable(this)
    }

    shopItemsData: ShopItemType[] = []
    setShopItemsData(newData: ShopItemType[]){
        this.shopItemsData = newData
    }

    filterCbListData: string[] = []
    setFilterCbListData(newData: string[]){
        this.filterCbListData = newData
    }

     getFilterCatListReq() {
        fetch('http://localhost:8080/api/filterList', {
          method: 'POST',
        })
          .then(response => response.json())
          .then(val => { this.setFilterCbListData(val) })
      }

      getShopItemsDataReq(amount: string = '5') {
        fetch('http://localhost:8080/api/shopItemAmount', {
          method: 'POST',
          body: amount
        })
          .then(response => response.json())
          .then(val => { this.setShopItemsData(val) })
      }

      public activeFilters: string[] = []
      setActiveFilters(newData: string[]){
          this.activeFilters = newData
      }

      removeFilter(filterRoDeactivate: string){
          let newArr: string[] = []
          for(let i = 0; i < this.activeFilters.length; i++){
            if(this.activeFilters[i] !== filterRoDeactivate){
                newArr.push(this.activeFilters[i])
            }
          }
          this.setActiveFilters(newArr)
      }

      getFilteredShopItemsReq(activeFilters: string[]){
          let stringifiedArr = JSON.stringify(activeFilters)
          fetch('http://localhost:8080/api/activateFilter', {
              method: 'POST',
              body: stringifiedArr
          })
          .then (response => response.json())
          .then(val => this.setShopItemsData(val))
      }
      
}


export const myStore = new Store()