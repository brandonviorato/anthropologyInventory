import DashArtifactCard from '../components/dashboard-components/DashArtifactCard'
import DashboardWidget from '../components/dashboard-components/DashboardWidget'
import { PieChart } from '@mui/x-charts'
import SearchBar from '../components/SearchBar'
import { useEffect, useState } from 'react'
import { fetchTotalRecords, fetchTotalCost, fetchAllArtifactsByCategory, fetchRecentSpecimens } from '../utils/api'
import { NavLink } from 'react-router-dom'

const Dashboard = () => {
  const [totalCount, setTotalCount] = useState(0)
  const [totalCost, setTotalCost] = useState(0)
  const [totalBones, setTotalBones] = useState(0)
  const [totalTools, setTotalTools] = useState(0)
  const [totalPottery, setTotalPottery] = useState(0)
  const [recentSpecimens, setRecentSpecimens] = useState([])

  useEffect(() => {
    fetchTotalRecords().then(setTotalCount)
    fetchTotalCost().then(setTotalCost)
    fetchAllArtifactsByCategory('Bone').then(setTotalBones)
    fetchAllArtifactsByCategory('Tool').then(setTotalTools)
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
              ${totalCost}
              <br />
              <small>Collection Cost</small>
            </p>
            <p>
              $-----
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
            <NavLink id="add-btn" to="/AddProduct">
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
              series={[
                {
                  data: [
                    { id: 0, value: totalBones, label: 'Bones' },
                    { id: 1, value: totalPottery, label: 'Pottery' },
                    { id: 2, value: totalTools, label: 'Tools' }
                  ],
                  innerRadius: 0,
                  paddingAngle: 0,
                  cornerRadius: 4
                }
              ]}
              width={300}
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
              <DashArtifactCard key={idx} imgSrc={el.images[0]}
              scientificName={el.genus + ' ' + el.species} id={el.specimenId} />
            ))}
          </div>
        }
      />
    </section>
  )
}

export default Dashboard
