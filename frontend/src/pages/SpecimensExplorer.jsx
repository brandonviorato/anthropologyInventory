import 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Grid from '@mui/material/Grid';
import SearchBar from '../components/SearchBar';
import skull from "../images/test-skull.jpeg";
import hand from "../images/test-hand.jpg"
import '../index.css'; 
export default function View() {
 
  const specimens = [
    {
      id: "1", 
      image: skull,
      scientificName: "Skull",
      description: "A human skull found in a cave.",
    },
    {
      id: "2",
      image: hand,
      scientificName: "Example 2",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    },
    {
      id: "3",
      image: skull,
      scientificName: "Example 3",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    },
    {
      id: "4",
      image: skull,
      scientificName: "Example 4",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    },
    {
      id: "5",
      image: hand,
      scientificName: "Example 5",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    },
    {
      id: "6",
      image: skull,
      scientificName: "Example 6",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    }
  ];

  return (
    
    <Grid container spacing={9.5}>
      <Grid item xs={2.5} className="sidebar">
        <Typography variant="h6">Search</Typography>
        <Typography variant="body2">
          <SearchBar className="searchBar_view"></SearchBar>
        </Typography>
      </Grid>


      <Grid item xs={8}>
        <Grid container spacing={0} className="card-container">
          {specimens.map((specimen, index) => (
            <Grid item xs={5} key={index}>
              <Card className="card">
                <CardActionArea>
                  <Link to={`/specimen/${specimen.id}`} style={{ textDecoration: "none" }}>
                    <CardMedia
                      component="img"
                      className="card-media"
                      image={specimen.image}
                      alt={specimen.scientificName}
                    />
                    <CardContent className="card-content">
                      <Typography className="card-title" variant="h5">
                        {specimen.scientificName}
                      </Typography>
                      <Typography className="card-description" variant="body2">
                        {specimen.description}
                      </Typography>
                    </CardContent>
                  </Link>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
