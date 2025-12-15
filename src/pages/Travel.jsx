import React from 'react';
import FadeInImage from '../components/FadeInImage';
import './styles.css';

export default function Travel() {
  return (
    <div className="page-container">
      <section className="page-text-section">
        <h1>Travel</h1>
        <p>
          Carrying a camera when traveling keeps me on my toes. It's exciting how even when you're going to a renowned tourist destination, you never actually know what you're going to see until you get there. Below are some of my favorite photos taken on my travels!
        </p>
      </section>

      <div className="page-divider" />
      
      <section className="page-images-section">
        <div className="page-grid page-grid-11-rows">
          <FadeInImage
            src="src/images/travel/t1.jpeg"
            alt="A boat tour guide sailing through the canals of Zhujiajiao, China."
            style={{ gridColumn: '1 / 2', gridRow: '1 / 3' }}
          />
          <FadeInImage
            src="src/images/travel/t3.jpeg"
            alt="A Chinese temple in Zhujiajiao, China."
            style={{ gridColumn: '2 / 3', gridRow: '1 / 3' }}
          />
          <FadeInImage
            src="src/images/travel/t2.jpeg"
            alt="A Chinese lantern hanging from the side of a building in Zhujiajiao, China."
            style={{ gridColumn: '3 / 4', gridRow: '1 / 3' }}
          />
          <FadeInImage
            src="src/images/travel/t_h1.jpg"
            alt="Tanghulu treats through the window of a street vendor in China. The tanghulu has glazed grapes, mangos, and strawberries."
            style={{ gridColumn: '1 / 2', gridRow: '3 / 4' }}
          />
          <FadeInImage
            src="src/images/travel/t_h2.jpg"
            alt="A long exposure photo of the cityscape from the 19th floor of an apartment complex in Beijing, China."
            style={{ gridColumn: '1 / 2', gridRow: '4 / 5' }}
          />
          <FadeInImage
            src="src/images/travel/t6.jpg"
            alt="A morning photo of the streets from the 19th floor of an apartment complex in Beijing, China."
            style={{ gridColumn: '2 / 3', gridRow: '3 / 5' }}
          />
          <FadeInImage
            src="src/images/travel/t7.jpg"
            alt="A swarm of large koi fish open their mouths to eat food from the surface of the water."
            style={{ gridColumn: '3 / 4', gridRow: '3 / 5' }}
          />

          <FadeInImage
            src="src/images/travel/t4.jpeg"
            alt="An orange and white cat sits near the steps of a door in Zhejiang, China."
            style={{ gridColumn: '1 / 2', gridRow: '5 / 7' }}
          />
          <FadeInImage
            src="src/images/travel/t_h5.jpeg"
            alt="The back of a man with white hair in a red shirt looking at Vincent van Gogh's Sunflowers painting in The Metropolitan Museum of Art in New York City."
            style={{ gridColumn: '2 / 3', gridRow: '5 / 6' }}
          />
          <FadeInImage
            src="src/images/travel/t6.jpeg"
            alt="A small brown dog with no collar sits on the steps and looks at the camera in Zhejiang, China."
            style={{ gridColumn: '3 / 4', gridRow: '5 / 7' }}
          />
          <FadeInImage
            src="src/images/travel/t_h6.jpeg"
            alt="The Empire State Building in New York City."
            style={{ gridColumn: '2 / 3', gridRow: '6 / 7' }}
          />
          <FadeInImage
            src="src/images/travel/t0.jpg"
            alt="Rocks, trees, and small temple-like structures in the background of a misty garden in Beijing, China."
            style={{ gridColumn: '1 / 2', gridRow: '7 / 9' }}
          />
          <FadeInImage
            src="src/images/travel/t_h3.jpeg"
            alt="A boat carrying tourists wearing bright red ponchos sails through the waters of Niagara Falls in Niagara Falls, New York."
            style={{ gridColumn: '3 / 4', gridRow: '7 / 8' }}
          />
          <FadeInImage
            src="src/images/travel/t7.jpeg"
            alt="Tourists wearing blue ponchos and raincoast walk up and down stairs surrounded by trees. The Niagara Falls rush in the background."
            style={{ gridColumn: '2 / 3', gridRow: '7 / 9' }}
          />
          <FadeInImage
            src="src/images/travel/t_h9.jpeg"
            alt="A moody photo of The Peacock Room at the Smithsonian's National Museum of Asian Art in Washington, D.C."
            style={{ gridColumn: '3 / 4', gridRow: '8 / 9' }}
          />
          <FadeInImage
            src="src/images/travel/t9.jpeg"
            alt="A cooly lit display of the Arms and Armor gallery at The Metropolitan Museum of Art in New York City."
            style={{ gridColumn: '1 / 2', gridRow: '9 / 11' }}
          />
          <FadeInImage
            src="src/images/travel/t_h7.jpeg"
            alt="The Fearless Girl statue stares down the American Flag in New York City."
            style={{ gridColumn: '2 / 3', gridRow: '9 / 10' }}
          />
          <FadeInImage
            src="src/images/travel/t8.jpeg"
            alt="The Lincoln Memorial in Washington, D.C."
            style={{ gridColumn: '3 / 4', gridRow: '9 / 11' }}
          />
          <FadeInImage
            src="src/images/travel/t_h8.jpeg"
            alt="A long exposure photo of a store with a sign reading 'I ❤️ NY' in New York City. Tourists walk past in streaks of white."
            style={{ gridColumn: '2 / 3', gridRow: '10 / 11' }}
          />
        </div>
      </section>
    </div>
  );
}
