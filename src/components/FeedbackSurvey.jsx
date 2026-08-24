import React, { useState } from 'react';
import './FeedbackSurvey.css';

const FeedbackSurvey = () => {
  const [formData, setFormData] = useState({
    q1_easeRating: 5,
    q2_bestFormat: 'image-text',
    q3_analyticsInsight: 'yes',
    q4_featureSuggestions: '',
    q5_npsScore: 9
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="survey-container">
      <div className="survey-card">
        <div className="survey-header">
          <h2>Advertiser Product Feedback Survey</h2>
          <p>Help Skyscanner improve ad management tools and platform features.</p>
        </div>

        {submitted && (
          <div className="success-banner">
            ✓ Thank you! Your feedback has been submitted successfully.
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Question 1 */}
          <div className="survey-question-group">
            <label className="question-label">
              1. How easy was it to navigate and select your preferred ad format? (1 = Difficult, 5 = Very Easy)
            </label>
            <div className="rating-row">
              {[1, 2, 3, 4, 5].map((num) => (
                <button
                  type="button"
                  key={num}
                  className={`rating-btn ${formData.q1_easeRating === num ? 'active' : ''}`}
                  onClick={() => setFormData({ ...formData, q1_easeRating: num })}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>

          {/* Question 2 */}
          <div className="survey-question-group">
            <label className="question-label">
              2. Which ad format performed best for your campaign goals?
            </label>
            <select
              className="survey-select"
              value={formData.q2_bestFormat}
              onChange={(e) => setFormData({ ...formData, q2_bestFormat: e.target.value })}
            >
              <option value="text">Text Ad</option>
              <option value="image-text">Image & Text Ad</option>
              <option value="video">Video Ad</option>
            </select>
          </div>

          {/* Question 3 */}
          <div className="survey-question-group">
            <label className="question-label">
              3. Did the analytics dashboard provide sufficient insights into your conversion rates?
            </label>
            <select
              className="survey-select"
              value={formData.q3_analyticsInsight}
              onChange={(e) => setFormData({ ...formData, q3_analyticsInsight: e.target.value })}
            >
              <option value="yes">Yes - Highly insightful</option>
              <option value="partial">Partial - Needs more breakdown</option>
              <option value="no">No - Needs improvement</option>
            </select>
          </div>

          {/* Question 4 */}
          <div className="survey-question-group">
            <label className="question-label">
              4. What additional metrics or reporting features would you like to see added?
            </label>
            <textarea
              className="survey-textarea"
              placeholder="Provide suggestions for metrics, reporting filters, or visualization charts..."
              value={formData.q4_featureSuggestions}
              onChange={(e) => setFormData({ ...formData, q4_featureSuggestions: e.target.value })}
            ></textarea>
          </div>

          {/* Question 5 */}
          <div className="survey-question-group">
            <label className="question-label">
              5. How likely are you to recommend Skyscanner's Ad Platform to another advertiser? (1 - 10)
            </label>
            <div className="rating-row" style={{ flexWrap: 'wrap' }}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                <button
                  type="button"
                  key={num}
                  className={`rating-btn ${formData.q5_npsScore === num ? 'active' : ''}`}
                  onClick={() => setFormData({ ...formData, q5_npsScore: num })}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>

          <button type="submit" className="submit-survey-btn">
            Submit Product Feedback
          </button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackSurvey;
