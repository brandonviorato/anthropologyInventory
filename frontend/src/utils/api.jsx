export const fetchTotalRecords = async () => {
    try {
        const response = await fetch("http://localhost:3001/api/specimens/totalRecords", {
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
        const response = await fetch("http://localhost:3001/api/specimens/totalCost", {
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