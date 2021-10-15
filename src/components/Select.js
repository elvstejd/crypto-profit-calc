import React, { useRef, useState, useEffect } from 'react';
import { BiSearch, BiX } from 'react-icons/bi';
import { useTranslation } from 'react-i18next';
import data from '../testdata/coinList';
import { InputContainer } from '../styles/shared/InputContainer';
import styled from 'styled-components';


const CloseButton = styled.span`
    cursor: pointer;
    color: var(--negative-500);
    border-radius: 5px;
    transition: .2s ease;
`;

const Dropdown = styled.div`
    margin-top: 0.2rem;
    position: absolute;
    z-index: 99;
    background-color: var(--primary-500);
    box-shadow: 1px 4px 7px -3px rgba(0,0,0,0.57);
    padding: 0.9rem 0.6rem; 
    border-radius: 6px;
    overflow-y: scroll;
    max-height: 20rem;
    display: ${props => props.show ? 'block' : 'none'};
`;

const Option = styled.div`
    padding: 0.5rem 0.5rem;
    margin-bottom: 0.2rem;

    &:hover {
        background-color: var(--primary-300);
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

const Select = ({ setDisplayPrice }) => {
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState("");
    const [selectedCoin, setSelectedCoin] = useState(null);
    const [showDropdown, setShowDropdown] = useState(false);
    const inputContainerRef = useRef();
    const inputRef = useRef();

    const { t } = useTranslation();

    useEffect(() => {
        // fetch('http://localhost:3001/coins').then(res => res.json()).then(data => {
        setCoins(data)
        // })
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
        <div>
            <InputContainer ref={inputContainerRef}>
                <input type="text" onChange={handleSearchInputChange} ref={inputRef} value={search} />

                {selectedCoin ? (
                    <CloseButton onClick={handleClearSelected}><BiX /></CloseButton>
                ) : (
                    <span><BiSearch /></span>
                )}

            </InputContainer>
            <Dropdown show={showDropdown} style={getInputWidth()}>
                {filteredCoins(search, coins).map(option => {
                    return (
                        <Option
                            className="option"
                            data-label={option.label}
                            onClick={handleCoinSelect}
                            key={option.label}
                        >
                            {option.label}
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