/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import { ContactUsForm } from '../ContactUsForm';
import './ContactUsSection.scss';

export const ContactUsSection = () => {
  return (
    <section className="contact-us">
      <h1 className="contact-us__heading">Contact Us</h1>
      <p className="contact-us__text">
        Any question or remarks? Just write us a message!
      </p>

      <ContactUsForm />

    </section>
  );
};
