import React from "react";
import inst from "../img/contact/inst.png";
import mail from "../img/contact/mail.png";
import tel from "../img/contact/tel.png";
import wapp from "../img/contact/wapp.png";
import "../css/contact.css";

function Contact() {
  return (
    <div className="contact_wrapper" id="contact">
      <div className="contact_header">Контакты</div>
      <div className="contact_body">
        <div className="contact_social">
          <div className="contact_social_bl">
            <a href="https://www.instagram.com/alaqai_study/" className="social_item">
              <img src={inst} alt="" width={32} />
              <div className="social_item_text">@alaqai_study</div>
            </a>
            <a href="https://wa.me/77016145222" className="social_item">
              <img src={wapp} alt="" width={32} />
              <div className="social_item_text">Написать</div>
            </a>
          </div>
          <div className="contact_social_bl">
            <a className="social_item">
              <img src={mail} alt="" width={32} />
              <div className="social_item_text">alaqai.study@gmail.com</div>
            </a>
            <a href="tel:+77016145222" className="social_item">
              <img src={tel} alt="" width={32} />
              <div className="social_item_text">+7 701 614 5222</div>
            </a>
          </div>
        </div>
        <div className="contact_maps">
          <div className="contact_map">
            <div className="contact_map_adress">Карасай батыра 152/1</div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.1529927145566!2d76.90346897586738!3d43.248215278530374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3883690a7b49988f%3A0x80a7fae429dfbdf4!2sAlaQai%20Study%20Qarasai!5e0!3m2!1sru!2skz!4v1699476769833!5m2!1sru!2skz"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="my-maps"
            ></iframe>
          </div>

          <div className="contact_map">
            <div className="contact_map_adress">2 микрорайон 40А</div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.898886474077!2d76.85791337586657!3d43.232579579534224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x388369fe431a30d9%3A0xf8d7f1a8dabe2156!2sAlaQai%20Study!5e0!3m2!1sru!2skz!4v1699476871783!5m2!1sru!2skz"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="my-maps"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
