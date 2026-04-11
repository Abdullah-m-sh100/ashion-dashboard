import {
  RiArrowRightDownLongLine,
  RiArrowRightUpLongLine,
} from "react-icons/ri";
import "./style.css";

export default function StatsCard({ stat }) {
  return (
    <div className="stat-card">
      <div className="stat-content">
        <h3 className="stat-title">{stat.title}</h3>
        <p className="stat-value">{stat.value}</p>
        <div className="stat-change">
          <span
            className={` ${stat.change.startsWith("+") ? "positive" : "negative"}`}
          >
            {stat.trend == "up" ? (
              <RiArrowRightUpLongLine />
            ) : (
              <RiArrowRightDownLongLine />
            )}
            {stat.change}
          </span>
          vs Last month
        </div>
      </div>
      <div className="stat-icon">{stat.icon}</div>
    </div>
  );
}
