import "./Hero.css";
import {
  FaArrowRight,
  FaPlay,
  FaFire,
  FaDumbbell,
  FaAppleAlt,
  FaRobot,
} from "react-icons/fa";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-badge">
          🚀 AI Powered Fitness Platform
        </span>

        <h1>
          Train Smarter.
          <br />
          Transform Faster.
        </h1>

        <p>
          Forge AI creates personalized workouts, tracks your nutrition,
          analyzes your progress, and coaches you every step of the way.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">
            Get Started
            <FaArrowRight />
          </button>

          <button className="secondary-btn">
            <FaPlay />
            Watch Demo
          </button>
        </div>

        <div className="hero-stats">
          <div>
            <h3>10K+</h3>
            <span>Workouts Generated</span>
          </div>

          <div>
            <h3>98%</h3>
            <span>User Satisfaction</span>
          </div>

          <div>
            <h3>24/7</h3>
            <span>AI Coach</span>
          </div>
        </div>
      </div>

      <div className="hero-dashboard">
        <div className="dashboard-card large">
          <div className="dashboard-header">
            <h3>Today's Workout</h3>
            <FaRobot />
          </div>

          <div className="workout-item">
            <FaDumbbell />
            <span>Bench Press</span>
            <strong>4 × 8</strong>
          </div>

          <div className="workout-item">
            <FaDumbbell />
            <span>Incline DB Press</span>
            <strong>3 × 10</strong>
          </div>

          <div className="workout-item">
            <FaDumbbell />
            <span>Lateral Raise</span>
            <strong>3 × 15</strong>
          </div>
        </div>

        <div className="dashboard-row">
          <div className="dashboard-card small">
            <FaFire />
            <h4>2300</h4>
            <span>Calories</span>
          </div>

          <div className="dashboard-card small">
            <FaAppleAlt />
            <h4>165g</h4>
            <span>Protein</span>
          </div>
        </div>

        <div className="dashboard-card chart">
          <h3>Weekly Progress</h3>

          <div className="bars">
            <div style={{ height: "45%" }}></div>
            <div style={{ height: "60%" }}></div>
            <div style={{ height: "80%" }}></div>
            <div style={{ height: "65%" }}></div>
            <div style={{ height: "95%" }}></div>
            <div style={{ height: "70%" }}></div>
            <div style={{ height: "100%" }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;