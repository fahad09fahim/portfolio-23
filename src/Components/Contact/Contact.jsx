import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import Swal from 'sweetalert2'
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(`${import.meta.env.VITE_service_Key}`, `${import.meta.env.VITE_template_key}`, form.current, `${import.meta.env.VITE_auth_Key}`)
      .then((result) => {
          console.log(result.text);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your message has been sent",
            showConfirmButton: false,
            timer: 1500
          });
          form.current.reset();
      }, (error) => {
          console.log(error.text);
      });
  };
    return (
        <>
         <h1 className="text-xl md:text-5xl font-bold text-center text-white">GET IN TOUCH</h1>
        <form className="bg-black mt-2 flex flex-col gap-2 items-center mx-3 md:mx-0 pb-2" ref={form} onSubmit={sendEmail}>
        <div className="flex justify-center gap-3">
        <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text text-sm md:text-xl text-white">Your Name:</span>
  </label>
  <input type="text" required placeholder="Your Name" name="user_name" className="input input-bordered input-accent w-full max-w-xs" />
        </div>
        <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text text-sm md:text-xl text-white">Your Email:</span>
  </label>
  <input type="text" required placeholder="Your email address" name="user_email" className="input input-bordered input-accent w-full max-w-xs" />
        </div>
        </div>
        <textarea required className="textarea textarea-accent w-full max-w-md" name="message" placeholder="Message"></textarea>
        <input type="submit" value="Send"  className="btn btn-wide btn-neutral text-white hover:text-black"/>
      </form>
      </>
    );
};

export default Contact;