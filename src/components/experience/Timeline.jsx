import React from 'react'
import Marker from './Marker'
import Line from './Line'
import { ISLAND_NETWORKS_LOGO, MC3_LOGO, PAYPAL_LOGO } from '../../constants'

const Timeline = () => {
  return (
    <div>
      <Marker text="Software Engineer Intern @ PayPal" subText="May 2021 - Present" imgUrl={PAYPAL_LOGO}/>
      <Line/>
      <Marker text="IT Consultant @ Island Networks" subText="Feb 2020 - Dec 2022" imgUrl={ISLAND_NETWORKS_LOGO}/>
      <Line/>
      <Marker text="IT Help Desk @ MC3" subText="Feb 2020 - Dec 2022" imgUrl={MC3_LOGO}/>
    </div>
  )
}

export default Timeline