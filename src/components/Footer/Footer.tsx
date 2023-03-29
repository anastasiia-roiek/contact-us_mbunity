/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import './Footer.scss';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo__conatainer">
        <a href="#" className="footer__logo">Logo Here</a>
      </div>
      <div className="footer__desktop">
        <div className="footer__group__container">
          <div className="footer__group reach-us">
            <h2 className="footer__group__heading">Reach us</h2>
            <ul className="footer__group">
              <div className="reach-us__desktop">
                <li className="footer__icon">
                  <a href="tel:+1012 3456 789" className="footer__icon footer__icon-phone"> </a>
                </li>
                <li>
                  <a href="tel:+1012 3456 789" className="footer__link">+1012 3456 789</a>
                </li>
              </div>

              <div className="reach-us__desktop">
                <li className="footer__icon">
                  <a href="mailto:demo@gmail.com" className="footer__icon footer__icon-mail"> </a>
                </li>
                <li>
                  <a href="mailto:demo@gmail.com" className="footer__link">demo@gmail.com</a>
                </li>
              </div>

              <div className="reach-us__desktop">
                <li className="footer__icon">
                  <a href="https://goo.gl/maps/oD4H5WuzsGLrWrJo6" className="footer__icon footer__icon-geo"> </a>
                </li>
                <li>
                  <a href="https://goo.gl/maps/oD4H5WuzsGLrWrJo6" className="footer__link">
                    132 Dartmouth Street
                    <br />
                    Boston, Massachusetts
                    <br />
                    02156 United States
                  </a>
                </li>
              </div>
            </ul>
          </div>
          <div className="footer__group company">
            <h2 className="footer__group__heading">Company</h2>
            <ul className="footer__group">
              <li>
                <a href="#" className="footer__link">About</a>
              </li>
              <li>
                <a href="#" className="footer__link">Contact</a>
              </li>
              <li>
                <a href="#" className="footer__link">Blogs</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__group__container">
          <div className="footer__group">
            <h2 className="footer__group__heading">Legal</h2>
            <ul className="footer__group">
              <li>
                <a href="#" className="footer__link">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="footer__link">Terms & Services</a>
              </li>
              <li>
                <a href="#" className="footer__link">Terms of Use</a>
              </li>
              <li>
                <a href="#" className="footer__link">Refund Policy</a>
              </li>
            </ul>
          </div>
          <div className="footer__group">
            <h2 className="footer__group__heading">Quick Links</h2>
            <ul className="footer__group">
              <li>
                <a href="#" className="footer__link">Techlabz Keybox</a>
              </li>
              <li>
                <a href="#" className="footer__link">Downloads</a>
              </li>
              <li>
                <a href="#" className="footer__link" aria-label="Form">Forum</a>
              </li>
            </ul>
          </div>
        </div>

        <form action="" className="footer__form form ">
          <h2 className="form__heading">Join Our Newsletter</h2>
          <div className="form__input__container">
            <input
              type="email"
              placeholder="Your email address"
              className="form__input"
            />
            <button type="submit" className="form__btn">
              Subscribe
            </button>
          </div>
          <p className="form__text">
            *Will send you weekly updates for your better tool management.
          </p>
        </form>
      </div>
    </footer>
  );
};
