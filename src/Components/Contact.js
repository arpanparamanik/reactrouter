import React from 'react'
import '../Css/Pages.css'
import ContactForm from './ContactForm'


const Contact = (params) => {
    return(
        <div className="contactStyle">
            <h2>Welcome to Contact Page...</h2>
            <br/><br/>
            <div>
                <br/>
                <ContactForm/>
            </div>
        </div>
    )
}


export default Contact;