import React from 'react';
import Heading from '../components/Heading';
import SubHeading from '../components/SubHeading';
import Input from '../components/Input';
import Textbox from '../components/Textbox';
import ButtonSmall from "../components/ButtonSmall";
import { HiOutlineMail } from "react-icons/hi";
import { GrLocationPin } from "react-icons/gr";
import { DARKER_TEXT_COLOR, MY_EMAIL, PARAGRAPH_COLOR } from '../constants';

const Contact = () => {
  return (
    <section>
      <Heading text="Get in touch"/>
      <SubHeading text="Let's talk." className="my-6"/>
      <div className='flex flex-col md:flex-row-reverse mt-10 md:mt-16'>
        <div className='md:w-1/2 mb-8 md:mb-0 md:ml-8'>
          <a href={`mailto:${MY_EMAIL}`} target='_blank' rel="noopener noreferrer" className='flex items-center hover:underline mb-2'>
            <HiOutlineMail className='text-2xl mr-3' style={{
              color: DARKER_TEXT_COLOR,
            }}/>
            <span className='md:text-lg' style={{
              color: PARAGRAPH_COLOR,
            }}>jisan.jung@temple.edu</span>
          </a>
          <p className='flex items-center'>
            <GrLocationPin className='text-2xl mr-3' style={{
              color: DARKER_TEXT_COLOR,
            }}/>
            <span className='md:text-lg' style={{
              color: PARAGRAPH_COLOR,
            }}>Philadelphia, PA</span>
          </p>
        </div>
        <div className='md:w-1/2 md:mr-8'>
          <Input type="text" placeholder="Full Name" name="Name" className="mb-8"/>
          <Input type="email" placeholder="Email Address" name="Email" className="mb-8"/>
          <Textbox placeholder="Start typing here" name="Message" className="h-36 mb-6"/>
          <ButtonSmall text="Send" full={true}/>
        </div>
      </div>
    </section>
  )
}

export default Contact