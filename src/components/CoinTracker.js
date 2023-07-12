import {useState, useEffect} from 'react';

function CoinTracker(){
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    useEffect (() => {
        
    },[])
    return(
        <div>
            <h1>The Coins! {loading?null:coins.length}</h1>
            {loading ? <strong>Loading...</strong> : null}
            <ul>
                {coins.map((coin)=><li>{coin.name} ({coin.symbol}) : ${coin.quotes.USD.price}</li>)}
            </ul>
        </div>
    );
}

export default CoinTracker;