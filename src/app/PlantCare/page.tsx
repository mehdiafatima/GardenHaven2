import React from 'react';
import styles from './PlantCare.module.css';

const PlantCare = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Garden Care Tips</h1>
      
      <div className={styles.tipsContainer}>
        <div className={styles.tip}>
          <h2 className={styles.subheading}>1. Watering Wisely</h2>
          <p>
            Water your plants early in the morning or late in the afternoon to minimize evaporation. 
            Ensure that your plants receive enough moisture without overwatering, which can lead to root rot.
          </p>
        </div>

        <div className={styles.tip}>
          <h2 className={styles.subheading}>2. Soil Quality</h2>
          <p>
            Invest in good quality soil. Adding organic matter like compost improves soil structure and nutrient content, 
            promoting healthier plant growth.
          </p>
        </div>
        <div className={styles.tip}>
          <h2 className={styles.subheading}>3. Choose the Right Plants</h2>
          <p>
          Select plants that are well-suited to your local climate and soil type. Native plants are often more resilient 
          and require less maintenance.
          </p>
        </div>
        <div className={styles.tip}>
          <h2 className={styles.subheading}>4. Pest Management</h2>
          <p>
          Keep an eye out for pests. Introduce beneficial insects like ladybugs, or use natural repellents to keep harmful pests at bay.
          </p>
        </div>
        <div className={styles.tip}>
          <h2 className={styles.subheading}>5. Regular Pruning</h2>
          <p>
          Regularly prune your plants to promote healthy growth and improve air circulation. This helps prevent disease and 
            encourages new blooms.
          </p>
        </div>
        <div className={styles.tip}>
          <h2 className={styles.subheading}>6. Mulching</h2>
          <p>
          Apply a layer of mulch around your plants to retain moisture, suppress weeds, and regulate soil temperature. 
            Organic mulches like wood chips or straw decompose over time, adding nutrients to the soil.
          </p>
        </div>
        <div className={styles.tip}>
          <h2 className={styles.subheading}>7. Companion Planting</h2>
          <p>
          Grow complementary plants together to enhance growth and deter pests. 
          For example, planting marigolds with vegetables can help repel harmful insects.
          </p>
        </div>
        <div className={styles.tip}>
          <h2 className={styles.subheading}>8. Fertilizing</h2>
          <p>
          Use organic fertilizers to provide essential nutrients to your plants. 
            Compost, fish emulsion, and seaweed extracts are excellent choices that improve soil health.
          </p>
        </div>
        <div className={styles.tip}>
          <h2 className={styles.subheading}>9. Sunlight Exposure</h2>
          <p>
          Ensure your plants receive adequate sunlight based on their needs. 
          Most flowering plants thrive in 6-8 hours of sunlight daily, while some prefer partial shade.
          </p>
        </div>
        <div className={styles.tip}>
          <h2 className={styles.subheading}>10. Crop Rotation</h2>
          <p>
          Practice crop rotation to prevent soil depletion and reduce pest and disease build-up. 
          Changing the location of plants each season helps maintain soil fertility.
          </p>
        </div>
        <div className={styles.tip}>
          <h2 className={styles.subheading}>11. Seasonal Care</h2>
          <p>
          Adjust your gardening practices with the changing seasons. 
            In spring, focus on planting; summer is for maintenance; fall is for harvesting; and winter may require protection for plants.
          </p>
        </div>

        
      </div>
    </div>
  );
};

export default PlantCare;
