import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const ContactCredentials = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    // Prevent multiple submissions
    if (isSubmitting) return;
    setIsSubmitting(true);

    emailjs
      .sendForm('service_kgnxise', 'template_iuz77sv', form.current, {
        publicKey: 'JC58hqjQIj5d1lVYA',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          // Reset form after successful submission
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      )
      .finally(() => {
        setIsSubmitting(false); // Reset submitting state
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="from_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" disabled={isSubmitting} />
    </form>
  );
};
