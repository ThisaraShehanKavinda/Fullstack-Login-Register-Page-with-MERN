import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Tooltip,
} from 'chart.js';
import { useContext } from 'react';
import { Bar } from 'react-chartjs-2';
import { UserContext } from '../../context/userContext';
import './Dashboard.css';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function Dashboard() {
  const { user } = useContext(UserContext);

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Activity',
        data: [12, 19, 10, 25, 15],
        backgroundColor: '#4caf50',
        borderRadius: 10,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: '#333',
          font: { size: 14 },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { color: '#333' },
      },
      x: {
        ticks: { color: '#333' },
      },
    },
  };

  return (
    <div className="dashboard-container">
      <div className="welcome-section">
        <h1>Dashboard</h1>
        {!!user && <h2>Welcome, <span>{user.name}</span> 👋</h2>}
      </div>

      <div className="cards-section">
        <div className="card">
          <h3>Projects</h3>
          <p>12 Active</p>
        </div>
        <div className="card">
          <h3>Tasks</h3>
          <p>37 Pending</p>
        </div>
        <div className="card">
          <h3>Messages</h3>
          <p>8 Unread</p>
        </div>
      </div>

      <div className="chart-section">
        <h3>Monthly Activity</h3>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}
