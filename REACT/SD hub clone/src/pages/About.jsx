import React from 'react'
import Pagecom from './Pagecom'
import Aboutcom from './Aboutcom'

const About = () => {
  return (
    <section className='flex flex-col gap-8' >
      <Pagecom
        head={'About Us'}
        txt={'Home – About us'} />


      <section className="mx-[10vw] flex justify-around items-center my-10">

        <img src="https://sdhub.in/wp-content/uploads/2023/04/pic-22.jpg" className="w-md" />

        <section className="flex flex-col gap-4 text-[17px] font-normal text-[#777777] w-xl">
          <p className="text-[40px] font-medium text-[#343F5A]">Dedicated to Your Success</p>

          <p className="">Welcome to Skills Development Hub, your premier destination for free job-oriented technology training programs. At Skills Development Hub, we are dedicated to empowering individuals with the skills and knowledge they need to succeed in today’s fast-paced and technology-driven world.</p>
          <p className="">Managed by Professionals Solidarity Forum (PSF) and supported by Helping Hand Foundation (HHF), we strive to make quality education accessible to all. Our skills development centre is committed to provide high-quality, hands-on training in various technology-related fields + softskills and language skills, helping learners acquire the skills necessary to secure employment and thrive in their careers.</p>
          <p className="">With a team of experienced instructors and a curriculum designed to meet industry standards, Skills Development Hub offers a dynamic learning environment where students can develop their talents and unleash their full potential. Whether you’re a beginner looking to kickstart your career in tech or a seasoned professional seeking to upgrade your skills, we have programs tailored to suit your needs.</p>
        </section>


      </section>

      <Aboutcom
        img={'https://sdhub.in/wp-content/uploads/2024/06/PSF_LongLogo_Version-H.png'}
        subhead={'MANAGED BY'}
        head={'PSF – Professionals Solidarity Foundation'}
        txt={'PSF’s vision is to empower professionals to use their skills, time, and creativity to bring a positive change in self and society. Committed to addressing the needs of seasoned professionals and fresh graduates alike, PSF offers top-tier, industry-specific training and comprehensive job and career guidance. Our mission is to support professionals in achieving excellence not only in their careers but also in their personal well-being, fostering a community where growth and positive impact are paramount.'} />


      <Aboutcom
      img={'https://sdhub.in/wp-content/uploads/2024/06/Seed_Logo3.png'}
      subhead={'SPONSORED BY'}
      head={'SEED-Support for Education and Economic Development'}
      txt={'SEED-Support for Education and Economic Development; is a USA based Charity Organization formed solely to help improve the quality of life for the under-privileged in India by providing the best Educational and Economical opportunities. Elevate the quality of their lives by providing optimum Medical Care, Quality Education & Hands-on Technical Skills trainings, and providing other prospects to improve the literacy status.'}/>


      <Aboutcom
      img={'https://sdhub.in/wp-content/uploads/2024/06/01.png'}
      subhead={'SUPPORTED BY'}
      head={'Helping Hand Foundation'}
      txt={'About HHF (Helping Hand Foundation):Helping Hand Foundation is one of few organizations that’s working tirelessly with weaker sections, in bridging health inequity through its various programs and interventions. It was launched by a likeminded team of Hyderabad-based IT professionals with the aim and intent of to facilitate accessible and affordable healthcare to the disadvantaged sections of the society.'}/>
    </section>


  )
}

export default About