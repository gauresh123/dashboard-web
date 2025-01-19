import { useDispatch } from "react-redux";
import "./App.css";
import DashBoardPage from "./pages/DashBoardPage";
import { useEffect } from "react";
import axios from "axios";
import {
  setCategoryDistribution,
  setInsightSummary,
  setResponseTimes,
  setUsageStatistics,
  setUserSatisfaction,
} from "./slices/dashboardSlice";

function App() {
  const dispatch = useDispatch();
  const fetchDataFromApi = async () => {
    try {
      const res = await axios.get("/ai-db.json");
      const data = res?.data;
      const {
        category_distribution,
        insight_summary,
        response_times,
        usage_statistics,
        user_satisfaction,
      } = data;
      dispatch(setCategoryDistribution(category_distribution));
      dispatch(setInsightSummary(insight_summary));
      dispatch(setResponseTimes(response_times));
      dispatch(setUsageStatistics(usage_statistics));
      dispatch(setUserSatisfaction(user_satisfaction));
    } catch (err) {
      alert(err.message);
    }
  };

  useEffect(() => {
    fetchDataFromApi();
  }, []);

  return (
    <>
      <DashBoardPage />
    </>
  );
}

export default App;
