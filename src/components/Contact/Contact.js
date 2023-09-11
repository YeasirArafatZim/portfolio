import React, { useState } from 'react';
import styles from './Contact.module.css';
// import {Map, GoogleApiWrapper} from 'google-maps-react';

const Contact = ({ darkMode }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formContent, setFormContent] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (event) => {
    const { value, name } = event.target;

    setFormContent((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formContent);

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);

    setFormContent({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <>
      <div
        id="contact"
        className={`container ${styles.contain} overflow-hidden`}
      >
        <p
          className={`${styles.email} ${darkMode ? styles.emailDark : ''}`}
          data-aos="fade-up"
        >
          You can email me
        </p>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div
              className="col-md-6"
              data-aos="fade-right"
              style={{ textAlign: 'left' }}
            >
              <label
                className={`${styles.label} ${
                  darkMode ? styles.labelDark : ''
                }`}
              >
                Name
              </label>
              <br />
              <input
                name="name"
                value={formContent.name}
                onChange={handleChange}
                className={`${styles.input} ${
                  darkMode ? styles.inputDark : ''
                }`}
                type="text"
                required
              />

              <label
                className={`${styles.label} ${
                  darkMode ? styles.labelDark : ''
                }`}
              >
                Email
              </label>
              <br />
              <input
                name="email"
                value={formContent.email}
                onChange={handleChange}
                className={`${styles.input} ${
                  darkMode ? styles.inputDark : ''
                }`}
                type="email"
                required
              />

              <label
                className={`${styles.label} ${
                  darkMode ? styles.labelDark : ''
                }`}
              >
                Subject
              </label>
              <br />
              <input
                name="subject"
                value={formContent.subject}
                onChange={handleChange}
                className={`${styles.input} ${
                  darkMode ? styles.inputDark : ''
                }`}
                type="text"
              />
            </div>

            <div
              className="col-md-6"
              data-aos="fade-left"
              style={{ textAlign: 'left' }}
            >
              <label
                className={`${styles.label} ${
                  darkMode ? styles.labelDark : ''
                }`}
              >
                Message
              </label>
              <br />
              <textarea
                name="message"
                value={formContent.message}
                onChange={handleChange}
                className={`${styles.input} ${styles.msg} ${
                  darkMode ? styles.inputDark : ''
                }`}
                type="text"
                required
              />
              <div className={styles.submitDiv}>
                <div>
                  <h6
                    className={styles.successful}
                    style={{ display: submitted ? 'block' : 'none' }}
                  >
                    Successfully Sent
                  </h6>
                </div>
                <div>
                  <button
                    type="submit"
                    className={`btn custom_btn ${styles.btn} ${
                      darkMode ? styles.btnDark : ''
                    }`}
                  >
                    SEND
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
