import CatHead from "./CatHead";

function TopBrands() {
    return ( 
        <div>
            <CatHead/>
            <div className=" p-4 flex space-x-3 overflow-x-scroll scroll-smooth">
                <div className="flex-shrink-0">
                    <img src="Holister.png" className="h-16"></img>
                </div>
                <div className="flex-shrink-0">
                    <img src="Holister.png" className="h-16"></img>
                </div>
                <div className="flex-shrink-0">
                    <img src="Holister.png" className="h-16"></img>
                </div>
                <div className="flex-shrink-0">
                    <img src="Holister.png" className="h-16"></img>
                </div>
                <div className="flex-shrink-0">
                    <img src="Holister.png" className="h-16"></img>
                </div>
                
            </div>
        </div>
        
     );
}

export default TopBrands;