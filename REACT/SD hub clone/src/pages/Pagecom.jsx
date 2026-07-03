import React from 'react'

const Pagecom = ({head,txt}) => {
    return (
        <section className="flex h-[40vh] min-h-fit flex-col justify-center bg-[#ebf0ff]">
            <p className="mx-[12vw] text-[65px] font-medium text-[#343F5A]">{head}</p>
            <p className="mx-[12vw] text-base font-medium text-[#777777]">{txt}</p>
        </section>

    )
}

export default Pagecom