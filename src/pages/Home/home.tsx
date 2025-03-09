import Header from '@/components/Header/Header';
import '@styles/globals.css';
import './Home.css';

export default function Home() {
  return (
    <div>
      <Header />
      
      <div className="home-container">
        {/* This is all the text to the left */}
        <div className="text-container">
          {/* Title text*/}
          <h1 className="title-text">
            Eon English - improve your English skills
          </h1>

          {/* Smaller text */}
          <h3 className="subtitle-text">
            Eon English teaches children English speaking skills and cultural exchange through one-on-one lessons. We improve these skills through online lessons with coaches of similar ages and to bridge multicultural students together.
          </h3>

          {/* Button */}
          <button className="sign-up-button">
            Sign up for a trial lesson
          </button>
        </div>

        <img src="/images/skylineImage.svg" alt="description" className="skyline-image" />


        <img src="/images/scrollDown.svg" alt="scrollDown" className='scrollDown-image'/>


      </div>
    </div>
  );
}
