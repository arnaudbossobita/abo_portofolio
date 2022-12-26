import React, {useState, useEffect} from 'react';
import {HiChevronLeft, HiChevronRight} from 'react-icons/hi';
import {motion} from 'framer-motion';

import {AppWrap, MotionWrap} from '../../wrapper';
import {urlFor, client} from '../../client';
import './Testimonials.scss';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([]);
  const [brands, setBrands] = useState([]);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const testimonialsQuery = '*[_type == "testimonials"] | order(name asc)';
    const brandsQuery = '*[_type == "brands"] | order(name asc)';

    client.fetch(testimonialsQuery).then((data) => {
      setTestimonials(data);
    });

    client.fetch(brandsQuery).then((data) => {
      setBrands(data);
    });
  }, []);

  const currentTestimonial = testimonials[currentIndex]
  return (
    <>
      <h2 className='head-text'>Testimonials</h2>

      {(testimonials.length > 0) && (
        <>
          <div className="app__testimonials-item app__flex">
            <img src={urlFor(testimonials[currentIndex]?.imgurl)} alt={testimonials[currentIndex]?.name} />
            <div className="app__testimonials-content">
              <p className="p-text">{testimonials[currentIndex]?.feedback}</p>
              <div>
                <h4 className="bold-text">{testimonials[currentIndex]?.name}</h4>
                <h5 className="p-text">{testimonials[currentIndex]?.company}</h5>
              </div>
            </div>
          </div>

          <div className="app__testimonials-btns app__flex">
            <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
              <HiChevronLeft />
            </div>

            <div className="app__flex" onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

      <div className="app__testimonials-brands app__flex">
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'tween' }}
            key={brand._id}
          >
            <img src={urlFor(brand.imgUrl)} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonials, 'app__testimonials'),
  'testimonials',
  'app__primarybg',
)