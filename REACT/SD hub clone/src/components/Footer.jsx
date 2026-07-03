import React from 'react'

const Footer = () => {
  return (
    <footer className="flex h-[60vh] min-h-fit flex-col items-center justify-center gap-8 bg-[#3b4661] text-[#D5D5D5] mt-16">
      <section className="flex w-full gap-8 pl-[16vw]">
        <section className="flex flex-col gap-5">
          <img src="https://sdhub.in/wp-content/uploads/2023/04/sd-hub-white.png" className="w-35" />

          <div className="">
            <p className="text-[17px] font-normal">We believe that access to quality education should not be limited by</p>
            <p className="text-[17px] font-normal">financial constraints, and we strive to level the playing field for all.</p>
          </div>

          <div className="flex gap-2">
            <a href="#" className="hover:text-white">@instagram</a>
            <a href="#" className="hover:text-white">@FaceBook</a>
            <a href="#" className="hover:text-white">@LinkedIn</a>
          </div>
        </section>

        <section className="flex flex-col gap-1">
          <p className="text-[17px] font-medium text-white">Quick Links</p>
          <a href="">Home</a>
          <a href="">About Us</a>
          <a href="">Courses</a>
        </section>
      </section>

      <hr className="w-[70vw] border border-[#D5D5D5]" />

      <p className="text-center">© Managed by Professionals Solidarity Forum. Sponsored by Support for Educational & Economic Development & Helping Hands Foundation.</p>
    </footer>

  )
}

export default Footer