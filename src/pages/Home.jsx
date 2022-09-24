import axios from 'axios';
import { useEffect, useState } from 'react';
import React from 'react';
import Card from '../components/Card';
import loader from '../styles/icons/Spinner-1s-200px.gif';
export const Home = () => {
  const API = 'https://fakestoreapi.com/products';
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(API)
      .then(function (data) {
        setData(data.data);
      })
      .catch(function (error) {
        console.log(`"Mensaje de error: " ${error.message}`);
      })
      .finally(function () {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div className='App'>
        <div></div>
        {!loading ? (
          data.map((data) => {
            return (
              <>
                <Card
                  key={data.id}
                  title={data.title}
                  image={data.image}
                  id={data.id}
                />
              </>
            );
          })
        ) : (
          <>
            <img className='Loading' src={loader} alt='' />
          </>
        )}
      </div>
    </>
  );
};
export default Home;
