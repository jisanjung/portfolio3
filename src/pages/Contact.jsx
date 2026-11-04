import React from 'react';
import Heading from '../components/Heading';
import { HiOutlineMail } from "react-icons/hi";
import { FiMapPin } from "react-icons/fi";
import { DARKER_TEXT_COLOR, MY_EMAIL, PARAGRAPH_COLOR } from '../constants';
import ContactForm from '../components/contact/ContactForm';
import SocialLinks from '../components/SocialLinks';
import CopyButton from '../components/CopyButton';

const Contact = () => {
  return (
    <section className='mb-16'>
      <Heading text="Get in touch"/>
      <p className='my-6 md:w-3/4 text-base lg:text-xl 2xl:text-2xl leading-relaxed' style={{ color: PARAGRAPH_COLOR }}>
        Let&apos;s talk. Whether it&apos;s a project, a role, or just to say hi, my inbox is open.
      </p>
      <div className='flex flex-col md:flex-row gap-10 md:gap-12 mt-10 md:mt-14'>
        <div className='md:w-3/5 bg-white rounded-xl border-2 p-5 lg:p-7 shadow-[-6px_6px_0_0_#17191c]' style={{
          borderColor: DARKER_TEXT_COLOR,
        }}>
          <ContactForm/>
        </div>
        <div className='md:w-2/5 md:pt-2'>
          <h3 className='text-xs font-semibold uppercase tracking-wider text-purple-600 mb-4'>Other ways to reach me</h3>
          <ul className='space-y-3 mb-6'>
            <li className='flex items-center gap-3 md:text-lg' style={{ color: PARAGRAPH_COLOR }}>
              <HiOutlineMail className='text-xl shrink-0' style={{ color: DARKER_TEXT_COLOR }}/>
              <span className='break-all'>{MY_EMAIL}</span>
              <CopyButton value={MY_EMAIL} label="email address"/>
            </li>
            <li className='flex items-center gap-3 md:text-lg' style={{ color: PARAGRAPH_COLOR }}>
              <FiMapPin className='text-xl shrink-0' style={{ color: DARKER_TEXT_COLOR }}/>
              <span>Austin, TX</span>
            </li>
          </ul>
          <SocialLinks/>
        </div>
      </div>
    </section>
  )
}

export default Contact
