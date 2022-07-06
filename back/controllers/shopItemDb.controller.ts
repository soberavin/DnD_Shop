import * as fs from 'fs'
import * as path from 'path'
import { ShopItemType } from '../types/shopDataTypes'

class ShopItemDbController {
    dbPath = path.resolve("db/ShopItem.db.json")

    private readDb() {
        const dbData = fs.readFileSync(this.dbPath);
        const parsedDbData = JSON.parse(dbData.toString()) 
        return parsedDbData as {data: ShopItemType[]}
        
    }

    private writeDb(dbData: ShopItemType[]) {
        const dbString = JSON.stringify(dbData)
        fs.writeFileSync(this.dbPath, dbString)
    }

    addShopItem(shopItem: ShopItemType) {
        const dbData = this.readDb();
        dbData.data.push(shopItem);
        this.writeDb(dbData.data)
    }

    getAllShopItems() {
        const dbData = this.readDb()
        return dbData.data as ShopItemType[]
    }

    showAmountOfShopItems(amount: number) {
        let currentShownShopItems: ShopItemType[] = []
        const dbData = this.readDb()
        if(amount >= dbData.data.length){
            return dbData.data
        } else for(let i = 0 ; i < amount; i ++){
            currentShownShopItems.push(dbData.data[i])
        }
        return currentShownShopItems
    }
    
// проверяет, находится ли тип товара среди активных чекбоксов, если да - отображает их

    getFilteredShopItems(activeFilters: string[]){
        let filteredShopItemsData: ShopItemType[] = []
        const dbData = this.readDb()
        for(let i = 0; i < dbData.data.length; i++){
            if(activeFilters.includes(dbData.data[i].type)){
                filteredShopItemsData.push(dbData.data[i])
            }
        }
        console.log('server:', filteredShopItemsData)
        return filteredShopItemsData
    }
}

export const shopItemDbController = new ShopItemDbController()