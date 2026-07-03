import React from 'react'
import Pagecom from './Pagecom'

const Courses = () => {
  return (
    <section className="flex flex-col gap-30">
      <Pagecom
        head={'Courses'}
        txt={'Home – Courses'} />


      <section class="flex justify-center gap-10 mb-14">
        <img src="https://sdhub.in/wp-content/uploads/2024/06/2.jpg" class="w-lg" />
        <section class="flex flex-col">
          <p class="my-5 text-[40px] font-medium text-[#343F5A]">List of Courses at SD HUB</p>
          <section class="text-[17px] font-normal text-[#777777]">
            <p>• Digital Marketing + Graphic Designing</p>
            <p>• Data Analytics</p>
            <p>• Tally ERP</p>
            <p>• Office Administration</p>
            <p>• Web Designing</p>
          </section>
          <a href="#" class="m-4 text-[17px] font-bold text-[#5182FF] hover:text-[#6051ff]">Register Here</a>
        </section>
      </section>
    </section>
  )
}

export default Courses