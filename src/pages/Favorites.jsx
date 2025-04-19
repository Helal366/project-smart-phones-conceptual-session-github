import React, { useEffect, useState } from 'react';
import PhoneCard from '../components/PhoneCard';
import { getFavotitesFromLocalStorage, removeFavFromLS } from '../utilities/localStorage';
import Empty from './Empty';

const Favorites = () => {
    const [displayPhones, setDisplayPhones]=useState([]);
    useEffect(()=>{
        const favListFromLS=getFavotitesFromLocalStorage();
        setDisplayPhones(favListFromLS)
    },[]);
    const handleDelete=(id)=>{
        removeFavFromLS(id);
        setDisplayPhones(getFavotitesFromLocalStorage())
    };
    if(displayPhones.length<1){
        return <Empty label='No data found'></Empty>
    }
    return (
        <>
            <div className='pt-12 '>
            <div className='grid grid-cols-1 md:grid-cols-2 
            lg:grid-cols-3 gap-8 -mb-8'>
                
                 {
                    displayPhones.map(phone=><PhoneCard 
                        key={phone.id} phone={phone} deletable={true} 
                        handleDelete={handleDelete}>
                        </PhoneCard>)
                 }   

            </div>
        </div>
        </>
    );
};

export default Favorites;