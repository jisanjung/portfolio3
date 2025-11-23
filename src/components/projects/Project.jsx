import React from 'react'
import Item from '../Item';
import ItemHeading from '../ItemHeading';
import Paragraph from '../Paragraph';
import ButtonSmall from '../ButtonSmall';
import AnchorLink from '../AnchorLink';

const Project = ({ imgSrc, title, about, liveURL, codeURL }) => {
  return (
    <Item className="flex items-center flex-col md:flex-row mb-4 pb-6 md:p-6 md:mb-6">
        <a href={liveURL} className='block w-full md:w-1/3' target='_blank' rel="noopener noreferrer">
          <img src={imgSrc} alt={title} className='w-full h-52 object-cover rounded-lg mb-4 md:m-0'/>
        </a>
        <div className='md:w-2/3 md:ml-10'>
            <ItemHeading text={title} className='text-lg md:text-xl lg:text-2xl'/>
            <Paragraph text={about} className="my-2 xl:text-lg"/>
            <div className='mt-4 flex items-center'>
              <a href={liveURL} target='_blank' rel="noopener noreferrer">
                <ButtonSmall text="See Live"/>
              </a>
              <span className='mx-2'>or</span>
              <AnchorLink href={codeURL} text="view code"/>
            </div>
        </div>
    </Item>
  )
}

export default Project