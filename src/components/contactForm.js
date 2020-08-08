import React, { useState } from 'react'


const onSubmit = async (event, setSubmitText, setPulseAnimation) => {
  event.preventDefault();
  setSubmitText("Submitting...");
  setPulseAnimation(true);
  const formElements = [...event.currentTarget.elements];
  const isValid = formElements.filter(elem => elem.name === "bot-field")[0].value === "";
  const emptyElements = formElements.filter(elem => elem.value === "");
  const validFormElements = isValid ? formElements : [];
  const submitDelay = 2500;

  if (validFormElements.length < 1) {
    setSubmitText("I know you are a bot. Nice try.");
    setPulseAnimation(false);
  } else if (emptyElements.length > 2) {
    setSubmitText("Please fill out all fields.");
    setPulseAnimation(false);
  } else {
    const filledOutElements = validFormElements
      .filter(elem => !!elem.value)
      .map(
        element =>
          encodeURIComponent(element.name) +
          "=" +
          encodeURIComponent(element.value)
      )
      .join("&");

    await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: filledOutElements
    })
      .then(() => {
        setTimeout(function() {
          setSubmitText("Thank you!");
          setPulseAnimation(false);
        }, submitDelay);
      })
      .catch(_ => {
        setTimeout(function() {
          setSubmitText("There was an error with your submission. Please try again.");
          setPulseAnimation(false);
        }, submitDelay);
      });
  }
};

const ContactForm = () => {
  const [submitText, setSubmitText] = useState(null);
  const [pulseAnimation, setPulseAnimation] = useState(false);

  return (
    <form method="post"
        name="tj-morrow-contact" 
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={e => onSubmit(e, setSubmitText, setPulseAnimation)}>
      <h1>Contact</h1>
      <p>For booking inquiries or for more information, send a message below. If email isn't your thing you can reach out on social media.</p>
      <input type="hidden" name="form-name" value="tj-morrow-contact"/>
      <input type="hidden" name="bot-field" />
      <input className="email" type="text" name="email" placeholder="  Your Email" />
      <textarea className="message" name="message" placeholder="  Your Message" />
      <div className="submit-button">
        <button>GET IN TOUCH</button>
        <span className={pulseAnimation ? "form-error pulse" : "form-error fadeIn"}>{submitText}</span>
      </div>
    </form>
  );
}

export default ContactForm