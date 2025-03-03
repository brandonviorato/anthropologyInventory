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
import child from "../images/taungChild.png";
import lucy from "../images/lucy-skull.png";
import '../index.css'; 
export default function View() {
 
  const specimens = [
    {
      id: "1", 
      image: lucy,
      scientificName: "Lucy",
      description: "The fossilized skull of Lucy, one of the most famous early human ancestors, discovered in Ethiopia in 1974. It provided crucial evidence of bipedalism in early hominins",
    },
    {
      id: "2",
      image: child,
      scientificName: " Taung Child",
      description: "The Taung Child is the first early hominin fossil discovered in Africa, providing key insights into human evolution. It is a well-preserved juvenile skull.",
    },
    {
      id: "3",
      image: skull,
      scientificName: "Example 3",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    },
    {
      id: "4",
      image: hand,
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
            <Grid item xs={6} key={index}>
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
