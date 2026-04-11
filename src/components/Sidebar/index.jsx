import "./style.css";
import logo from "../../assets/logo.png";
import {
  MdAddShoppingCart,
  MdDashboard,
  MdEditNote,
  MdOutlineProductionQuantityLimits,
  MdPeople,
} from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

const navLinks = [
  {
    id: 1,
    path: "/",
    label: "Dashboard",
    icon: <MdDashboard size={20} />,
  },
  {
    id: 2,
    path: "/new-product",
    label: "Add Product",
    icon: <MdAddShoppingCart size={20} />,
  },
  {
    id: 3,
    path: "/product-display",
    label: "Products",
    icon: <MdOutlineProductionQuantityLimits size={20} />,
  },
  {
    id: 4,
    path: "/users",
    label: "Users",
    icon: <MdPeople size={20} />,
  },
  {
    id: 5,
    path: "/manage",
    label: "Manage Products",
    icon: <MdEditNote size={20} />,
  },
];

export default function Sidebar() {
  return (
    <div className="Sidebar">
      <Link to="/" className="logo">
        <img src={logo} alt="Logo" />
      </Link>

      <nav>
        {navLinks.map((link) => (
          <NavLink key={link.id} to={link.path}>
            {link.icon}
            <span>{link.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
