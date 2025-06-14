import Header from '@/components/Header/Header';
import '@styles/globals.css';
import './Home.css';

export default function Home() {
  return (
    <div>
      <Header />
      
      <div className="block1-container">
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

      <div className="block2-container">
        <h1 className="eon-description-title-text">
            What is the Eon Program?
          </h1>



        
        <h3 className="eon-description-text">
        In 2016, seven girls in California, founded Eon English, a program created to help Chinese students learn authentic American English. 
        When we decided to start this English program, we knew the perfect name: Eon English. 
        This name proved to be perfect for this program: “eon” means a very long, undefined period of time, which is exactly how long you need to dedicate yourself to learn a language. 
          </h3>

                    <svg className="asterisk" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2V22M19.0711 4.92893L4.92893 19.0711M22 12H2M19.0711 19.0711L4.92893 4.92893" className="asterisk-path" />
          </svg>


      </div>

      <div className="block3-container">
        <h1 className="block3-header-text">
          What is the process?
        </h1>
        <h3 className="block3-mission-text">
            Eon English offers two seasons per year. Each season lasts about 15 weeks. Lessons are completely free and occur once a week for 45 minutes. Students and teachers will decide together a class time that works for both of them. Each lesson includes a skit, small activities, questions, and vocabulary. A small amount of homework is given at the end of class as well. 
          </h3>
<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-32 justify-items-center px-4 pt-72">

  <div className="block3-step-background flex flex-col items-center justify-center p-4 -rotate-12">
    <p className="block3-step-text">Choose date of meetings</p>
    <p className="block3-step-number">01</p>
  </div>

  <div className="block3-step-background flex flex-col items-center justify-center p-4">
    <p className="block3-step-text">Meet together at a conference</p>
    <p className="block3-step-number">02</p>
  </div>

  <div className="block3-step-background flex flex-col items-center justify-center p-4 rotate-[18deg] xl:translate-y-12">
    <p className="block3-step-text">Work on listening and speaking by communicating on a topic</p>
    <p className="block3-step-number">03</p>
  </div>

  <div className="block3-step-background flex flex-col items-center justify-center p-4 rotate-12 xl:translate-x-32">
    <p className="block3-step-text">Meet together at a conference</p>
    <p className="block3-step-number">05</p>
  </div>

  <div className="block3-step-background flex flex-col items-center justify-center p-4 -rotate-12 xl:translate-x-40">
    <p className="block3-step-text">Meet together at a planned conference</p>
    <p className="block3-step-number">04</p>
  </div>

        <h1 className="block3-our-impact-text">
          Our Impact
        </h1>

</div>



        </div>





    </div>
  );
}
