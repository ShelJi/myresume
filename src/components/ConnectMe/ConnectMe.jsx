import './ConnectMe.css'
import { useRef } from 'react'

import { SiCodechef } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";
import { FiLinkedin } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";

const ConnectMe = () => {

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const messageRef = useRef(null);

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "b0b3985c-57a5-406f-9d27-fb3f750313e8");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            console.log("Success", res);
            nameRef.current.value = ""
            emailRef.current.value = ""
            messageRef.current.value = ""
            alert("Thank You, Email Sent Succesfully :)")
        }
        else {
            alert("Failed to sent message, Please try again :(")
        }
    };

    return (
        <div className='connect-me' id='connect'>
            <h1 className='connect-heading'>Let`s Talk</h1>

            <form onSubmit={onSubmit}>
                <div className="connect-me-mail">
                    <label htmlFor="name">Name</label>
                    <input type="text" id='name' placeholder='Name' name='name' ref={nameRef} required />
                    <label htmlFor="email">Email</label>
                    <input type="email" id='email' placeholder='EmailToShelj@mail.com' name='email' ref={emailRef} required />
                    <label htmlFor="message">Message</label>
                    <textarea type="text" id='message' rows="5" placeholder='Please enter your messages for me' name='message' ref={messageRef} required />
                </div>
                <div className="bottom">
                    <button type='submit'>Submit</button>
                    <span>Other platforms below</span>
                </div>
            </form>

            <div className="connect-me-links">
                <a href="http://www.codechef.com/users/sheljin" className='connect-icon' > < SiCodechef /> </a>
                <a href="https://leetcode.com/u/shelj/" className='connect-icon' ><SiLeetcode /></a>
                <a href="http://www.linkedin.com/in/sheljin-sa" className='connect-icon' ><FiLinkedin /></a>
                <a href="http://www.github.com/sheljin73" className='connect-icon' ><FiGithub /></a>
                <a href="mailto:shelj73@gmail.com" className='connect-icon' aria-label="Email me" ><TfiEmail /></a>
            </div>
        </div>
    )
}

export default ConnectMe