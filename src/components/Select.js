import React, { useRef, useState, useEffect } from 'react';
import { BiSearch, BiX } from 'react-icons/bi';
import { useTranslation } from 'react-i18next';
import dummyData from '../testdata/coinList';
import getCoins from '../services/getCoins';
import { InputContainer } from '../styles/shared/InputContainer';
import styled from 'styled-components';
import { formatCoinPrice } from '../utils/formatCoinPrice';
import useShareParams from '../hooks/useShareParams';


const Dropdown = styled.div`
    margin-top: 0.2rem;
    position: absolute;
    z-index: 99;
    background-color: var(--primary-300);
    box-shadow: var(--shadow-raised);
    border-radius: var(--border-radius-sm);
    border: 1px solid var(--primary-200);
    overflow-y: scroll;
    max-height: 20rem;
    display: ${props => props.show ? 'block' : 'none'};
`;

const Option = styled.div`
    border-top: 0.5px solid var(--primary-200);
    padding: 1rem 0.9rem;
    cursor: pointer;
    display: flex;
    justify-content: space-between;

    &:hover {
        background-color: var(--primary-500);
    }

    span:nth-child(2) {
        font-size: 0.8rem;
        color: var(--primary-100);
    }
`;

const NoResults = styled.div`
    padding: 0.5rem 0.5rem;
    margin-bottom: 0.2rem;
    cursor: pointer;
    color: gray;

    span {
        color: white;
    }

    &:hover {
        background-color: var(--primary-300);
    }
`;

const PillContainer = styled.div`
    display: flex;
    border: 1px solid var(--accent-500);
    background-color: var(--accent-alpha);
    box-sizing: border-box;
    gap: 0.2rem;
    padding: .0631rem .4rem;
    border-radius: var(--border-radius-xm);

    span:nth-child(1) {
        font-size: .79rem;
    }
`;

const CloseButton = styled.span`
    cursor: pointer;
    color: var(--accent-300);
    border-radius: 5px;
    transition: .2s ease;
`;


const Select = ({ setDisplayPrice }) => {
    const { t } = useTranslation();
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState("");
    const [selectedCoin, setSelectedCoin] = useState(null);
    const [showDropdown, setShowDropdown] = useState(false);
    const coinSymbolParam = useShareParams();
    const inputContainerRef = useRef();
    const inputRef = useRef();

    useEffect(() => {
        if (coinSymbolParam) {
            setSearch(coinSymbolParam)
            setShowDropdown(false);
            setSelectedCoin(coinSymbolParam);
        }
    }, [coinSymbolParam]);


    useEffect(() => {
        getCoins().then(res => {
            const liveCoins = res.data;
            setCoins(liveCoins);
        }).catch(err => {
            console.log(err);
            setCoins(dummyData);
        });
    }, []);

    useEffect(() => {
        if (selectedCoin) {
            coins.forEach(coin => {
                if (coin.symbol === selectedCoin) {
                    setDisplayPrice(coin.price);
                }
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedCoin]);

    useEffect(() => {
        if (selectedCoin) {
            coins.forEach(coin => {
                if (coin.symbol === selectedCoin) {
                    setDisplayPrice(coin.price);
                }
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedCoin]);

    const handleSearchInputChange = (e) => {
        if (e.target.value) {
            setSearch(e.target.value);
            setShowDropdown(true);
        } else {
            setSearch("");
            setShowDropdown(false);
        }
    };

    const handleCoinSelect = (e) => {
        setSearch(e.target.dataset.symbol)
        setShowDropdown(false);
        setSelectedCoin(e.target.dataset.symbol);
    };

    const handleNotFoundCoinSelect = () => {
        setShowDropdown(false);
        setSelectedCoin(search);
    };

    const handleClearSelected = () => {
        setSearch("");
        setSelectedCoin(null);

        setTimeout(() => {
            if (inputRef.current) inputRef.current.focus();
        }, 50);
    }

    const filteredCoins = () => {
        if (!search) return coins;
        return coins.filter(coin => {
            return coin.searchedBy.toLowerCase().indexOf(search.toLowerCase()) > -1;
        });
    };

    const getInputWidth = () => {
        const width = inputContainerRef.current ? inputContainerRef.current.clientWidth : 256;
        return {
            width: width + "px"
        };
    };

    return (
        <div>
            <InputContainer ref={inputContainerRef}>
                {selectedCoin ? (
                    <PillContainer>
                        <span>{search}</span>
                        <CloseButton onClick={handleClearSelected}><BiX /></CloseButton>
                    </PillContainer>
                ) : (
                    <input type="text" onChange={handleSearchInputChange} value={search} ref={inputRef} />
                )}
                <span><BiSearch /></span>
            </InputContainer>
            <Dropdown show={showDropdown} style={getInputWidth()}>
                {filteredCoins(search, coins).map(coin => {
                    return (
                        <Option
                            className="option"
                            data-symbol={coin.symbol}
                            onClick={handleCoinSelect}
                            key={coin.symbol}
                        >
                            <span>{coin.symbol}</span>
                            <span>{formatCoinPrice(coin.price.toString())}</span>
                        </Option>
                    );
                })}
                {filteredCoins().length === 0 && (
                    <NoResults onClick={handleNotFoundCoinSelect}>{t("no_results")} <span>{search}</span></NoResults>
                )}
            </Dropdown>
        </div>
    );
}

export default Select;