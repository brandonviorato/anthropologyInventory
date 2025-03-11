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


export const getArtifactById = async (id) => {
    try {
        const response = await fetch(API_URI + id, {
            method: "GET",
            headers: { Accept: "application/json" },
        });
        if (!response.ok) {
            console.log("Error fetching artifact with ID:", id);
            return null;
        }
        return await response.json();
    } catch (error) {
        console.log("Error fetching artifact:", error);
        return null;
    }
};

export const updateArtifact = async (id, formData) => {
    try {
        const response = await fetch(API_URI + id, {
            method: "PATCH",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            console.log("Error updating artifact with ID:", id);
            return null;
        }

        return await response.json();
    } catch (error) {
        console.log("Error updating artifact:", error);
        return null;
    }
};

// DetailsPage
export const fetchSpecimenById = async (id) => {
    try {
      const response = await fetch(`${API_URI}${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch specimen');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching specimen:', error);
      return null;
    }
  };
  
  export const saveNotesToLocalStorage = (id, notes) => {
    localStorage.setItem(`notes-${id}`, notes);
  };
  
