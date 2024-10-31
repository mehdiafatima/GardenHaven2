import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>About Garden Haven</h1>
      <p className={styles.paragraph}>
        At Garden Haven, we believe that everyone can cultivate a slice of nature in their own backyard. 
        Our mission is to inspire and empower individuals to create beautiful, sustainable gardens that enhance their outdoor spaces and contribute to a healthier planet.
      </p>

      <h2 className={styles.subheading}>Our Mission</h2>
      <p className={styles.paragraph}>
        Our mission is to provide accessible gardening resources, tips, and ideas that help you connect with nature. 
        Whether youre a beginner or an experienced gardener, we strive to offer valuable insights that nurture your gardening journey.
      </p>

      <h2 className={styles.subheading}>Our Values</h2>
      <ul className={styles.list}>
        <li className={styles.listItem}>🌱 Sustainability: We advocate for eco-friendly gardening practices that benefit the environment.</li>
        <li className={styles.listItem}>🌼 Community: We aim to build a supportive community of garden enthusiasts.</li>
        <li className={styles.listItem}>🌷 Creativity: We encourage unique and creative approaches to gardening.</li>
      </ul>

      <h2 className={styles.subheading}>Our Story</h2>
      <p className={styles.paragraph}>
        Founded in 2023, Garden Haven began as a small community project to share gardening knowledge and resources. 
        Over the years, we have grown into a thriving online platform where gardeners of all levels can connect, learn, and share their experiences.
      </p>

      <h2 className={styles.subheading}>Join Us</h2>
      <p className={styles.paragraph}>
        Join us on this beautiful journey of gardening! Explore our tips, share your own experiences, and let’s grow together. 
        Sign up for our newsletter to receive the latest gardening tips and exclusive offers!
      </p>

      <div className={styles.buttonContainer}>
        <a href="/." className={styles.subscribeButton}>
          Subscribe Now
        </a>
      </div>
    </div>
  );
};

export default About;
