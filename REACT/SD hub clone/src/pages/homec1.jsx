import React from 'react'

const Homec1 = ({ img, head, txt }) => {
    return (
        <section className="flex w-sm flex-col gap-3.5 p-2 py-8">
            <img src={img} className="w-14" />
            <p className="text-2xl font-semibold text-[#343F5A]">{head}</p>
            <p className="text-[16px] font-normal text-[#777777]">{txt}</p>
        </section>
    )
}

export default Homec1