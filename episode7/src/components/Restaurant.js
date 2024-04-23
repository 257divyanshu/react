import { useEffect } from "react";

const Restaurant = ()=>{
    useEffect(()=>{
        fetchData();
    },[]);
    let fecthData = async()=>{
        let data = await fetch("")
    }
    return (
        <div>
            <div>Daal</div>
            <div>Chaaval</div>
            <div>Sabzi</div>
            <div>Salaad</div>
            <div>Dahi</div>
        </div>
    )
}
export default Restaurant;