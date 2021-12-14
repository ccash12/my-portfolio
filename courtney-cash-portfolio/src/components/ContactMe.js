import React from 'react';
import emailjs from 'emailjs-com';

function ContactMe() {
    
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_rkkxzrw', e.target, 'user_vlPzjlDuOayKajM3ZxmBk')
            .then((result) => {
            console.log(result.text);
            }, (error) => {
            console.log(error.text);
            });
        e.target.reset()
    }


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
                <input
                    type="text"
                    name="Your Message"
                    placeholder="Your Message"
                />
            </form>
        </div>
    )
}

export default ContactMe;