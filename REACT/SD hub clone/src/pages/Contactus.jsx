import React from 'react'
import Pagecom from './Pagecom'

const Contactus = () => {
    return (
        <section className="">
            <Pagecom
                head={'Contact Us'}
                txt={'Home – Contact us'} />


            <section className="mx-[10vw] flex justify-around p-5 my-22">
                <section className="flex flex-col gap-3 text-[15px] font-medium text-[#777777]">
                    <p className="text-[18px] text-[#4F80FF]">Contact Us</p>
                    <p className="text-[40px] text-[#343F5A]">Get in Touch with us</p>
                    <p className="">+91 955-012-5050</p>
                    <p className="">info@sdhub.in</p>
                    <p className="">Mehdipatnam, Hyderabad</p>
                </section>

                <section className="">
                    <form action="" className="flex flex-col gap-3">
                        <section className="flex flex-col text-[#7A7A7A]">
                            <label for="">Full Name</label>
                            <input type="text" className="w-xl rounded-sm border p-3" />
                        </section>
                        <section className="flex flex-col text-[#7A7A7A]">
                            <label for="">Email</label>
                            <input type="email" className="w-xl rounded-sm border p-3" />
                        </section>
                        <section className="flex flex-col text-[#7A7A7A]">
                            <label for="">Phone number</label>
                            <input type="text" className="w-xl rounded-sm border p-3" />
                        </section>
                        <section className="flex flex-col text-[#7A7A7A]">
                            <label for="lb">Full Name</label>
                            <textarea name="" id="lb" cols="76" rows="16" className="resize-none rounded-sm border"></textarea>
                        </section>
                        <button className="w-fit rounded-sm border p-3 ease-in-out hover:bg-[#5037B2] hover:text-white">Submit</button>
                    </form>
                </section>
            </section>

        </section>
    )
}

export default Contactus