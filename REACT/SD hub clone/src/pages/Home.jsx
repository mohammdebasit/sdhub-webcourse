import React from 'react'
import Homec1 from './Homec1'


const Home = () => {
  return (
    <section className=" flex flex-col mt-20 gap-24">
      <section className="flex items-center m-[10vh] mx-[10vw] ">
        <section className="flex flex-col gap-5 p-5">
          <section className="leading-20">
            <p className="text-6xl font-semibold text-[#343F5A]">Empowering Individuals</p>
            <p className="text-[65px] font-bold text-[#3D73FF]">To Build Careers</p>
          </section>
          <p className="text-[17px] font-medium text-[#777777] w-lg">Our ultimate goal is to equip individuals not only in core domain skills but also softskills and language training to thrive in the competitive job market.</p>
          <button className="w-48 rounded-sm bg-[#4f81ff] p-3 text-white">Contact us</button>
        </section>
        <img src="images/img.jpg" className="w-2/5" />
      </section>

      <section className="mx-52 flex items-center gap-48">
        <section className="flex flex-col gap-8">
          <p className="text-[40px] leading-12 font-medium text-[#343F5A]">Delivering Job oriented Training Programs</p>
          <p className="text-[17px] font-normal text-[#777777]">At SD Hub, we offer a wide range of job-oriented training programs. Whether you are interested in coding, software development, digital marketing, Web Development, etc.. we have a program that suits your profile and interest</p>
        </section>
        <img src="https://sdhub.in/wp-content/uploads/2024/05/3.jpg" />
      </section>

      <section className="flex p-16 bg-[#f7fafc] my-8">
        <section className="w-6xl leading-12 mr-3">
          <p className="font-medium text-[#4F80FF]">WHAT WE DO</p>
          <p className="text-[40px] font-medium text-[#343F5A]">Training Solutions Tailored to Industry</p>

          <p className="my-5 text-2xl font-medium text-[#777777]">If you are confused about career choices, our career guidance counselor will make it easy for you to understand and take informed decisions.</p>
          <p className="my-5 text-2xl font-medium text-[#777777]">Our courses are designed to be comprehensive, practical, and hands-on, ensuring that our participants graduate with the skills and confidence to excel in their chosen field.</p>
        </section>

        <section className="flex flex-wrap">
          <Homec1
            img={'https://sdhub.in/wp-content/uploads/2023/04/pic-10.png'}
            head={'Job Oriented Training'}
            txt={'Elevate your career prospects with our comprehensive, industry-focused training programs at SD HUB, designed to equip you with the skills demanded by employers.'} />

          <Homec1
            img={'https://sdhub.in/wp-content/uploads/2024/05/4.png'}
            head={'Career Counselling'}
            txt={'Navigate your career path confidently with personalized guidance from our experienced career counselors, ensuring informed decisions and successful outcomes.'} />

          <Homec1
            img={'https://sdhub.in/wp-content/uploads/2024/05/5.png'}
            head={'Interview Clinics'}
            txt={'Sharpen your interview skills and boost your confidence with our specialized interview clinics, preparing you to ace your next job interview with ease.'} />

          <Homec1
            img={'https://sdhub.in/wp-content/uploads/2023/04/pic-13.png'}
            head={'Soft skills training'}
            txt={'Develop essential soft skills vital for professional success, such as communication, teamwork, and leadership, through our tailored training modules at SD HUB.'} />

        </section>
      </section>

      <section className="flex flex-col items-center gap-5 p-5 text-center">
        <section className="leading-13">
          <p className="text-[40px] font-medium text-[#343F5A]">Delivering Value</p>
          <p className="text-[40px] font-medium text-[#343F5A]">One candidate at a time</p>
        </section>

        <section className="flex w-full items-center justify-around">
          <div className="flex flex-col items-center justify-center">
            <p className="text-[75px] font-extralight text-[#5182FF]">400+</p>
            <p className="text-[19px] font-normal text-[#343F5A]">Students</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-[75px] font-extralight text-[#5182FF]">100%</p>
            <p className="text-[19px] font-normal text-[#343F5A]">Positive Feedback</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-[75px] font-extralight text-[#5182FF]">5+</p>
            <p className="text-[19px] font-normal text-[#343F5A]">Batches</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-[75px] font-extralight text-[#5182FF]">6+</p>
            <p className="text-[19px] font-normal text-[#343F5A]">Courses</p>
          </div>
        </section>
      </section>

    </section>
  )
}

export default Home