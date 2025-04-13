import DashArtifactCard from '../components/dashboard-components/DashArtifactCard'
import DashboardWidget from '../components/dashboard-components/DashboardWidget'
import { PieChart } from '@mui/x-charts'
import skull from '../assets/images/test-skull.jpeg'
import hand from '../assets/images/test-hand.jpg'
import pottery from '../assets/images/test-pottery.jpg'
import SearchBar from '../components/SearchBar'
import { useEffect, useState } from 'react'
import { fetchTotalRecords, fetchTotalCost } from '../utils/api'

const Dashboard = () => {
  const [totalCount, setTotalCount] = useState(0)
  const [totalCost, setTotalCost] = useState(0)

  useEffect(() => {
    fetchTotalRecords().then(setTotalCount)
    fetchTotalCost().then(setTotalCost)
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
            <a id="view-btn" href="/SpecimensExplorer">
              View
            </a>
            <a id="add-btn" href="/AddProduct">
              Add
            </a>
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
                    { id: 0, value: 65, label: 'Bones' },
                    { id: 1, value: 25, label: 'Pottery' },
                    { id: 2, value: 10, label: 'Tools' }
                  ],
                  innerRadius: 2,
                  paddingAngle: 2,
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
        title={'Recently Added'}
        content={
          <div id="recently-added-artifacts">
            <DashArtifactCard imgSrc={skull} scientificName={'Skull'} id={'TEST01'} />
            <DashArtifactCard imgSrc={hand} scientificName={'Hand'} id={'TEST02'} />
            <DashArtifactCard imgSrc={pottery} scientificName={'Pottery'} id={'TEST03'} />
          </div>
        }
      />
    </section>
  )
}

export default Dashboard
