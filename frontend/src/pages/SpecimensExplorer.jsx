//import { useEffect, useState} from 'react';
import SearchBar from '../components/SearchBar';

const SpecimensExplorer = () => {
    // const [specimens, setSpecimens] = useState(null);

    // const API_PORT = import.meta.env.VITE_API_PORT;
    // const API_BASE_URL = `http://localhost:${API_PORT}`;

    // useEffect(() => {
    //     const fetchSpecimens = async () => {
    //         const response = await fetch(`${API_BASE_URL}/api/specimens`);
    //         const json = await response.json();

    //         if (response.ok) {
    //             setSpecimens(json);
    //         }
    //     }

    //     fetchSpecimens()
    // }, []);

    return (
        <div className="dashboard">
            <h1>All Specimens</h1>
            <SearchBar/>
            {/* <div className='collections'>
                {specimens && specimens.map((specimen) => (
                    <p key={specimen._id}>{specimen.commonName}</p>
                ))}
            </div> */}
        </div>
    )
};

export default SpecimensExplorer;