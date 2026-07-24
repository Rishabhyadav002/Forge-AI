import "./AICoach.css";
import { FaRobot, FaArrowRight } from "react-icons/fa";

function AICoach() {
  return (
    <section className="ai-section">

      <div className="ai-left">

        <p className="section-tag">
          AI FITNESS COACH
        </p>

        <h2>
          Your Personal Trainer
          <span> Available 24/7</span>
        </h2>

        <p>
          Forge AI understands your goals,
          workout history and nutrition habits.
          Ask anything and receive personalized
          guidance in seconds.
        </p>

        <div className="features-list">

          <div className="feature-item">
            ✓ Personalized Workout Plans
          </div>

          <div className="feature-item">
            ✓ Nutrition Recommendations
          </div>

          <div className="feature-item">
            ✓ Recovery Suggestions
          </div>

          <div className="feature-item">
            ✓ Progress Insights
          </div>

        </div>

        <button className="btn">
          Try AI Coach
          <FaArrowRight />
        </button>

      </div>

      <div className="chat-window">

        <div className="chat-header">

          <FaRobot />

          <span>Forge AI Coach</span>

        </div>

        <div className="chat-body">

          <div className="user-message">
            Create today's Push workout.
          </div>

          <div className="ai-message">

            <strong>Today's Workout</strong>

            <ul>

              <li>Bench Press — 4 × 8</li>

              <li>Incline DB Press — 3 × 10</li>

              <li>Machine Chest Press — 3 × 12</li>

              <li>Lateral Raise — 4 × 15</li>

              <li>Tricep Pushdown — 3 × 12</li>

            </ul>

            Estimated Duration:
            <strong> 65 minutes</strong>

          </div>

        </div>

      </div>

    </section>
  );
}

export default AICoach;