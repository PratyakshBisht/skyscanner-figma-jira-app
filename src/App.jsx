import React, { useState } from 'react';
import AdSelection from './components/AdSelection';
import AnalyticsDashboard from './components/AnalyticsDashboard';
import FeedbackSurvey from './components/FeedbackSurvey';
import './App.css';

const App = () => {
  const [activeTab, setActiveTab] = useState('ad-selection');

  return (
    <div className="app-root">
      <header className="app-header">
        <div className="app-title">
          ✈️ Skyscanner Ad Management Platform
        </div>
        <nav className="nav-tabs">
          <button
            className={`nav-tab-btn ${activeTab === 'ad-selection' ? 'active' : ''}`}
            onClick={() => setActiveTab('ad-selection')}
          >
            1. Ad Selection
          </button>
          <button
            className={`nav-tab-btn ${activeTab === 'analytics' ? 'active' : ''}`}
            onClick={() => setActiveTab('analytics')}
          >
            2. Analytics Dashboard
          </button>
          <button
            className={`nav-tab-btn ${activeTab === 'survey' ? 'active' : ''}`}
            onClick={() => setActiveTab('survey')}
          >
            3. Product Survey
          </button>
        </nav>
      </header>

      <main className="app-content">
        {activeTab === 'ad-selection' && <AdSelection />}
        {activeTab === 'analytics' && <AnalyticsDashboard />}
        {activeTab === 'survey' && <FeedbackSurvey />}
      </main>
    </div>
  );
};

export default App;
