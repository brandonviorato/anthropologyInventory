import "react";
import { useParams, Link } from "react-router-dom";
import child from "../images/taungChild.png";
import lucy from "../images/lucy-skull.png";
import { Card, CardContent, Typography, Table, TableCell, TableRow, TableContainer, TableHead, Paper, Button} from "@mui/material";
import "../index.css"; 

const specimens = [
  {
    id: "1",
    image: lucy,
    scientificName: "Australopithecus afarensis",
    nickName: "Lucy",
    description: "The fossilized skull of Lucy, one of the most famous early human ancestors, discovered in Ethiopia in 1974. It provided crucial evidence of bipedalism in early hominins.",
    anthropologist: "Donald Johanson",
    activeValue: "2300",
    paidValue: "2100",
    locatedCountry: "Ethiopia",
    locatedRegion: "Afar",
    manufacturerID: "001", 
    specimenID: "AL 288-1",
    genus: "Australopithecus",
    species: "Afarensis",
    purchased: "11/24/2018",
    purchaser: "unknown",
    manufacturer: "N/A",
    material: "Reproduction",
    madeIn: "Africa",
  },
  {
    id: "2",
    image: child,
    scientificName: "Australopithecus africanus",
    nickName: "Taung Child",
    description: "The Taung Child is the first early hominin fossil discovered in Africa, providing key insights into human evolution. It is a well-preserved juvenile skull.",
    anthropologist: "Raymond Dart",
    activeValue: "500",
    paidValue: "400",
    locatedCountry: "South Africa",
    locatedRegion: "North West Province",
    manufacturerID: "002", 
    specimenID: "AL 45-l",
    genus: "Australopithecus",
    species: "Africanus",
    purchased: "02/02/2019",
    purchaser: "unknown",
    manufacturer: "USA",
    material: "Reproduction",
    madeIn: "Africa",
  }
];

export default function SpecimenDetail() {
    const { id } = useParams(); 
    const specimen = specimens.find((s) => s.id === id);
  
    if (!specimen) {
      return <h2>Specimen not found</h2>;
    }
  
    return (
      <div className="sd-container">
        <div className="sd-flex-container">
          <Card className="sd-card">
            <Typography variant="h4" gutterBottom>
              {specimen.scientificName}
            </Typography>
            <img
              src={specimen.image}
              alt={specimen.scientificName}
              className="sd-img"
            />
            <CardContent>
              <Typography variant="body1" className="sd-desc">
                {specimen.description}
              </Typography>
            </CardContent>
          </Card>
  
        
          <TableContainer component={Paper} className="sd-table-container">
            <Table>
              <TableHead>
                
                <TableRow>
                  <TableCell className="sd-table-bold">Scientific Name</TableCell>
                  <TableCell className="sd-table-bold">Nick Name</TableCell>
                  <TableCell className="sd-table-bold">Anthropologist</TableCell>
                  <TableCell className="sd-table-bold">Active Value</TableCell>
                  <TableCell className="sd-table-bold">Paid Value</TableCell>
                 
                  <TableCell className="sd-table-bold">Country</TableCell>
                  <TableCell className="sd-table-bold">Region</TableCell>
                  <TableCell className="sd-table-bold">Made In</TableCell>
                </TableRow>
              </TableHead>
                <TableRow>
                  <TableCell>{specimen.scientificName}</TableCell>
                  <TableCell>{specimen.nickName}</TableCell>
                  <TableCell>{specimen.anthropologist}</TableCell>
                  <TableCell>{specimen.activeValue}</TableCell>
                  <TableCell>{specimen.paidValue}</TableCell>
                  <TableCell>{specimen.locatedCountry}</TableCell>
                  <TableCell>{specimen.locatedRegion}</TableCell>
                  <TableCell>{specimen.madeIn}</TableCell>
                </TableRow>
                
                <TableHead>
                <TableRow>
                  <TableCell className="sd-table-bold">Manufacturer ID</TableCell>
                  <TableCell className="sd-table-bold">Specimen ID</TableCell>
                  <TableCell className="sd-table-bold">Genus</TableCell>
                  <TableCell className="sd-table-bold">Species</TableCell>
                  <TableCell className="sd-table-bold">Purchased</TableCell>
                  <TableCell className="sd-table-bold">Purchaser</TableCell>
                  <TableCell className="sd-table-bold">Manufacturer</TableCell>
                  <TableCell className="sd-table-bold">Material</TableCell>
                </TableRow>
              </TableHead>
                <TableRow>
                  <TableCell>{specimen.manufacturerID}</TableCell>
                  <TableCell>{specimen.specimenID}</TableCell>
                  <TableCell>{specimen.genus}</TableCell>
                  <TableCell>{specimen.species}</TableCell>
                  <TableCell>{specimen.purchased}</TableCell>
                  <TableCell>{specimen.purchaser}</TableCell>
                  <TableCell>{specimen.manufacturer}</TableCell>
                  <TableCell>{specimen.material}</TableCell>
                </TableRow>

                
            </Table>
          </TableContainer>
        </div>
  
       
        <Button variant="contained" className="sd-back-btn" component={Link} to="/SpecimensExplorer">
          Back to Specimens
        </Button>
      </div>
    );
  }
