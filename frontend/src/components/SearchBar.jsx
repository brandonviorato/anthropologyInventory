import { useState, useCallback, useEffect } from 'react';
import { Search } from 'lucide-react';

const SearchBar = () => {
    const [specimens, setSpecimens] = useState(null);

    const API_PORT = import.meta.env.VITE_API_PORT;
    const API_BASE_URL = `http://localhost:${API_PORT}`;

    useEffect(() => {
        const fetchSpecimens = async () => {
            const response = await fetch(`${API_BASE_URL}/api/specimens`);
            const json = await response.json();

            if (response.ok) {
                setSpecimens(json);
            }
        }

        fetchSpecimens()
    }, []);

    console.log(specimens);

    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const debounce = (func, delay) => {
        let timeoutId;
        return (...args) => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => func(...args), delay);
        };
    };

    const handleSearch = useCallback(
        debounce((term) => {
            if (term.trim() === '') {
                setSearchResults([]);
            } else {
                const results = specimens.filter(specimen =>
                    specimen.description.toLowerCase().includes(term.toLowerCase())
                );
                setSearchResults(results);
            }
        }, 300),
        [specimens]
    );

    useEffect(() => {
        handleSearch(searchTerm);
    }, [searchTerm, handleSearch]);

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div>
            <form onSubmit={(e) => e.preventDefault()}>
                <div>
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={handleInputChange}
                        placeholder="Search the database"
                    />
                    <div>
                        <button type="submit">
                            <Search size={20} />
                        </button>
                    </div>
                </div>
            </form>
            {searchResults.length > 0 && (
                <div>
                    <h2>Search Results:</h2>
                    <ul>
                        {searchResults.map(specimen => (
                            <li key={specimen._id}>
                                {specimen.description}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default SearchBar;
