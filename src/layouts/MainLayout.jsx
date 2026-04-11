import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import "./style.css";

export default function MainLayout() {
  return (
    <div className="main-layout">
      <Sidebar />
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}
