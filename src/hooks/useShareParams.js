import { useEffect, useState } from 'react';
import { useData } from '../contexts/dataContext';
import { numberIsValid } from '../utils/numberIsValid';


function useShareParams() {
    const { setValuesFromShare } = useData();
    const [coinSymbol, setCoinSymbol] = useState("");

    useEffect(() => {
        setInputsBasedOnParams();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function setInputsBasedOnParams() {
        const URLPath = window.location.pathname;
        const params = new URLSearchParams(window.location.search);
        const invested = params.get('i');
        const buyingPrice = params.get('bp');
        const sellingPrice = params.get('sp');
        const coinSymbol = params.get('c');

        if (
            URLPath &&
            URLPath.toLocaleLowerCase() === '/share' &&
            numberIsValid(invested) &&
            numberIsValid(buyingPrice) &&
            numberIsValid(sellingPrice)
        ) {
            setValuesFromShare(invested, buyingPrice, sellingPrice);
            setCoinSymbol(coinSymbol);
        }
    }

    return coinSymbol;
}

export default useShareParams;