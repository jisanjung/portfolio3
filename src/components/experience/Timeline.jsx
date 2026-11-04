import React from 'react'
import Marker from './Marker'
import Line from './Line'
import islandNetworksLogo from '../../assets/island_networks_logo.jpeg';
import mc3Logo from '../../assets/mc3_logo.jpg';
import paypalLogo from '../../assets/paypal_logo.png';

const Timeline = ({ className }) => {
  return (
    <div className={`${className}`}>
      <Marker text="Software Engineer @ PayPal" subText="Feb 2024 - Present" imgUrl={paypalLogo}/>
      <Line inSameCompany={true}/>
      <Marker text="Software Engineer Intern @ PayPal" subText="May 2021 - August 2023" imgUrl={paypalLogo}/>
      <Line/>
      <Marker text="IT Consultant @ Island Networks" subText="Feb 2020 - Dec 2022" imgUrl={islandNetworksLogo}/>
      <Line/>
      <Marker text="IT Help Desk @ MC3" subText="May 2019 - Feb 2020" imgUrl={mc3Logo}/>
    </div>
  )
}

export default Timeline