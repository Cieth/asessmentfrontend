import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const ProductDetail = () => {
  let { id } = useParams('1');
  const API = 'https://fakestoreapi.com/products';
  const [data, setData] = useState({});

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(API)
      .then(function (data) {
        setData(data.data[id - 1]);
      })
      .catch(function (error) {
        console.log(`"Mensaje de error: " ${error.message}`);
      })
      .finally(function () {
        setLoading(false);
      });
  }, [API]);

  return (
    <>
      <div className='Card__detail_wrapper'>
        {!loading ? (
          <div className='Card__detail-body' key={id}>
            <div className='Card__detail-image-body'>
              <img
                className='Card__detail-image'
                src={`${data.image}`}
                alt='img'
              />
            </div>
            <p className='Card__detail-title'>{data.title}</p>
            <p className='Card__detail-description'>{data.description}</p>
            <p className='Card__detail-price'>${data.price}</p>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default ProductDetail;
