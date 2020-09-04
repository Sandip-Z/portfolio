import React from "react";

const ContactForm = () => {
  return (
    <div className="my-5 box-lg mr-5 p-5">
      <h5>Lets Talk!</h5>
      <form className="mt-4">
        <section>
          <label htmlFor="name">Your Name</label>
          <input type="text" name="name" />
        </section>
        <section>
          <label htmlFor="email">Your Email</label>
          <input type="email" name="email" />
        </section>
        <section>
          <label htmlFor="message">Your Message</label>
          <textarea name="message" rows="5" />
        </section>
        <div className="d-flex justify-content-end">
          <button type="submit" className="btn btn-light ">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
