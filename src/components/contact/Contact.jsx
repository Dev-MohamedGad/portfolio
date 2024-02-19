import "./contact.css";
import contact from "../../../public/animation/contact.json"
import { useForm, ValidationError } from '@formspree/react';
import Lottie from "lottie-react";
export default function Contact() {
  const [state, handleSubmit] = useForm("mayrovla");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
}
  return (
    <section className="contact-us">
      <h1 className="title">
        <span className="icon-envelope" />
        Contact us{" "}
      </h1>
      <p className="sub-title">
        {" "}
        Contact us for more information and Get notified when i publish
        something new.
      </p>
      <div className="contact-flex flex">
        <form className="" onSubmit={handleSubmit}>
          <div className="flex">
            <label htmlFor="email">Email Address:</label>
            <input type="email" id="email" name="email" />
            <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
          </div>
          <div className="flex" style={{marginTop:"24px"}}>
            <label htmlFor="message">Your message:</label>
            <textarea required  name="message" id="message" />
            <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
          </div>
          <button className="submit" type="submit" disabled={state.submitting}>
        Submit
      </button>
        </form>
        <div className="animation">
          <Lottie className="contact-animation" style={{height:355}} animationData={contact}></Lottie>
        </div>
      </div>
    </section>
  );
}
