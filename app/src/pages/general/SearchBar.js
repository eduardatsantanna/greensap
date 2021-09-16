import React, { useState, useEffect, useRef } from 'react'
import { useHistory } from 'react-router-dom';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useOutsideFocus, useQuery } from "@/hooks";

export const SearchBar = () => {
    const [search, setSearch] = useState('');
    const [searchHistory, setSearchHistory] = useState([]);
    const [toggleList, setToggleList] = useState(false);
    const ref = useRef(null);
    const isOutside = useOutsideFocus(ref);
    const history = useHistory();
    const query = useQuery('search');

    useEffect(() => {
        const history = window.localStorage.getItem('search_history');
        if (history !== null) {
            setSearchHistory(JSON.parse(history));
        }
    }, []);

    useEffect(() => {
        setSearch(query);
    }, [query]);

    useEffect(() => {
    if (isOutside && toggleList) {
        setToggleList(false);
    }
  }, [isOutside]);

    const onSearch = () => {
        if (!searchHistory.includes(search)) {
            const newSearchHistory = [search].concat(searchHistory);
            if (newSearchHistory.length > 5) {
                newSearchHistory.pop();
            }
            window.localStorage.setItem('search_history', JSON.stringify(newSearchHistory));
            setSearchHistory(newSearchHistory);
        }
        history.push(`/marketplace?search=${search}`);
    };

    const onEnter = (e) => {
        if (e.charCode === 13) {
            onSearch();
            setToggleList(false);
        }
    };

    const onDelete = (pos) => {
        const newSearchHistory = searchHistory.filter((item, i) => pos !== i);
        window.localStorage.setItem('search_history', JSON.stringify(newSearchHistory));
        setSearchHistory(newSearchHistory);
    };

    return (
        <div className="search">
            <input
                ref={ref}
                className="search-input"
                placeholder="Search a project..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onFocus={() => setToggleList(true)}
                onKeyPress={onEnter}
            />
            <FontAwesomeIcon className="search-icon" icon={faSearch} onClick={onSearch} />

            {toggleList && (
                <ul className="search-list">
                    {searchHistory.map((item, i) => (
                        <li key={i} className="search-option">
                            <p style={{ padding: '10px 10px', width: '100%' }} onClick={() => history.push(`/marketplace?search=${item}`)}>
                                {item}
                            </p>
                            <FontAwesomeIcon icon={faTimes} size="1x" onClick={() => onDelete(i)} />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
