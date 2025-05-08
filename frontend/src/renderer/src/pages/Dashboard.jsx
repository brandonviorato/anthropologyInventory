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
    <>
      <section id="dashboard-top">
        <SearchBar />
        <NavLink id="view-btn" to="/SpecimensExplorer">
          View
        </NavLink>
        <NavLink id="add-btn" to="/AddArtifact">
          Add
        </NavLink>
      </section>
      <section id="dashboard">
        <DashboardWidget
          identifier={'collection-cost'}
          title={'Collection Cost'}
          content={
            <>
              <p>${totalCost > 0 ? totalCost : '-----'}</p>
              <small>Amount paid for the collection</small>
            </>
          }
        />
        <DashboardWidget
          identifier={'collection-value'}
          title={'Collection Value'}
          content={
            <>
              <p>${currentVal > 0 ? currentVal : '-----'}</p>
              <small>Active value of the collection.</small>
              <br />
              {/* <small className="disclaimer">
                The total current collection value is based on user-provided estimates and may
                reflect actual market value. Accuracy depends on the quality and timeliness user
                user inputs.
              </small> */}
            </>
          }
        />
        <DashboardWidget
          identifier={'total-artifacts'}
          title={'Total Artifacts'}
          content={
            <>
              <p>{totalCount}</p>
              <small>Total Artifacts</small>
            </>
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
                      { id: 3, value: 0, label: 'Weaponry' },
                      { id: 4, value: 0, label: 'Tools (non-weaponry)' }
                    ],
                    cornerRadius: 4,
                    cx: 100
                  }
                ]}
                width={450}
                height={200}
              />
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
                  // name={el.genus + ' ' + el.species}
                  name={el.nickName ? el.nickName : el.genus + ' ' + el.species}
                  specimenId={el.specimenId}
                  id={el._id}
                />
              ))}
            </div>
          }
        />
      </section>
    </>
  )
}

export default Dashboard
