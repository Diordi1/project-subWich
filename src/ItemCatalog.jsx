import CatHead from "./CatHead";
import ItemCard from "./ItemCard";

function ItemCatalog() {
    return ( 
        <div>
            <CatHead/>
        <div className="p-6 flex flex-wrap justify-between space-y-3">
            <ItemCard/>
            <ItemCard/>
            <ItemCard/>
            <ItemCard/>
        </div>
        </div>
     );
}

export default ItemCatalog;