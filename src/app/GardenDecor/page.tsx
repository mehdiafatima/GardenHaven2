// components/GardenDecor.tsx
import React from 'react';
import styles from './GardenDecor.module.css';

const GardenDecor = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Garden Decor Ideas</h1>
      
      <div className={styles.spaceY6}>
        {/* Decor Idea Cards */}
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>1. Decorative Plant Pots</h2>
          <p className={styles.cardText}>
            Use unique and colorful plant pots to enhance the visual appeal of your garden. 
            Terracotta, ceramic, or even upcycled containers can add character and charm. 
            Don’t hesitate to mix sizes and styles for an eclectic look!
          </p>
        </div>

        <div className={styles.card}>
          <h2 className={styles.cardTitle}>2. Garden Statues</h2>
          <p className={styles.cardText}>
            Adding statues or sculptures can create focal points in your garden. 
            Choose designs that resonate with your personal style, from whimsical gnomes 
            to elegant sculptures. Position them among plants for a captivating effect.
          </p>
        </div>
        
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>3. String Lights</h2>
          <p className={styles.cardText}>
            Illuminate your garden with string lights or lanterns. 
            They create a magical ambiance, especially during evening gatherings. 
            Consider solar-powered options for energy efficiency.
          </p>
        </div>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>4. Garden Pathways</h2>
          <p className={styles.cardText}>
          Create pathways using stones, pebbles, or wood to guide visitors through your garden. 
          It adds structure and makes the space more inviting. Experiment with patterns for added interest.
          </p>
        </div>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>5. Water Features</h2>
          <p className={styles.cardText}>
          Incorporating a small pond, fountain, or birdbath can introduce tranquility 
          and attract wildlife to your garden. The sound of flowing water is soothing and enhances relaxation.
          </p>
        </div>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>6. Garden Furniture</h2>
          <p className={styles.cardText}>
          Invest in comfortable seating areas, such as benches or patio sets, 
            to enjoy your garden space. Choose durable materials that withstand weather elements and complement your gardens theme.
          </p>
        </div>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>7. Vertical Gardens</h2>
          <p className={styles.cardText}>
          Maximize space by creating vertical gardens using wall planters or trellises. 
            They can make small areas feel lush and vibrant. This is especially useful in urban environments.
          </p>
        </div>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>8. DIY Garden Decor</h2>
          <p className={styles.cardText}>
          Get creative with DIY projects like painted rocks, handmade wind chimes, 
          or upcycled furniture to add a personal touch to your garden. This adds uniqueness and character.
          </p>
        </div>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>9. Colorful Garden Flags</h2>
          <p className={styles.cardText}>
          Incorporate colorful garden flags to add vibrant colors and welcoming vibes to your space. 
          Choose designs that match the seasons or express your personality.
          </p>
        </div>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>10. Raised Garden Beds</h2>
          <p className={styles.cardText}>
          Use raised garden beds for an organized look and better soil control. 
          You can paint them in colors that complement your garden’s overall design for added flair.
          </p>
        </div>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>11. Bird Feeders and Houses</h2>
          <p className={styles.cardText}>
          Attract birds to your garden with feeders and birdhouses. 
          Not only do they add a lively atmosphere, but they also help control pests naturally.
          </p>
        </div>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>12. Garden Trellis</h2>
          <p className={styles.cardText}>
          Trellises can serve as beautiful backdrops for climbing plants. 
          They add vertical interest to your garden while providing support for plants like tomatoes or cucumbers.
          </p>
        </div>



      </div>
    </div>
  );
};

export default GardenDecor;
