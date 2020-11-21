import React from 'react';
import './styles.css';

const App = () => {
  return (
    <div className="app">
      <div className="title-container">
        <div className="big-book">
          <ion-icon name="book-outline"></ion-icon>
        </div>
        <h1 className="title">{'Cremem els clàssics'.toUpperCase()}</h1>
        <h1 className="title flames">{'Cremem els clàssics'.toUpperCase()}</h1>
        <div className="teaser">
          <ion-icon className="text" name="book-outline"></ion-icon>
          <p className="text">Com ho fem?</p>
        </div>
      </div>
      <section className="section">
        <h1 className="text bold header">Som el millor grup de lectura de Granollers</h1>
        <p className="text paragraph">Splayed in his elastic g-web, Case watched the other passengers as he made his way down Shiga from the sushi stall hake alone in the shade beneath a bridge or overpass. Strata of cigarette smoke rose from the tiers, drifting until it struck currents set up by the blowers and the robot gardener.
</p>
<p className="text paragraph">Splayed in his elastic g-web, Case watched the other passengers as he made his way down Shiga from the sushi stall he cradled it in his sleep, and waarette smoke rose from the tiers, drifting until it struck currents set up by the blowers and the robot gardener.
</p>
      </section>

      <div className="circle"></div>
      <div className="circle"></div>
      <svg>
        <filter id="wavy">
          <feTurbulence
            x="0"
            y="0"
            baseFrequency="0.015"
            numOctaves="5"
            seed="2"
          >
            <animate
              attributeName="baseFrequency"
              dur="60s"
              values="0.01;0.005;0.02"
              repeatCount="indefinite"
            ></animate>
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" scale="30"></feDisplacementMap>
        </filter>
      </svg>
    </div>
  );
};

export default App;
