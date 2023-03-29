import React ,{  Fragment,useState, useEffect } from 'react'
import MenIntro from './MenIntro'
import Men_card from './Men_card'
import axios from 'axios';

export default function Men() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/data',{ mode: 'cors' }         );
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Fragment>
       <section className="section" id="men">
        <MenIntro/>
        <section className="section" id="products">
    <div className="container">
        <div className="row">
          {data.map((e)=> (
            <Men_card  key ={e.id} name={e.name} price={e.price} img={e.img}/>
          ))}
            </div>
            </div>

            </section>
</section></Fragment>
  )
}
