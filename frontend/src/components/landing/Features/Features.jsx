import "./Features.css";

import {
  FaDumbbell,
  FaRobot,
  FaChartLine,
} from "react-icons/fa";

function Features() {
  return (
    <section className="features">
      <h2>Everything You Need</h2>

      <div className="feature-grid">
        <div className="feature-card">
          <div className="feature-icon">
            <FaDumbbell />
          </div>
          <h3>Smart Workouts</h3>
          <p>
            AI-generated workout plans tailored to your fitness goals.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <FaRobot />
          </div>
          <h3>AI Coach</h3>
          <p>
            Chat with your AI coach for instant workout and nutrition advice.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <FaChartLine />
          </div>
          <h3>Progress Analytics</h3>
          <p>
            Track strength, body metrics, calories, and consistency over time.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Features;