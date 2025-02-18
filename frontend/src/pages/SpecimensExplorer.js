import { useEffect, useState} from 'react';

const SpecimensExplorer = () => {
    const [specimens, setSpecimens] = useState(null);

    const API_PORT = process.env.REACT_APP_API_PORT;
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

    return (
        <div className="dashboard">
            <h1>All Specimens</h1>
            <div className='collections'>
                {specimens && specimens.map((specimen) => (
                    <p key={specimen._id}>{specimen.commonName}</p>
                ))}
            </div>
        </div>
    )
};

export default SpecimensExplorer;