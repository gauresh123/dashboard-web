import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  PieChart,
  Pie,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const DashBoardPage = () => {
  const categoryDistribution = useSelector(
    (state) => state?.aiData?.categoryDistribution
  );
  const insightSummary = useSelector((state) => state?.aiData?.insightSummary);
  const responseTimes = useSelector((state) => state?.aiData?.responseTimes);
  const userSatisfaction = useSelector(
    (state) => state?.aiData?.userSatisfaction
  );
  const usageStatistics = useSelector(
    (state) => state?.aiData?.usageStatistics
  );
  const charts = [
    {
      title: "Insight Summary",
      render: () => (
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={[
                {
                  name: "Successful Queries",
                  value: insightSummary?.successful_queries,
                },
                {
                  name: "Failed Queries",
                  value: insightSummary?.failed_queries,
                },
              ]}
              cx="50%"
              cy="50%"
              outerRadius={100}
              dataKey="value"
              label
            />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      ),
    },
    {
      title: "Category Distribution",
      render: () => (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={Object.entries(categoryDistribution)?.map(([key, value]) => ({
              name: key.replace("_", " "),
              value,
            }))}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      ),
    },
    {
      title: "Day-Wise Response Times",
      render: () => (
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={responseTimes?.day_wise}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="average_time" stroke="#4CAF50" />
          </LineChart>
        </ResponsiveContainer>
      ),
    },
    {
      title: "Week-Wise Response Times",
      render: () => (
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={responseTimes?.week_wise}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="average_time" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      ),
    },
    {
      title: "User Satisfaction",
      render: () => (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={userSatisfaction?.ratings}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="rating" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      ),
    },
    {
      title: "Usage by Platform",
      render: () => (
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={Object.entries(usageStatistics?.by_platform)?.map(
                ([key, value]) => ({
                  name: key,
                  value,
                })
              )}
              cx="50%"
              cy="50%"
              outerRadius={100}
              dataKey="value"
              label
            />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      ),
    },
    {
      title: "Usage by Country",
      render: () => (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={Object.entries(usageStatistics?.by_country).map(
              ([key, value]) => ({
                name: key,
                value,
              })
            )}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      ),
    },
  ];

  return (
    <div className="container">
      {charts?.map((chart, index) => (
        <div key={index} className="chart">
          <h4>{chart?.title}</h4>
          {chart?.render()}
        </div>
      ))}
    </div>
  );
};

export default DashBoardPage;
