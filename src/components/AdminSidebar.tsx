import { Link, useLocation } from "react-router-dom";
import { RiCoupon3Fill, RiDashboardFill, RiShoppingBag3Fill } from "react-icons/ri";
import { FaChartBar, FaChartLine, FaChartPie, FaGamepad, FaPeopleGroup } from "react-icons/fa6";
import { GiMoneyStack } from "react-icons/gi";
import { FaStopwatch } from "react-icons/fa";

const AdminSidebar = () => {
       const location = useLocation();
  return (
    <aside>
       <h2>Logo.</h2>
       <div>
              <h5>Dashboard</h5>
              <ul>
                     <li style={{
                            backgroundColor: location.pathname.includes("/admin/dashboard")? "rgba(0,115,255,0.1)":"white"
                     }}>
                            <Link to={"/admin/dashboard"}>
                                   <RiDashboardFill />
                                   Dashboard
                            </Link>
                     </li>
                     <li style={{
                            backgroundColor: location.pathname.includes("/admin/product")? "rgba(0,115,255,0.1)":"white"
                     }}>
                            <Link to={"/admin/product"}>
                                   <RiShoppingBag3Fill />
                                   Products
                            </Link>
                     </li>
                     <li style={{
                            backgroundColor: location.pathname.includes("/admin/customer")? "rgba(0,115,255,0.1)":"white"
                     }}>
                            <Link to={"/admin/customer"}>
                                   <FaPeopleGroup />
                                   Customers
                            </Link>
                     </li>
                     <li style={{
                            backgroundColor: location.pathname.includes("/admin/transaction")? "rgba(0,115,255,0.1)":"white"
                     }}>
                            <Link to={"/admin/transaction"}>
                                   <GiMoneyStack />
                                   Transactions
                            </Link>
                     </li>
              </ul>
       </div>
       <div>
              <h5>Charts</h5>
              <ul>
                     <li style={{
                            backgroundColor: location.pathname.includes("/admin/chart/bar")? "rgba(0,115,255,0.1)":"white"
                     }}>
                            <Link to={"/admin/chart/bar"}>
                                   <FaChartBar />
                                   Bar
                            </Link>
                     </li>
                     <li style={{
                            backgroundColor: location.pathname.includes("/admin/chart/pie")? "rgba(0,115,255,0.1)":"white"
                     }}>
                            <Link to={"/admin/chart/pie"}>
                                   <FaChartPie />
                                   Pie
                            </Link>
                     </li>
                     <li style={{
                            backgroundColor: location.pathname.includes("/admin/chart/line")? "rgba(0,115,255,0.1)":"white"
                     }}>
                            <Link to={"/admin/chart/line"}>
                                   <FaChartLine />
                                   Line
                            </Link>
                     </li>
              </ul>
       </div>
       <div>
              <h5>Apps</h5>
              <ul>
                     <li style={{
                            backgroundColor: location.pathname.includes("/admin/app/stopwatch")? "rgba(0,115,255,0.1)":"white"
                     }}>
                            <Link to={"/admin/app/stopwatch"}>
                                   <FaStopwatch />
                                   Stopwatch
                            </Link>
                     </li>
                     <li style={{
                            backgroundColor: location.pathname.includes("/admin/app/coupon")? "rgba(0,115,255,0.1)":"white"
                     }}>
                            <Link to={"/admin/app/coupon"}>
                                   <RiCoupon3Fill />
                                   Coupon
                            </Link>
                     </li>
                     <li style={{
                            backgroundColor: location.pathname.includes("/admin/app/toss")? "rgba(0,115,255,0.1)":"white"
                     }}>
                            <Link to={"/admin/app/toss"}>
                                   <FaGamepad />
                                   Toss
                            </Link>
                     </li>
              </ul>
       </div>
    </aside>
  );
};



export default AdminSidebar
