import React, { useRef, useState, useEffect } from 'react';
import { BiSearch, BiX } from 'react-icons/bi';
import { useTranslation } from 'react-i18next';

const Select = ({ setDisplayPrice }) => {
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState("");
    const [selectedCoin, setSelectedCoin] = useState(null);
    const [showDropdown, setShowDropdown] = useState(false);
    const inputContainerRef = useRef();
    const inputRef = useRef();

    const { t } = useTranslation();

    useEffect(() => {
        fetch('http://localhost:3001/coins').then(res => res.json()).then(data => {
            setCoins(data)
        })
    }, []);

    useEffect(() => {
        if (selectedCoin) {
            coins.forEach(coin => {
                if (coin.label === selectedCoin) {
                    setDisplayPrice(coin.price);
                }
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedCoin]);

    useEffect(() => {
        if (selectedCoin) {
            coins.forEach(coin => {
                if (coin.label === selectedCoin) {
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
        setSearch(e.target.dataset.label)
        setShowDropdown(false);
        setSelectedCoin(e.target.dataset.label);
    };

    const handleNotFoundCoinSelect = (e) => {
        setShowDropdown(false);
        setSelectedCoin(search);
    };

    const handleClearSelected = (e) => {
        setSearch("");
        setSelectedCoin(null);
        inputRef.current.focus();
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
        <div className="dropdown">
            <div className="input-wrapper" ref={inputContainerRef}>
                <input type="text" onChange={handleSearchInputChange} ref={inputRef} value={search} />

                {selectedCoin ? (
                    <span className="close-btn" onClick={handleClearSelected}><BiX /></span>
                ) : (
                    <span><BiSearch /></span>
                )}

            </div>
            <div className={"dropdown-content" + (showDropdown ? " show" : "")} style={getInputWidth()}>
                {filteredCoins(search, coins).map(option => {
                    return <div
                        className="option"
                        data-label={option.label}
                        onClick={handleCoinSelect}
                        key={option.label}
                    >
                        {option.label}
                    </div>
                })}
                {filteredCoins().length === 0 && (
                    <div onClick={handleNotFoundCoinSelect} className="no-option">{t("no_results")} <span>{search}</span></div>
                )}
            </div>
        </div>
    );
}

export default Select;