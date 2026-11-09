import React from 'react';
import { useForm } from '@formspree/react';
import { IoMdArrowRoundForward } from "react-icons/io";
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
    <form onSubmit={handleSubmit} className='space-y-5'>
        <Input type="text" placeholder="Enter your name" name="Name"/>
        <Input type="email" placeholder="Enter your email address" name="Email"/>
        <Textbox placeholder="Write your message" name="Message"/>
        <ButtonSmall type="submit" text={state.submitting ? "Sending…" : "Send message"} full={true} disabled={state.submitting} className="mt-2">
          <IoMdArrowRoundForward className='text-lg'/>
        </ButtonSmall>
    </form>
  )
}

export default ContactForm
