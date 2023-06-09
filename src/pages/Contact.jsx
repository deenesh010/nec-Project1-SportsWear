import "./contactStyle.css";
import React from "react";

const ContactForm = () => {
  return (
    <>
      <div className="container">
        <h1>Send us a message!</h1>
        <form>
          <input placeholder="Name" />
          <input placeholder="Email" type="email" />
          <input placeholder="Subject" />
          <textarea placeholder="Message" rows={4}></textarea>
          <button>Send Message</button>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
