import { useRef } from "react";
import emailjs from '@emailjs/browser';

function Contact () {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ym7he4i', 'template_h7ru42j', form.current, 'XA_Y_tNCYMI7ouZHp')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contact' className='flex justify-center bg-zinc-100 py-12'>
      <form ref={form} onSubmit={sendEmail} className='flex flex-col items-center'>
        <fieldset className='relative w-96 mb-4'>
          <input id='user-name' className='w-full border-b-[1px] border-black p-4 peer' type='text' name='user_name' />
          <label htmlFor='user-name' className='absolute translate-y-4 left-4 transition-transform peer-focus:-translate-y-0 peer-focus:text-sm' >Name</label>
        </fieldset>
        <fieldset className='relative w-96 mb-4'>
          <input id='user-email' className='w-full border-b-[1px] border-black p-4 peer' type="email" name="user_email" />
          <label htmlFor='user-email' className='absolute translate-y-4 left-4 transition-transform peer-focus:-translate-y-0 peer-focus:text-sm'>Email</label>
        </fieldset>
        <fieldset className='relative w-96 mb-4'>
          <textarea id='user-message' className='w-full border-b-[1px] border-black p-4 peer' name="message" />
          <label htmlFor='user-message' className='absolute translate-y-4 left-4 transition-transform peer-focus:-translate-y-0 peer-focus:text-sm'>Message</label>
        </fieldset>
        <input type='submit' value='Send' className='bg-red-600/90 hover:bg-red-400 text-white transition-colors px-14 py-2 rounded-full text-lg cursor-pointer' />
      </form>
    </section>
  )
}

export default Contact;