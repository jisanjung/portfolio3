import React from 'react';
import Heading from '../components/Heading';
import SubHeading from '../components/SubHeading';
import { HiOutlineMail } from "react-icons/hi";
import { GrLocationPin } from "react-icons/gr";
import { DARKER_TEXT_COLOR, PARAGRAPH_COLOR } from '../constants';
import ContactForm from '../components/contact/ContactForm';

const Contact = () => {
  return (
    <section>
      <Heading text="Get in touch"/>
      <SubHeading text="Let's talk." className="my-6"/>
      <div className='flex flex-col md:flex-row-reverse mt-10 md:mt-16'>
        <div className='md:w-1/2 mb-8 md:mb-0 md:ml-8'>
          <p className='flex items-center mb-2'>
            <HiOutlineMail className='text-2xl mr-3' style={{
              color: DARKER_TEXT_COLOR,
            }}/>
            <span className='md:text-lg' style={{
              color: PARAGRAPH_COLOR,
            }}>jjjung13@gmail.com</span>
          </p>
          <p className='flex items-center'>
            <GrLocationPin className='text-2xl mr-3' style={{
              color: DARKER_TEXT_COLOR,
            }}/>
            <span className='md:text-lg' style={{
              color: PARAGRAPH_COLOR,
            }}>Austin, TX</span>
          </p>
        </div>
        <div className='md:w-1/2 md:mr-8'>
          <ContactForm/>
        </div>
      </div>
    </section>
  )
}

export default Contact