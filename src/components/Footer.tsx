import React from 'react'
import GetInTouch from './footerComponents/GetInTouch'
import FooterDetails from './footerComponents/FooterDetails'
import PrivacyPolicy from './footerComponents/PrivacyPolicy'

function Footer() {
  return (
    <div className="bg-red-400 pt-4 relative h-1/2">
      <GetInTouch/>
      <FooterDetails/>
      <PrivacyPolicy/>

    </div>
  )
}

export default Footer