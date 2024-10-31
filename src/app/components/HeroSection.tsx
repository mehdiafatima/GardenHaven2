import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Welcome to Garden <br></br> Haven🍀</h1>
        <p className={styles.description}>
          Discover the beauty of nature in your own backyard. From sustainable
          gardening tips to creative decor ideas, we help you cultivate a garden
          that reflects your unique style and care for the environment.
        </p>
        <div className={styles.buttonContainer}>
          <a href="/PlantCare" target="_parent" className={styles.primaryButton}>
            Get Gardening Tips
          </a>
          <a href="/GardenDecor" target="_parent" className={styles.secondaryButton}>
            Explore Decor Ideas
          </a>
        </div>
      </div>

      <div className={styles.imageContainer}>
        <img
          src="https://media.istockphoto.com/id/157442317/photo/garden-at-night.jpg?s=612x612&w=0&k=20&c=hwbGDLRlUuOhFb8cBpnU6kdNyrV7YYbLW2Y_A3zySiE="
          alt="Beautiful Garden"
          className={styles.image}
        />
      </div>
    </section>
  );
}
