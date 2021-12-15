import React from 'react';
import emailjs from 'emailjs-com';


function ContactMe() {  
    
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_guy505c', 'template_rkkxzrw', e.target, 'user_vlPzjlDuOayKajM3ZxmBk')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset()
        };


    return(
        <div> 
            <h3>Contact Me</h3>
            <form onSubmit={sendEmail}> 
                <input
                    type="text" 
                    name='name'
                    placeholder="Name"
                />
                <input
                    type="text"
                    name="email"
                    placeholder="Email"
                />
                <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                />
                <textarea
                    type="text"
                    name="message"
                    placeholder="Your Message">
                </textarea>
                <input
                    type='submit'
                    value="Send Message"
                />
            </form>
        </div>
    )
}

export default ContactMe;