import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-end text-xl font-bold'>
      <input type='button' value='Projects' />
      <input
        type='button'
        value='Resume'
        className='m-10 ml-28 mr-72 bg-yellow-500 text-gray-950 p-3 rounded-md'
      />
    </div>
  );
}

export default Navbar