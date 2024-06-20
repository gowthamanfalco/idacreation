import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import'./New.css'

export const New = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_s6zthtn', 'template_oojwl6q', form.current, {
        publicKey: 'NraKUXyV16bLQUnIO',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <>
    <div className='zxc'>
            

            <h1 className='aq'>GET IN TOUCH</h1><br></br>
            
            <form ref={form} onSubmit={sendEmail} className='nm'>
                <label className='pl'>Name    :</label>
                <input type="text" name="user_name" /><br></br><br></br>
                <label  className='pl'>Email          :</label>
                <input type="email" name="user_email" /><br></br><br></br>
                <label className='pl'>Message    :  </label>
                <textarea name="message" /><br></br><br></br>
                <input type="submit" value="Send" className='p2 ' />
            </form>
            

        </div>
    </>
    
    
  );
};