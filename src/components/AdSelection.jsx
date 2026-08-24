import React, { useState } from 'react';
import './AdSelection.css';

const adTypes = [
  {
    id: 'text',
    icon: '📝',
    title: 'Text Ad',
    description: 'High-converting text promotions surfaced directly in flight search results lists.'
  },
  {
    id: 'image-text',
    icon: '🖼️',
    title: 'Image and Text Ad',
    description: 'Rich visual media paired with persuasive text headlines for destination highlights.'
  },
  {
    id: 'video',
    icon: '🎬',
    title: 'Video Ad',
    description: 'Immersive short video commercials engaging users during booking flows.'
  }
];

const AdSelection = ({ onSelectAd }) => {
  const [selectedId, setSelectedId] = useState('text');

  const handleSelect = (id) => {
    setSelectedId(id);
    if (onSelectAd) {
      onSelectAd(id);
    }
  };

  return (
    <div className="ad-selection-container">
      <div className="ad-selection-header">
        <h2>Select Campaign Ad Type</h2>
        <p>Choose an advertisement format to optimize audience reach across Skyscanner platforms.</p>
      </div>

      <div className="ad-cards-grid">
        {adTypes.map((ad) => {
          const isSelected = selectedId === ad.id;
          return (
            <div
              key={ad.id}
              className={`ad-card ${isSelected ? 'selected' : ''}`}
              onClick={() => handleSelect(ad.id)}
            >
              <div>
                <div className="ad-icon-wrapper">{ad.icon}</div>
                <div className="ad-title">{ad.title}</div>
                <div className="ad-description">{ad.description}</div>
              </div>
              <button className="select-btn">
                {isSelected ? '✓ Selected' : 'Select Format'}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdSelection;
