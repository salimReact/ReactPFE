import React ,{  Fragment,useState, useEffect } from 'react'
import Womencard from './Womencard'
import WomenIntro from './WomenIntro'
import axios from 'axios';

export default function Women() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/data', { mode: 'cors' });
        const filteredData = response.data.filter(item => item.gender == 'female' && item.role == 1);
        setData(filteredData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <Fragment>
       <section className="section" id="men">
        <WomenIntro/>
        <section className="section" id="products">
    <div className="container">
        <div className="row">
          {data.slice(0, 3).map((e)=> (
            <Womencard  key ={e.id} id={e.id }name={e.full_name} community_type={JSON.parse(e.community_type).join(' ')} img={e.image}/>
          ))}
            </div>
            </div>

            </section>
</section></Fragment>
  )
}