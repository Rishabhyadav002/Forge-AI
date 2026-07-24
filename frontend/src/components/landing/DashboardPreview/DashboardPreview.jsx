import "./DashboardPreview.css";
import {
  FaFire,
  FaDumbbell,
  FaRobot,
  FaChartLine,
  FaAppleAlt,
} from "react-icons/fa";

function DashboardPreview() {
  return (
    <section className="dashboard-preview">

      <div className="section-heading">

        <p className="section-tag">
          PRODUCT PREVIEW
        </p>

        <h2>
          Everything You Need
          <span> in One Dashboard</span>
        </h2>

        <p>
          Your workouts, nutrition, recovery,
          AI coaching and progress—
          all in one beautiful experience.
        </p>

      </div>

      <div className="dashboard-card">

        <div className="dashboard-top">

          <div className="dashboard-title">
            Forge AI Dashboard
          </div>

          <div className="online-dot"></div>

        </div>

        <div className="stats-grid">

          <div className="stat-card">
            <FaFire />
            <h3>21 Days</h3>
            <span>Current Streak</span>
          </div>

          <div className="stat-card">
            <FaDumbbell />
            <h3>Push Day</h3>
            <span>Today's Workout</span>
          </div>

          <div className="stat-card">
            <FaAppleAlt />
            <h3>176g</h3>
            <span>Protein</span>
          </div>

          <div className="stat-card">
            <FaChartLine />
            <h3>+8%</h3>
            <span>Strength</span>
          </div>

        </div>

        <div className="dashboard-bottom">

          <div className="chart-card">

            <h4>Workout Progress</h4>

            <div className="bars">

              <div className="bar h70"></div>
              <div className="bar h40"></div>
              <div className="bar h90"></div>
              <div className="bar h55"></div>
              <div className="bar h100"></div>
              <div className="bar h80"></div>

            </div>

          </div>

          <div className="ai-card">

            <FaRobot className="robot"/>

            <h4>AI Coach</h4>

            <p>
              Great workout yesterday.
              Increase protein intake by 20g today
              and prioritize sleep tonight.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default DashboardPreview;