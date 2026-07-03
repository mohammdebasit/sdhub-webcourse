import React from 'react'

const Aboutcom = ({img ,subhead,head,txt}) => {
    return (
        <>
            <section class="mx-[10vw] flex items-center justify-around">
                <img src={img} class="w-xs" />

                <section class="flex w-xl flex-col gap-3 text-[17px] font-normal text-[#777777]">
                    <p class="">{subhead}</p>
                    <p class="text-[28px] font-medium">{head}</p>
                    <p class="">{txt}</p>
                </section>
            </section>


        </>
    )
}

export default Aboutcom