// import React, { useState } from 'react';
// import { validateEmail } from '../../utils/helpers';


// function ContactForm() {

//     const [formState, setFormState] = useState({ name: '', email: '', message: '' });
//     const { name, email, message } = formState;
//     const [errorMessage, setErrorMessage] = useState('');
   
//     function handleChange(e) {
//         if (e.target.name === 'email') {
//             const isValid = validateEmail(e.target.value);
//             if (!isValid) {
//                 setErrorMessage('Your email is invalid')
//             } else {
//                 setErrorMessage('');
//             }
//         } else {
//             if (!e.target.value.length) {
//                 setErrorMessage(`${e.target.name} is required.`);
//             } else {
//                 setErrorMessage('');
//             }


//         }
//         setFormState({ ...formState, [e.target.name]: e.target.value })
//     }
//     console.log(formState);
//     function handleSubmit(e) {
//         e.preventDefault();
//         if (!errorMessage) {
//             setFormState({ [e.target.name]: e.target.value });
//             console.log('Form', formState);
//         }
//         console.log(formState);
//     };

//     return (
//         <section>
//             <h1>Contact me</h1>
//             <form id="contact-form" onSubmit={handleSubmit}>
//                 <div>
//                     <label htmlFor="name">Name:</label>
//                     <input type="text" defaultValue={name} onChange={handleChange} name="name" />
//                 </div>
//                 <div>
//                     <label htmlFor="email">Email address:</label>
//                     <input type="email" defaultValue={email} name="email" onChange={handleChange} />
//                 </div>
//                 <div>
//                     <label htmlFor="message">Message:</label>
//                     <textarea name="message" defaultValue={message} onChange={handleChange} rows="5" />
//                 </div>
//                 {errorMessage && (
//                     <div>
//                         <p className="error-text">{errorMessage}</p>
//                     </div>
//                 )}
//                 <button type="submit"></button>
//             </form>
//         </section>
//     )
// }

// export default ContactForm;

import React, { useState } from "react";

const FORM_ENDPOINT = "https://public.herotofu.com/v1/f16b1b50-19ca-11ed-9d73-8fc992e1fd24"; // TODO - fill on the later step

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
    >
      <div className="mb-3 pt-0">
        <input
          type="text"
          placeholder="Your name"
          name="name"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <textarea
          placeholder="Your message"
          name="message"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <button
          className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="submit"
        >
          Send a message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;