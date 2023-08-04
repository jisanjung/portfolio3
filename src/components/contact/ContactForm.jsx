import React from 'react';
import { useForm } from '@formspree/react';
import Input from '../Input';
import Textbox from '../Textbox';
import ButtonSmall from '../ButtonSmall';
import Confirmation from './Confirmation';
import { FORMSPREE_ID } from '../../constants';

const ContactForm = () => {

    const [state, handleSubmit] = useForm(FORMSPREE_ID);

    if (state.succeeded) {
        return <Confirmation/>
    }
  return (
    <form onSubmit={handleSubmit}>
        <Input type="text" placeholder="Full Name" name="Name" className="mb-8"/>
        <Input type="email" placeholder="Email Address" name="Email" className="mb-8"/>
        <Textbox placeholder="Start typing here" name="Message" className="h-36 mb-6"/>
        <ButtonSmall type="submit" text="Send" full={true}/>
    </form>
  )
}

export default ContactForm