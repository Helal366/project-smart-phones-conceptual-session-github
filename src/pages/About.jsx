import React from 'react';
import Button from '../components/Button';
import AboutEachPart from '../components/AboutEachPart';

const About = () => {
  const data=[
    {
      title: 'The doctor said',
      description: "Baseball ipsum dolor sit amet cellar rubber win hack tossed. Slugging catcher slide bench league, left fielder nubber."
    },
    {
      title: 'That is the true',
      description: "We meet at one of those defining moments - a moment when our nation is at war, our economy is in turmoil, and the American promise has been threatened once more."
    },
    {
      title: 'Those options',
      description: "Strategic high-level 30,000 ft view. Drill down re-inventing the wheel at the end of the day but curate imagineer, or to be inspired is to become creative."
    },
    {
      title: 'Swearem ipsum',
      description: "Aliquam scelerisque accumsan nisl, a mattis eros vestibulum et. Vestibulum placerat purus ut nibh aliquam fringilla. Aenean et tortor diam, id tempor elit."
    },
    {
      title: 'Webtwo ipsum',
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem  accusantium doloremque rem aperiam, eaque ipsa quae. Sed ut perspiciatis unde omnis."
    },
    {
      title: 'Lookout flogging',
      description: "Flatland! Hypatia. Galaxies Orion's sword globular star cluster? Light years quasar as a patch of light gathered by gravity Vangelis radio telescope."
    }
  ]
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      
      <div className="grid gap-5 mb-8 md:grid-cols-2 lg:grid-cols-3">
        
        {
          data.map((item,i)=><AboutEachPart key={i} item={item}></AboutEachPart>)
        }
       
        
        
       


      </div>
      <div className="text-center">
        <Button label='Learn more'></Button>
      </div>
    </div>
    );
};

export default About;