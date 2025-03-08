const PORT = 3001;
const API_URI = `http://localhost:` + PORT + `/api/specimens/`;

export const fetchTotalRecords = async () => {
    try {
        const response = await fetch(API_URI + "totalRecords", {
            method: "GET",
            headers: { "Accept": "application/json" }
        });
        if(!response.ok) {
            console.log("Error fetching total number of records");
        }
        const data = await response.json();
        return data.count;
    } catch (error) {
        console.log("Error fetching total number of records");
        return 0;
    }
}

export const fetchTotalCost = async () => {
    try {
        const response = await fetch(API_URI + "totalCost", {
            method: "GET",
            headers: { "Accept": "application/json" }
        });
        if(!response.ok) {
            console.log("Error fetching total cost");
        }
        const data = await response.json();
        return data.totalCost;
    } catch (error) {
        console.log("Error fetching total cost");
        return 0;
    }
}

export const addArtifact = async (formData) => {
    try {
        const response = await fetch(API_URI, {
            method: "POST",
            headers: { 
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData),
        });
        if(!response.ok) {
            console.log("Error adding artifact");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("Error fetching total cost");
        return null;
    }
}