export const Home = () => {
    return (
      <>
        <div className="home-flex">
          <h1>Welcome to My World Of Words</h1>
          <p className="subtitle">Stories from the heart, one post at a time.</p>
  
          <div className="quote-section">
            <blockquote>
              "There is no greater agony than bearing an untold story inside you."
            </blockquote>
            <cite>— Maya Angelou</cite>
          </div>
  
          <div className="intro">
            <p>
              Dive into a collection of heartfelt stories, poetic whispers, and thoughtful reflections. 
              Every piece here is a window into a different emotion, a different moment — crafted with care and passion.
            </p>
          </div>
  
          <div className="cta">
            <a href="/stories" className="explore-button">Explore Stories</a>
          </div>
        </div>
      </>
    );
  };
  