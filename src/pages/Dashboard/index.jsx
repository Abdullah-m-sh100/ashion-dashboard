import React, { useState } from "react";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import "./style.css";
import {
  activityData,
  lineData,
  projectDistribution,
  salesData,
  stats,
} from "../../mock/data";
import StatsCard from "../../components/StatsCard";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [timeRange, setTimeRange] = useState("week");

  // بيانات الإحصائيات

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div>
          <h1 className="dashboard-title">Dashboard</h1>
          <p className="dashboard-subtitle">
            Welcome back! Here's what's happening today.
          </p>
        </div>
        <Link to="/new-product" className="dashboard-action-btn">
          <span>+</span> New Project
        </Link>
      </div>

      <div className="stats-grid">
        {stats.map((stat) => (
          <StatsCard stat={stat} />
        ))}
      </div>

      <div className="time-range-selector">
        <button
          className={timeRange === "week" ? "active" : ""}
          onClick={() => setTimeRange("week")}
        >
          Last 7 Days
        </button>
        <button
          className={timeRange === "month" ? "active" : ""}
          onClick={() => setTimeRange("month")}
        >
          Last 4 Weeks
        </button>
        <button
          className={timeRange === "year" ? "active" : ""}
          onClick={() => setTimeRange("year")}
        >
          Last 6 Months
        </button>
      </div>

      <div className="charts-grid">
        <div className="chart-card large">
          <div className="card-header">
            <h3 className="card-title">Users & Revenue Overview</h3>
            <div className="chart-legend">
              <span>
                <span  className="legend-dot users"></span> Users
              </span>
              <span>
                <span className="legend-dot revenue"></span> Revenue ($)
              </span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={320}>
            <LineChart data={lineData[timeRange]}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E0E0E0" />
              <XAxis dataKey="name" stroke="#757575" />
              <YAxis yAxisId="left" stroke="#757575" />
              <YAxis yAxisId="right" orientation="right" stroke="#757575" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #E0E0E0",
                  borderRadius: "8px",
                  padding: "8px 12px",
                }}
              />
              <Legend />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="users"
                stroke="#D32F2F"
                strokeWidth={3}
                dot={{ fill: "#D32F2F", strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6 }}
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="revenue"
                stroke="#80DEEA"
                strokeWidth={3}
                dot={{ fill: "#80DEEA", strokeWidth: 2, r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <div className="card-header">
            <h3 className="card-title">User Activity (24h)</h3>
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={activityData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E0E0E0" />
              <XAxis dataKey="hour" stroke="#757575" />
              <YAxis stroke="#757575" />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="active"
                stackId="1"
                stroke="#D32F2F"
                fill="#D32F2F"
                fillOpacity={0.2}
              />
              <Area
                type="monotone"
                dataKey="pageViews"
                stackId="2"
                stroke="#80DEEA"
                fill="#80DEEA"
                fillOpacity={0.2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <div className="card-header">
            <h3 className="card-title">Project Distribution</h3>
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie
                data={projectDistribution}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) =>
                  `${name} ${(percent * 100).toFixed(0)}%`
                }
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {projectDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <div className="card-header">
            <h3 className="card-title">Product Sales</h3>
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E0E0E0" />
              <XAxis dataKey="product" stroke="#757575" />
              <YAxis stroke="#757575" />
              <Tooltip />
              <Legend />
              <Bar dataKey="sales" fill="#D32F2F" radius={[4, 4, 0, 0]} />
              <Bar dataKey="revenue" fill="#80DEEA" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
