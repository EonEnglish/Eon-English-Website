import styles from './global.module.css'
import Image from 'next/image'


export default function Page() {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <div className={styles.navContent}>
          <div className={styles.navLogo}>
            <Image 
              src="/english.png"
              width={50}
              height={50}
              alt="Eon English Logo" 
              style={{ borderRadius: '50%' }}
            />
            <span className={styles.navBrand}>Eon English</span>
          </div>
          <div className={styles.navLinks}>
            <a href="#home" className={styles.navLink}>Home</a>
            <a href="#about" className={styles.navLink}>About Us</a>
            <a href="#path" className={styles.navLink}>Our Path</a>
            <a href="#contact" className={styles.navLink}>Contact</a>
            <a href="/team" className={styles.navLink}>Team</a>
          </div>
          <button className={styles.navButton}>Become a Teacher</button>
        </div>
      </nav>

      <div className={styles.aboutUs}>
        <div className={styles.mainAboutUsWrapper}> 
          <div className={styles.mainAboutUs}>
            <h2 className={styles.title}>About Us</h2>
            <div className={styles.boxes}>
              <div className={styles.box1}>
                <div className={styles.img1}><Image
                  src="/Untitled.png"
                  width={65}
                  height={55.08}
                  alt="Picture of the lid"
                  className="my-lid"
                  style={{marginTop: "-20px", marginLeft: "-7px" }}
                />
                </div>
                <p className={styles.descriptionFirst}>Eon English is a non-profit organization that teaches kids from China and Spanish-speaking countries English. We aim to provide this opportunity to kids who don't have enough access to English learning material. Through this program, students get to learn how to speak native English and about Western culture. </p>
              </div>
              <br></br>
              <div className={styles.box1}>
                <div className={styles.img1}><Image
                  src="/Untitled (1).png"
                  width={65}
                  height={55.08}
                  alt="Picture of the lid"
                  className="my-lid"
                  style={{marginTop: "-20px", marginLeft: "-7px" }}
                />
                </div>
                <p className={styles.descriptionFirst}>Eon English offers two seasons per year. Each season lasts about 15 weeks. Lessons are completely free and occur once a week for 45 minutes. Students and teachers will decide together a class time that works for both of them. Each lesson includes a skit, small activities, questions, and vocabulary. A small amount of homework is given at the end of class as well.  </p>
              </div>
              <br></br>
              <div className={styles.box1}>
                <div className={styles.img1}><Image
                  src="/Untitled (3).png"
                  width={65}
                  height={55.08}
                  alt="Picture of the lid"
                  className="my-lid"
                  style={{marginTop: "-20px", marginLeft: "-7px" }}
                />
                </div>
                <p className={styles.descriptionFirst}>Teachers can gain volunteer hours through this program and could get enough to earn a Presidential Service Award. If you are interested in working with us, click on the link at the top of this page! We would prefer applicants around 7-16 years old.   </p>
              </div>
              <br></br>
              <div className={styles.box1}>
                <div className={styles.img1}><Image
                  src="/Untitled (4).png"
                  width={65}
                  height={55.08}
                  alt="Picture of the lid"  
                  className="my-lid"
                  style={{marginTop: "-20px", marginLeft: "-7px" }}
                />
                </div>
                <p className={styles.descriptionFirst}>Before Season 15 began, Lily (COO) and Jessenia (Co-CEO) launched Eon Advanced, a 14-lesson curriculum designed for students whose skills exceed the standard program. This advanced curriculum will be taught in small groups of no more than four students, grouped by similar proficiency levels and age. The goal is to foster improved communication skills and provide a deeper understanding of American culture.  </p>
              </div>
              <br></br>
              <div className={styles.box1}>
                <div className={styles.img1}><Image
                  src="/Untitled (5).png"
                  width={65}
                  height={55.08}
                  alt="Picture of the lid"  
                  className="my-lid"
                  style={{marginTop: "-40px", marginLeft: "-7px" }}
                />
                </div>
                <p className={styles.descriptionThird}>​During the summer of 2024, the CEOs Lily and Jessenia launched the Book Buddies program to create a significant impact in their local community. The initiative has already gained interest around the world, and they aspire to expand it further to boost children's literacy rates. Inspired by pediatric cancer patients they saw on social media, Lily and Jessenia decided to add a special component to the program. Young readers will now create cards filled with their creative ideas to bring positivity to those who are struggling. These heartfelt cards will be sent to a local children's hospital, spreading joy and support.  </p>
              </div>
              <br></br>
              <br></br>
              <div className={styles.footer}>
              </div>
            </div>
            <Image
              src="/statue-of-liberty-up.png"
              width={273.64}
              height={900}  
              alt="Picture of the lid"
              className="my-lid"
              style={{
                position: 'absolute',
                right: '20%',
                bottom: '15px',
              }}
            />
          </div>
        </div>
      </div>

      <div className={styles.ourPath} id="path">
        <h2 className={styles.titleOurPath}>Our Path</h2>
        <div className={styles.imgBg}>
          <div className={styles.ourPathBoxV1}>
            <p className={styles.year}>2016</p>
            <p className={styles.description}>The idea of Eon was formed</p>

            <div className={styles.timelineWrapper}>
              <div className={styles.verticalLine}></div>
              <div className={styles.timelineContainer}>
                {[
                  "/Group 7.png",
                  "/Group 9.png",
                  "/Group 9 (1).png",
                  "/Group 11.png",
                  "/Group 11.png",
                  "/Group 12 (1).png",
                  "/Group 13.png",
                  "/Group 14.png",
                  "/Group 15.png",
                  "/Group 16.png",
                  "/Group 17.png",
                  "/Group 18.png"
                ].map((src, index) => (
                  <div key={index} className={styles.timelineItem}>
                    <Image src={src} width={48} height={48} alt={`Milestone ${index + 1}`} />
                  </div>
                ))}
              </div>
            </div>
          </div>
         
          <div className={styles.ourPathBoxV2}>
            <p className={styles.year}>2017</p>
            <p className={styles.description}>Season 1 of Eon Began</p>
          </div>
          <div className={styles.ourPathBoxV1}>
            <p className={styles.year}>2018</p>
            <p className={styles.description}>Completed 4 seasons, over 100 students taught with 20 coaches</p>
          </div>
          <div className={styles.ourPathBoxV2}>
            <p className={styles.year}>2019</p>
            <p className={styles.description}>Received the 501 (c)(3) status</p>
          </div>
          <div className={styles.ourPathBoxV1}>
            <p className={styles.year}>2020-2021</p>
            <p className={styles.description}>The tenth season takes place</p>
          </div>
          <div className={styles.ourPathBoxV2}>
            <p className={styles.year}>January 2024</p>
            <p className={styles.description}>Completed 14 seasons with over 375 students taught</p>
          </div>
          <div className={styles.ourPathBoxV1}>
            <p className={styles.year}>January - February 2024</p>
            <p className={styles.description}>Lily & Jessenia finished the Eon Advanced course. Admitted organization season record of 45 students.</p>
          </div>
          <div className={styles.imgBg}></div>
          <div className={styles.ourPathBoxV2}>
            <p className={styles.year}>February 2024</p>
            <p className={styles.description}>Season 15 officially starts!</p>
          </div>
          <div className={styles.ourPathBoxV1}>
            <p className={styles.year}>March 2024</p>
            <p className={styles.description}>Collaboration with Bear Tech </p>
          </div>
          <div className={styles.ourPathBoxV2}>
            <p className={styles.year}>April 2024</p>
            <p className={styles.description}>Founding of the Eon English-Spanish sector</p>
          </div>
          <div className={styles.ourPathBoxV1}>
            <p className={styles.year}>June 2024</p>
            <p className={styles.description}>Hosted the first Eon English hometown speech competition </p>
          </div>
          <div className={styles.ourPathBoxV2Special}>
            <p className={styles.year}>September 2024</p>
            <p className={styles.description}>The Spanish sector was officially launched with 20 students and 15 coaches, while the Chinese sector set an organizational season record with 58 coaches and 71 students.</p>
          </div>
        </div>
      </div>
    </div>
  )
}