import http from 'http'
import { filterController } from './controllers/filtersCatDb.controller';
import { shopItemDbController } from './controllers/shopItemDb.controller';
import { ShopItemType } from './types/shopDataTypes';

//create a server object:
http.createServer(function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    // res.setHeader('default_charset', 'utf-8');
    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});

    const url = req.url
    const method = req.method
    if(method === 'POST'){
        if(url === '/api/shopItemAmount') {
            let data = ''
            req.on('data', (chunk) => {
                data += chunk
            })
            req.on('end', () => {
                const shopItemsData = shopItemDbController.showAmountOfShopItems(Number(data))
                res.end(JSON.stringify(shopItemsData))
            })
        } else if(url === '/api/filterList'){
            let data = ''
            req.on('data', (chunk) =>{
                data += chunk
            } )
            req.on('end', () => {
                const categoryListData = filterController.showFilterCatList()
                res.end(JSON.stringify(categoryListData))
            })
        } else if(url === '/api/activateFilter'){
            let data = ''
            req.on('data', (chunk) =>{
                data += chunk
            } )
            req.on('end', () => {
                const receivedFilteredShopItemsData: string[] = JSON.parse(data)
                const filteredShopItemsData = shopItemDbController.getFilteredShopItems(receivedFilteredShopItemsData)
                res.end(JSON.stringify(filteredShopItemsData))
            })
        }
    } 
 
}).listen(8080); //the server object listens on port 8080


// else {
//     shopItemDbController.addShopItem({title: 'new title'})
//     res.end(JSON.stringify(shopItemDbController.getAllShopItems()));
// }