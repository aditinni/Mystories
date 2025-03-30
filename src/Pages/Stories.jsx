import React, { useState } from 'react';
import EchoesofLife from '../assets/echoes_of_life.png';
import EchoesOfLifepdf from "../assets/Echoes_of_Life.pdf";
import Second from '../assets/second.png'
import IfyouhadAskedThen from '../assets/If_you_had_Asked_then.pdf'


const Stories = () => {
  const [selectedPdf, setSelectedPdf] = useState(null);

  const stories = [
    {
      id: 1,
      title: "Echoes of Life",
      author: "Aditya Raj",
      image: EchoesofLife,
      description: "A collection of several short stories.",
      pdf: EchoesOfLifepdf
    },
    {
      id: 2,
      title: "If you had asked then",
      author: "Aditya Raj",
      image: Second,
      description: "A nostalgic look at missed chances and unspoken feelings between Avinash and Harshita",
      pdf: IfyouhadAskedThen
    },

  ];

  return (
    <>
      <div className={`story-card-container ${selectedPdf ? 'blurred' : ''}`}>
        {stories.map((story) => (
          <div key={story.id} className="story-card">
            <img src={story.image} alt={story.title} className="story-image" />
            <div className="story-content">
              <h3 className="story-title">{story.title}</h3>
              <p className="story-author">by {story.author}</p>
              <p className="story-description">{story.description}</p>
              <button className='read-btn' onClick={() => setSelectedPdf(story.pdf)}>
                Read
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedPdf && (
        <div className="pdf-overlay">
          <div className="pdf-viewer">
            <button className="close-btn" onClick={() => setSelectedPdf(null)}>✖</button>
            <iframe
              src={`${selectedPdf}#toolbar=0`}
              title="PDF Preview"
              width="100%"
              height="100%"
              style={{ border: 'none' }}
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default Stories;
