import { BsSearch } from "react-icons/bs"
import AdminSidebar from "../components/AdminSidebar"
import { FaRegBell } from "react-icons/fa6"
import profile from "../assets/lms.jpg"
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";

const dashboard = () => {
  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main className="dashboard">
        <div className="bar">
          <BsSearch />
          <input type="text" placeholder="Search for data, users, docs" />
          <FaRegBell />
          <img src={profile} alt="userProfile" />
        </div>
        <section className="widgetcontainer">
          <WidgetItem percent={40} amount={true} value={6900} heading="Revenue" color="rgb(0,155,255)" />
          <WidgetItem percent={-20} amount={false} value={400} heading="Users" color="rgb(0,198,202)" />
          <WidgetItem percent={40} amount={true} value={9000} heading="Transactions" color="rgb(120,15,25)" />
          <WidgetItem percent={40} amount={true} value={690} heading="Products" color="rgb(120,155,255)" />
        </section>
        <section className="graph-container">
          <div className="revenue-chart">
            <h2>Revenue & Transactions</h2>
          </div>
          <div className="dashboard-categories">
            <h2>Inventory</h2>
            <div>
              <CategoryItem heading="Laptops" value={40} color="rgb(169,100,23)" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
interface WidgetItemProps {
  heading: string;
  value: number;
  percent: number;
  color: string;
  amount?: boolean;
}

export const WidgetItem = ({heading,value, percent, color, amount}: WidgetItemProps) => <article className="widget">
  <div className="widgetInfo">
    <p>{heading}</p>
    <h4>{amount ? `$${value}` : value}</h4>
    {percent > 0 ? (
      <span className="green">
        <HiTrendingUp /> +{percent}%{" "}
      </span>
    ): (
      <span className="red">
        <HiTrendingDown /> {percent}%{" "}
      </span>
    )}
  </div>
  <div className="widgetCircle" style={{
    background: `conic-gradient(
      ${color} ${(Math.abs(percent)/100) * 360}deg,
      rgb(255,255,255) 0
    )`,
  }}>
    <span style={{
      color,
    }}>{percent}%</span>
  </div>
</article>

interface CategoryItemProps {
  heading: string;
  value: number;
  color: string;
};

const CategoryItem = ({heading, value, color}: CategoryItemProps) =>(
  <div className="category-item">
    <h5>{heading}</h5>
    <div>
    <div style={{
      backgroundColor: color,
      width: `${value}%`,
    }}></div>

    </div>
    <span>{value}</span>

  </div>
)
export default dashboard
