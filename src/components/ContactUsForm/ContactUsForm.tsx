/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './ContactUsForm.scss';

export const ContactUsForm = () => {
  return (
    <section className="contactUsForm__container">
      <div className="contactUsForm__info">
        <div>
          <h2 className="contactUsForm__info__heading">Contact Information</h2>
          <p className="contactUsForm__info__text">
            Say something to start a live chat!
          </p>
        </div>
        <ul className="contactUsForm__info__list">
          <li className="contactUsForm__info__list__item">
            <a
              href="#"
              className="
                contactUsForm__icon__link
                contactUsForm__icon__link--phone
              "
            >
            </a>
            <a href="#" className="contactUsForm__link">+1012 3456 789</a>
          </li>
          <li className="contactUsForm__info__list__item">
            <a
              href="#"
              className="
                contactUsForm__icon__link
                contactUsForm__icon__link--mail
              "
            >
            </a>
            <a href="#" className="contactUsForm__link">demo@gmail.com</a>
          </li>
          <li className="contactUsForm__info__list__item">
            <a
              href="#"
              className="
                contactUsForm__icon__link
                contactUsForm__icon__link--location
                "
            >
            </a>
            <a href="#" className="contactUsForm__link">
              132 Dartmouth Street Boston,
              <br />
              Massachusetts 02156 United States
            </a>
          </li>
        </ul>
        <div className="contactUsForm__info__icons__container">
          <a href="#" className="contactUsForm__info__icon">
            <div className="contactUsForm__info__icon--twitter" />
          </a>
          <a href="#" className="contactUsForm__info__icon">
            <div className="contactUsForm__info__icon--instagram" />
          </a>
          <a href="#" className="contactUsForm__info__icon">
            <div className="contactUsForm__info__icon--discord" />
          </a>
        </div>
      </div>

      <form className="contactUsForm__form">
        <div className="contactUsForm__form-group-desktop">
          <div className="contactUsForm__form-group">
            <label className="contactUsForm__form-group__heading" htmlFor="name">First Name</label>
            <input className="contactUsForm__form-group__input" type="text" id="name" name="name" required />
          </div>
          <div className="contactUsForm__form-group">
            <label
              className="contactUsForm__form-group__heading"
              htmlFor="surname"
            >
              Last Name
            </label>
            <input className="contactUsForm__form-group__input" type="text" id="surname" name="surname" required />
          </div>
        </div>

        <div className="contactUsForm__form-group-desktop">
          <div className="contactUsForm__form-group">
            <label className="contactUsForm__form-group__heading" htmlFor="email">Email</label>
            <input className="contactUsForm__form-group__input" type="email" id="email" name="email" required />
          </div>
          <div className="contactUsForm__form-group">
            <label className="contactUsForm__form-group__heading" htmlFor="phone">Phone number</label>
            <input className="contactUsForm__form-group__input" type="tel" id="phone" name="phone" required />
          </div>
        </div>

        <div className="contactUsForm__form__selection">
          <div className="contactUsForm__form__subject-selection">
            <h2 className="contactUsForm__form__heading">Select Subject?</h2>
            <div className="contactUsForm__checkbox-group">
              <div className="contactUsForm__checkbox-group-2">
                <div className="contactUsForm__checkbox-item">
                  <input className="contactUsForm__checkbox-item__input" type="checkbox" id="General Inquiry" name="subject" />
                  <label className="contactUsForm__checkbox-item__title" htmlFor="General Inquiry">General Inquiry</label>
                </div>

                <div className="contactUsForm__checkbox-item">
                  <input className="contactUsForm__checkbox-item__input" type="checkbox" id="General Inquiry" name="subject" />
                  <label className="contactUsForm__checkbox-item__title" htmlFor="General Inquiry">General Inquiry</label>
                </div>
              </div>

              <div className="contactUsForm__checkbox-group-2">
                <div className="contactUsForm__checkbox-item">
                  <input className="contactUsForm__checkbox-item__input" type="checkbox" id="General Inquiry" name="subject" />
                  <label className="contactUsForm__checkbox-item__title" htmlFor="General Inquiry">General Inquiry</label>
                </div>

                <div className="contactUsForm__checkbox-item">
                  <input className="contactUsForm__checkbox-item__input" type="checkbox" id="General Inquiry" name="subject" />
                  <label className="contactUsForm__checkbox-item__title" htmlFor="General Inquiry">General Inquiry</label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="contactUsForm__form-group">
          <label className="contactUsForm__form-group__heading" htmlFor="message">Email</label>
          <input
            placeholder="Write your message..."
            type="text"
            id="message"
            name="message"
            className="contactUsForm__form-group__input"
            required
          />
        </div>
        <button className="contactUsForm__form__button" type="submit">Send Message</button>
      </form>
    </section>
  );
};
