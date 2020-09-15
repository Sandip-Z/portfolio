import React, { useRef, useEffect } from "react";
import useForm from "../../hooks/useForm";

const ContactForm = () => {
  const [values, setValues] = useForm({
    name: "",
    email: "",
    message: "",
  });

  const inputNameRef = useRef();

  useEffect(() => {
    inputNameRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    console.log("clicked");
  };

  return (
    <div className="my-5 box-lg mr-5 p-5">
      <h5>Lets Talk!</h5>
      <form className="mt-4" onSubmit={(e) => e.preventDefault()}>
        <section>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            name="name"
            onChange={(e) => setValues(e)}
            value={values.name}
            ref={inputNameRef}
          />
        </section>
        <section>
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            name="email"
            onChange={(e) => setValues(e)}
            value={values.email}
          />
        </section>
        <section>
          <label htmlFor="message">Your Message</label>
          <textarea
            name="message"
            rows="5"
            onChange={(e) => setValues(e)}
            value={values.message}
          />
        </section>
        <div className="d-flex justify-content-end">
          <button
            type="submit"
            className="btn btn-light "
            onClick={handleSubmit}
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
