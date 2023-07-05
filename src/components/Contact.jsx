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
    <section id='contact' className='bg-zinc-100 pb-40 pt-20 sm:py-20 px-4 sm:px-40 sm:ml-28'>
      <h2 className='z-[1] text-4xl relative font-semibold mb-6 pb-4 after:content-[" "] after:absolute after:bottom-0 after:left-0 after:bg-red-600 after:w-24 after:h-2 '>Get in touch</h2>
      <form ref={form} onSubmit={sendEmail}>
        <fieldset className='relative max-w-[24rem] mb-4 '>
          <input id='user-name' className='outline-none w-full border-b-[1px] border-black p-4 focus:border-b-2 transition-all peer' type='text' name='user_name' placeholder=" " />
          <label htmlFor='user-name' className='absolute text-sm left-4 transition-transform peer-focus:-translate-y-0 peer-focus:text-sm peer-placeholder-shown:translate-y-4 peer-placeholder-shown:text-base' >Name</label>
        </fieldset>
        <fieldset className='relative max-w-[24rem] mb-4'>
          <input id='user-email' className='outline-none w-full border-b-[1px] border-black p-4 focus:border-b-2 transition-all peer' type="email" name="user_email"  placeholder=" "/>
          <label htmlFor='user-email' className='absolute text-sm left-4 transition-transform peer-focus:-translate-y-0 peer-focus:text-sm peer-placeholder-shown:translate-y-4 peer-placeholder-shown:text-base'>Email</label>
        </fieldset>
        <fieldset className='relative max-w-[24rem] mb-4'>
          <textarea id='user-message' className='outline-none w-full border-b-[1px] border-black focus:border-b-2 transition-all p-4 peer' name="message" placeholder=" "/>
          <label htmlFor='user-message' className='absolute text-sm left-4 transition-transform peer-focus:-translate-y-0 peer-focus:text-sm peer-placeholder-shown:translate-y-4 peer-placeholder-shown:text-base'>Message</label>
        </fieldset>
        <input type='submit' value='Send' className='bg-red-600/90 hover:bg-red-400 text-white transition-colors px-14 py-2 rounded-full text-lg cursor-pointer' />
      </form>
    </section>
  )
}

export default Contact;