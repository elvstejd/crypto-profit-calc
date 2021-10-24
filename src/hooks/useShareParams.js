import { useEffect, useState } from 'react';
import { useData } from '../contexts/dataContext';


function useShareParams() {
    const { setValuesFromShare } = useData();
    const [coinSymbol, setCoinSymbol] = useState("");

    useEffect(() => {
        const URLPath = window.location.pathname;
        const params = new URLSearchParams(window.location.search);
        const invested = params.get('i');
        const buyingPrice = params.get('bp');
        const sellingPrice = params.get('sp');
        const coinSymbol = params.get('c');

        if (URLPath && URLPath.toLocaleLowerCase() === '/share') {
            setValuesFromShare(invested, buyingPrice, sellingPrice);
            setCoinSymbol(coinSymbol)
        }

        const data = {
            URLPath,
            invested,
            buyingPrice,
            sellingPrice
        }

        console.table(data)
    }, []);

    return coinSymbol;
}

export default useShareParams;