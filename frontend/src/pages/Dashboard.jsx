import ArtifactCard from "../components/ArtifactCard";
import DashboardWidget from "../components/DashboardWidget";
import {PieChart} from "@mui/x-charts";
import skull from "../images/test-skull.jpeg";
import hand from "../images/test-hand.jpg"
import pottery from "../images/test-pottery.jpg"

const Dashboard = () => {
    return (
        <section id="dashboard">
            <h1>GRC Anthropology</h1>
            <DashboardWidget
                identifier={"collection-financials"}
                title={"Collection Financials"}
                content={
                    <div>
                        <p>$10,000
                            <br/>
                            <small>Collection Cost</small>
                        </p>
                        <p>$17,500
                            <br/>
                            <small>Collection Value</small>
                        </p>
                    </div>
                }
            />
            <DashboardWidget
                identifier={"inventory"}
                title={"Manage Inventory"}
                content={
                    <div id="inventory-content">
                        <button id="view-btn">view</button>
                        <button id="add-btn">add</button>
                    </div>  
                }
            />
            <DashboardWidget
                identifier={"inventory-breakdown"}
                title={"Inventory Breakdown"}
                content={
                    <div>
                        <PieChart
                            series={[{
                                data: [
                                    { id: 0, value: 65, label: 'Bones' },
                                    { id: 1, value: 25, label: 'Pottery' },
                                    { id: 2, value: 10, label: 'Tools' },
                                ],
                                innerRadius: 2,
                                paddingAngle: 2,
                                cornerRadius: 4
                            }]}
                            width={300}
                            height={200}
                        />
                        <div id="total-artifacts">
                            <p>55</p>
                            <small>Total Artifacts</small>
                        </div>
                    </div>
                    
                }
            />
            <DashboardWidget
                identifier={"recently-added"}
                title={"Recently Added"}
                content={
                    <div id="recently-added-artifacts">
                        <ArtifactCard
                            imgSrc={skull}
                            scientificName={"Skull"}
                            id={"TEST01"}
                        />
                        <ArtifactCard
                            imgSrc={hand}
                            scientificName={"Hand"}
                            id={"TEST02"}
                        />
                        <ArtifactCard
                            imgSrc={pottery}
                            scientificName={"Pottery"}
                            id={"TEST03"}
                        />
                    </div>
                }
            />
        </section>
    )
};

export default Dashboard;