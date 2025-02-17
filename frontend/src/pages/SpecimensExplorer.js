import { useEffect, useState} from 'react';

const SpecimensExplorer = () => {
    const [specimens, setSpecimens] = useState(null);

    useEffect(() => {
        const fetchSpecimens = async () => {
            const response = await fetch('http://localhost:3001/api/specimens');
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