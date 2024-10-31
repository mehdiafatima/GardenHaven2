import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Contact Us</h1>
      <p className={styles.paragraph}>
        We would love to hear from you! Please fill out the form below with any questions, comments, or suggestions.
      </p>

      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>Name</label>
          <input
            type="text"
            id="name"
            required
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>Email</label>
          <input
            type="email"
            id="email"
            required
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message" className={styles.label}>Message</label>
          <textarea
            id="message"
            rows={5}
            required
            className={styles.textarea}
          />
        </div>

        <button
          type="submit"
          className={styles.button}
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
