import path from "path";
import * as fs from 'fs'

class FilterController {
    dbPath = path.resolve("db/FilterCategories.db.json")

    readDb(){
        const dbData = fs.readFileSync(this.dbPath);
        const parsedDbData = JSON.parse(dbData.toString())
        return parsedDbData
    }

    showFilterCatList(){
        let parsedDbList = this.readDb()
        return parsedDbList.data as string[]
    }
}

export const filterController = new FilterController()