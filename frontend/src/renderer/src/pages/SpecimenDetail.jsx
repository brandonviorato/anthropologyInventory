import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import {
  Card,
  CardContent,
  Typography,
  Table,
  TableCell,
  TableRow,
  TableContainer,
  TableHead,
  Paper,
  Button,
  TextareaAutosize,
  Snackbar,
  Alert
} from '@mui/material'
import { fetchSpecimenById } from '../utils/api'
import '../styles/index.css'

export default function SpecimenDetail() {
  const { id } = useParams()
  const [specimen, setSpecimen] = useState(null)
  const [loading, setLoading] = useState(true)
  const [notes, setNotes] = useState('')
  const [isEditing, setIsEditing] = useState(false)
  const [openSnackbar, setOpenSnackbar] = useState(false)
  const [snackbarMessage] = useState('')

  useEffect(() => {
    const fetchSpecimen = async () => {
      const data = await fetchSpecimenById(id)
      if (data) {
        setSpecimen(data)
        setNotes(data.notes || '')
      }
      setLoading(false)
    }

    fetchSpecimen()
  }, [id])

  const handleNotesChange = (event) => {
    setNotes(event.target.value)
  }

  const handleEditClick = () => {
    setIsEditing(true)
  }

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false)
  }

  if (loading) {
    return <h2>Loading...</h2>
  }

  if (!specimen) {
    return <h2>Specimen not found</h2>
  }

  return (
    <div className="sd-container">
      <div className="sd-flex-container">
        {/* Image & Info Card */}
        <Card className="sd-card">
          <img
            src={
              specimen.images && specimen.images.length > 0
                ? `http://localhost:3001${specimen.images[0]}`
                : 'fallback-image.jpg'
            }
            alt={specimen.nickName || 'Specimen Image'}
            className="sd-img"
          />

          <CardContent>
            <Typography variant="body1" className="sd-desc">
              {specimen.description}
            </Typography>
          </CardContent>
        </Card>

        {/* Snackbar for Notification */}
        <Snackbar open={openSnackbar} autoHideDuration={3000} onClose={handleCloseSnackbar}>
          <Alert onClose={handleCloseSnackbar} severity="success">
            {snackbarMessage}
          </Alert>
        </Snackbar>

        {/* Notes Section */}
        <div className="sd-notes-container">
          <Typography variant="h4" gutterBottom>
            {specimen.nickName}
          </Typography>
          <Typography variant="h6">Notes</Typography>
          <TextareaAutosize
            className="sd-notes-box"
            minRows={6}
            placeholder="N/A"
            value={notes}
            onChange={handleNotesChange}
            readOnly={!isEditing}
          />
          <div className="sd-notes-buttons">
            {isEditing && (
              <Button variant="contained" className="save-notes" onClick={handleEditClick}>
                Edit
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Table of Details */}
      <TableContainer component={Paper} className="sd-table-container">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className="sd-table-bold">Nick Name</TableCell>
              <TableCell className="sd-table-bold">Anthropologist</TableCell>
              <TableCell className="sd-table-bold">Active Value</TableCell>
              <TableCell className="sd-table-bold">Paid Value</TableCell>
              <TableCell className="sd-table-bold">Country</TableCell>
              <TableCell className="sd-table-bold">Region</TableCell>
              <TableCell className="sd-table-bold">Cabinet</TableCell>
              <TableCell className="sd-table-bold">Row</TableCell>
              <TableCell className="sd-table-bold">Made In</TableCell>
            </TableRow>
          </TableHead>
          <TableRow>
            <TableCell>{specimen.nickName || 'N/A'}</TableCell>
            <TableCell>{specimen.anthropologist || 'N/A'}</TableCell>
            <TableCell>{specimen.activeValue || 'N/A'}</TableCell>
            <TableCell>{specimen.paidValue || 'N/A'}</TableCell>
            <TableCell>{specimen.countryFound || 'N/A'}</TableCell>
            <TableCell>{specimen.regionFound || 'N/A'}</TableCell>
            <TableCell>{specimen.cabinet || 'N/A'}</TableCell>
            <TableCell>{specimen.row || 'N/A'}</TableCell>
            <TableCell>{specimen.countryManufactured || 'N/A'}</TableCell>
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
            <TableCell>{specimen.manufacturerId || 'N/A'}</TableCell>
            <TableCell>{specimen.specimenId || 'N/A'}</TableCell>
            <TableCell>{specimen.genus || 'N/A'}</TableCell>
            <TableCell>{specimen.species || 'N/A'}</TableCell>
            <TableCell>{specimen.dateOfPurchase || 'N/A'}</TableCell>
            <TableCell>{specimen.purchaser || 'N/A'}</TableCell>
            <TableCell>{specimen.manufacturer || 'N/A'}</TableCell>
            <TableCell>{specimen.material || 'N/A'}</TableCell>
          </TableRow>
        </Table>
      </TableContainer>

      <Button variant="contained" className="sd-back-btn" component={Link} to="/SpecimensExplorer">
        Back to Specimens
      </Button>
    </div>
  )
}
