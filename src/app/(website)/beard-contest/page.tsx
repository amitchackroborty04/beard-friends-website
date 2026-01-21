import React from 'react'
import Beard_About from './_components/Beard_About'
import TopContestants from './_components/Top_Contestant'
import ContactUs from '../components/ContactUs'
import Download from '../components/Download'
import ContestVotingApp from './_components/Contest_end'

const page = () => {
  return (
    <div className='bg-[#1C1C1E]'>
       <Beard_About />
       <TopContestants/>
       <ContestVotingApp/>
        <Download/>
      <ContactUs/>
    </div>
  )
}

export default page
