import React from 'react';
import { Link } from 'react-router';
import Button from '../components/Button'

const Empty = ({label}) => {
    return (
        <>
          <div className='py-24 text-center'>
            <h1 className='text-4xl lg:text-5xl xl:text-7xl'>{label}</h1>
            <p className='mt-5 mb-8 text-xl md:text-2xl text-gray-900'>
                Browse, Search Phones, Add to cart, Add to favorites
            </p>
            <Link to='/'>
            <Button label='Browse Phones'></Button>
            </Link>
            
            </div>  
        </>
    );
};

export default Empty;