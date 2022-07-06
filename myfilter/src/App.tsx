import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { myStore } from "./Store/myStore";
import Shop from "./pages/content/shop";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Bin from "./pages/bin/bin";
import "./app.css"

function App() {
  useEffect(() => {
    myStore.getShopItemsDataReq();
    myStore.getFilterCatListReq();
  }, []);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <div className="appContent">
        <Shop />
        <Bin />

        </div>
        
      </div>
    </DndProvider>
  );
}

export default observer(App);
