import Fooditem from "./Fooditem";

export default function Foodlist({foodlist,setfoodid}) {
    
    return <div>
        {foodlist.map((item) => (
         <Fooditem  key={item.id} item={item} setfoodid={setfoodid}/>
        ))}
    </div>
}