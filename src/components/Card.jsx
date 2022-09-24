import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Card = (prop) => {
  let random = (str) => {
    return str === 'min'
      ? Math.floor(Math.random() * 4)
      : Math.floor(Math.random() * 60);
  };
  const [mins, setMinutes] = useState(random('min'));
  const [secs, setSeconds] = useState(random('sec'));
  const [finish, setFinish] = useState(false);
  useEffect(() => {
    let sampleInterval = setInterval(() => {
      if (secs > 0) {
        setSeconds(secs - 1);
      }
      if (secs === 0) {
        if (mins === 0) {
          setFinish(true);
        } else {
          setMinutes(mins - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(sampleInterval);
    };
  });

  return (
    <div className='Card__body'>
      <div className='Card__image-body'>
        <img className='Card__image' src={`${prop.image}`} alt='img' />
      </div>
      <p className='Card__title'>{prop.title}</p>
      <div className='Card__interact'>
        <span className='Card__counter'>
          <div>
            <p>
              {' '}
              {mins}:{secs < 10 ? `0${secs}` : secs}
            </p>
          </div>
        </span>

        <Link to={`/detail/${prop.id}`}>
          {!finish ? (
            <button className='Card__button'>Go to details</button>
          ) : (
            <>
              <button className='Card__button' disabled>
                Go to details
              </button>
            </>
          )}
        </Link>
      </div>
    </div>
  );
};

export default Card;
