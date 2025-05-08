import DashArtifactCard from '../components/dashboard-components/DashArtifactCard'
import DashboardWidget from '../components/dashboard-components/DashboardWidget'
import { PieChart } from '@mui/x-charts/PieChart'
import { cheerfulFiestaPalette } from '@mui/x-charts'
import SearchBar from '../components/SearchBar'
import { useEffect, useState } from 'react'
import {
  fetchTotalRecords,
  fetchTotalCost,
  fetchCurrentValue,
  fetchAllArtifactsByCategory,
  fetchRecentSpecimens
} from '../utils/api'
import { NavLink } from 'react-router-dom'

const Dashboard = () => {
  const [totalCount, setTotalCount] = useState(0)
  const [currentVal, setCurrentVal] = useState(0)
  const [totalCost, setTotalCost] = useState(0)
  const [totalFossils, setTotalFossils] = useState(0)
  const [totalStoneTools, setTotalStoneTools] = useState(0)
  const [totalPottery, setTotalPottery] = useState(0)
  const [recentSpecimens, setRecentSpecimens] = useState([])

  useEffect(() => {
    fetchTotalRecords().then(setTotalCount)
    fetchTotalCost().then(setTotalCost)
    fetchCurrentValue().then(setCurrentVal)
    fetchAllArtifactsByCategory('Fossil').then(setTotalFossils)
    fetchAllArtifactsByCategory('Stone Tool').then(setTotalStoneTools)
    fetchAllArtifactsByCategory('Pottery').then(setTotalPottery)
    fetchRecentSpecimens().then(setRecentSpecimens)
  }, [])

  return (
    <section id="dashboard">
      <DashboardWidget
        identifier={'collection-financials'}
        title={'Collection Financials'}
        content={
          <div>
            <p>
              ${totalCost > 0 ? totalCost : '-----'}
              <br />
              <small>Collection Cost</small>
            </p>
            <p>
              ${currentVal > 0 ? currentVal : '-----'}
              <br />
              <small>Collection Value</small>
            </p>
          </div>
        }
      />
      <DashboardWidget
        identifier={'inventory'}
        title={'Manage Inventory'}
        content={
          <div id="inventory-content">
            <NavLink id="view-btn" to="/SpecimensExplorer">
              View
            </NavLink>
            <NavLink id="add-btn" to="/AddArtifact">
              Add
            </NavLink>
          </div>
        }
      />
      <DashboardWidget
        identifier={'search-inventory'}
        title={'Search Inventory'}
        content={
          <div>
            <SearchBar></SearchBar>
          </div>
        }
      />
      <DashboardWidget
        identifier={'inventory-breakdown'}
        title={'Inventory Breakdown'}
        content={
          <div>
            <PieChart
              colors={cheerfulFiestaPalette}
              series={[
                {
                  data: [
                    { id: 0, value: totalFossils, label: 'Fossils' },
                    { id: 1, value: totalPottery, label: 'Pottery' },
                    { id: 2, value: totalStoneTools, label: 'Stone Tools' },
                    { id: 3, value: 2, label: 'Weaponry' },
                    { id: 4, value: 4, label: 'Tools (non-weaponry)' }
                  ],
                  cornerRadius: 4,
                  cx: 100
                }
              ]}
              width={450}
              height={200}
            />
            <div id="total-artifacts">
              <p>{totalCount}</p>
              <small>Total Artifacts</small>
            </div>
          </div>
        }
      />

      <DashboardWidget
        identifier={'recently-added'}
        title={'Recent Updates'}
        content={
          <div id="recently-added-artifacts">
            {recentSpecimens?.map((el, idx) => (
              <DashArtifactCard
                key={idx}
                imgSrc={'http://localhost:3001' + el.images[0]}
                scientificName={el.genus + ' ' + el.species}
                specimenId={el.specimenId}
                id={el._id}
              />
            ))}
          </div>
        }
      />
    </section>
  )
}

export default Dashboard
