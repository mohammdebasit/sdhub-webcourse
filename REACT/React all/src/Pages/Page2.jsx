import React from 'react'
import usecounter from '../globel vars/countvar'

const Page2 = () => {
    const count=usecounter((state) => state.counter)
  return (
    <div>{count}</div>
  )
}

export default Page2