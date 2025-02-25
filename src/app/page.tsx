// this is the homepage

import Header from '../components/header';  
import '../styles/globals.css';

export default function Home() {
  return (
    <div>
      <Header />
      
      <div className="w-full h-[1024px]" style={{ backgroundColor: '#f8f4ec' }}>

        {/* This is all the text to the left */}
        <div
          style={{
            width: '620px',
            height: '333px',
            paddingTop: '170px',
            paddingLeft: '60px',
          }}
          className="relative"
        >
          {/* Title text*/}
        <h1
          style={{
            fontFamily: 'Neucha, cursive',
            fontWeight: '100',
            fontSize: '45px',  
            lineHeight: '55px',  
            letterSpacing: '0.5px', 
            textAlign: 'center',
          }}
        >
          Eon English - improve your English skills
        </h1>

          {/* Smaller text */}
          <h3
            style={{
              fontFamily: 'Mulish, sans-serif',
              fontWeight: '400',
              marginTop: '30px',
              fontSize: '15px', 
              lineHeight: '27px', 
              letterSpacing: '0.5px', 
              textAlign: 'justify',
            }}
          >
            Eon English teaches children English speaking skills and cultural exchange through one-on-one lessons. We improve these skills through online lessons with coaches of similar ages and to bridge multicultural students together.
          </h3>

            {/* Button */}
          <button
            style={{
              width: '400px',  
              height: '60px',
              marginTop: '30px',
              marginLeft: '60px',
              borderRadius: '21px',
              border: '1px solid #352228',
              backgroundColor: '#352228',
              color: 'white',
              fontFamily: 'Mulish',
              fontWeight: '400',
              fontSize: '18px',
              lineHeight: '22.59px',
              letterSpacing: '0.5px',
              textAlign: 'center',
              padding: '18px', 
              cursor: 'pointer',
            }}
          >
          Sign up for a trial lesson
        </button>



        </div>

        <img 
          src="/images/skylineImage.png"  
          style={{
            position: 'absolute', 
            right: '10%',
            top: '80px', 
            height: '620px',
            width: '450px',
          }} 
        />
      </div>
    </div>
  );
}
