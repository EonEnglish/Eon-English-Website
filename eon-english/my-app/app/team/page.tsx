import styles from '../global.module.css';
import Image from 'next/image';

export default function TeamPage() {
  const teamMembers = [
    { imgSrc: "/pic1.avif", name: "Andrew Wang", role: "CO-CEO" },
    { imgSrc: "/pic2.avif", name: "Lily Guo", role: "CO-CEO" },
    { imgSrc: "/pic3.avif", name: "Claire Ma", role: "COO" },
    { imgSrc: "/pic4.avif", name: "Alice Chen", role: "Admissions Officer" },
    { imgSrc: "/pic5.avif", name: "Maylin Liu", role: "Admissions Officer" },
    { imgSrc: "/pic6.avif", name: "Juli Ryu", role: "Media Manager" },
    { imgSrc: "/pic7.avif", name: "Andrew Tsai", role: "Coach Manager" },
    { imgSrc: "/pic8.avif", name: "Eton Chan", role: "Coach Manager" },
    { imgSrc: "/pic9.avif", name: "Kewei Li", role: "Coach Manager" },
    { imgSrc: "/pic10.avif", name: "Orrin Borden", role: "Spanish Sector Manager" },
  ];

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
            <a href="/" className={styles.navLink}>Home</a>
            <a href="#about" className={styles.navLink}>About Us</a>
            <a href="#path" className={styles.navLink}>Our Path</a>
            <a href="#contact" className={styles.navLink}>Contact</a>
            <a href="/team" className={styles.navLink}>Team</a>

          </div>
          <button className={styles.navButton}>Become a Teacher</button>
        </div>
      </nav>

      <div className={styles.ourTeam}>
        <h2 className={styles.titleOurPath}>Our Team</h2>
        <div className={styles.teamGrid}>
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              imgSrc={member.imgSrc}
              name={member.name}
              role={member.role}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function TeamMember({ imgSrc, name, role }: { imgSrc: string; name: string; role: string }) {
  return (
    <div className={styles.member}>
      <Image src={imgSrc} width={232} height={300} alt={name} className="my-class" />
      <div className={styles.nameHolder}>
        <h2 style={{ fontFamily: 'Neucha', color: 'white', textAlign: 'center', marginTop: 'auto' }}>
          {name} <br /> {role}
        </h2>
      </div>
    </div>
  );
}
