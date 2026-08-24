import React, { useState } from 'react';
import './AnalyticsDashboard.css';

const adPerformanceData = {
  all: {
    impressions: '1,420,500',
    clicks: '94,200',
    ctr: '6.63%',
    revenue: '$48,500',
    chartData: [
      { label: 'Jan', value: 65 },
      { label: 'Feb', value: 80 },
      { label: 'Mar', value: 95 },
      { label: 'Apr', value: 70 },
      { label: 'May', value: 88 }
    ]
  },
  text: {
    impressions: '450,000',
    clicks: '22,500',
    ctr: '5.00%',
    revenue: '$11,250',
    chartData: [
      { label: 'Jan', value: 45 },
      { label: 'Feb', value: 50 },
      { label: 'Mar', value: 60 },
      { label: 'Apr', value: 55 },
      { label: 'May', value: 52 }
    ]
  },
  'image-text': {
    impressions: '620,000',
    clicks: '49,600',
    ctr: '8.00%',
    revenue: '$24,800',
    chartData: [
      { label: 'Jan', value: 70 },
      { label: 'Feb', value: 85 },
      { label: 'Mar', value: 90 },
      { label: 'Apr', value: 78 },
      { label: 'May', value: 92 }
    ]
  },
  video: {
    impressions: '350,500',
    clicks: '22,100',
    ctr: '6.30%',
    revenue: '$12,450',
    chartData: [
      { label: 'Jan', value: 55 },
      { label: 'Feb', value: 60 },
      { label: 'Mar', value: 75 },
      { label: 'Apr', value: 68 },
      { label: 'May', value: 80 }
    ]
  }
};

const AnalyticsDashboard = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const currentData = adPerformanceData[activeFilter];

  return (
    <div className="dashboard-container">
      {/* Left Sidebar Filter */}
      <aside className="dashboard-sidebar">
        <div className="sidebar-title">Ad Format Filters</div>
        <ul className="filter-list">
          <li
            className={`filter-item ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            📊 All Ad Formats
          </li>
          <li
            className={`filter-item ${activeFilter === 'text' ? 'active' : ''}`}
            onClick={() => setActiveFilter('text')}
          >
            📝 Text Ads
          </li>
          <li
            className={`filter-item ${activeFilter === 'image-text' ? 'active' : ''}`}
            onClick={() => setActiveFilter('image-text')}
          >
            🖼️ Image & Text Ads
          </li>
          <li
            className={`filter-item ${activeFilter === 'video' ? 'active' : ''}`}
            onClick={() => setActiveFilter('video')}
          >
            🎬 Video Ads
          </li>
        </ul>
      </aside>

      {/* Right Dashboard Area */}
      <main className="dashboard-main">
        <div className="metrics-summary">
          <div className="metric-card">
            <div className="metric-label">Total Impressions</div>
            <div className="metric-value">{currentData.impressions}</div>
          </div>
          <div className="metric-card">
            <div className="metric-label">Total Clicks</div>
            <div className="metric-value">{currentData.clicks}</div>
          </div>
          <div className="metric-card">
            <div className="metric-label">Avg. CTR</div>
            <div className="metric-value">{currentData.ctr}</div>
          </div>
          <div className="metric-card">
            <div className="metric-label">Est. Revenue</div>
            <div className="metric-value">{currentData.revenue}</div>
          </div>
        </div>

        <div className="chart-card">
          <div className="chart-header">
            <h3>Monthly Performance Trends</h3>
            <span>Performance Index Score</span>
          </div>

          <div className="chart-bar-container">
            {currentData.chartData.map((item) => (
              <div key={item.label} className="chart-bar-row">
                <div className="bar-label">{item.label}</div>
                <div className="bar-track">
                  <div
                    className="bar-fill"
                    style={{ width: `${item.value}%` }}
                  ></div>
                </div>
                <div className="bar-val">{item.value}%</div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AnalyticsDashboard;
