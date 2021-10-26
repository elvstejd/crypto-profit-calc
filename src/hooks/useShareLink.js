import { useData } from "../contexts/dataContext";

function useShareLink() {
    const { invested, buyingPrice, targetPrice, selectedCoinSymbol } = useData();

    function generateShareLink() {
        const baseURL = `${window.location.protocol}//${window.location.host}/share`;
        const params = `?c=${selectedCoinSymbol}&i=${invested}&bp=${buyingPrice}&sp=${targetPrice}`;
        return (baseURL + params);
    }

    return generateShareLink;
}

export default useShareLink;
