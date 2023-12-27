import React from 'react';

import Logo from '../assets/logo.svg';

const Header = () => {
  return <div className=' py-8' >
    <div className='container mx-auto'>
      <div className='flex justify-between item-center'>
        {/* logo */}
        {/* <a href='#'>
          <img src={Logo} alt=''/>
        </a> */}
        <h2 className='text-4xl font-bold text-slate-500 border-b border-slate-200 '>Danish</h2>

        <button className='btn btn-sm'><a href='#contact'>Work With Me</a></button>

      </div>

    </div>

  </div>;
};

export default Header;
