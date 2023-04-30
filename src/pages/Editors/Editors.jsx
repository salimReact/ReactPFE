import React ,{Fragment, useState , useEffect}from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import EditorsCard from './EditorsCard'
import '../../assets/css/checkbox.css'
import axios from 'axios'


export default function Editors() {
  const queryParams = new URLSearchParams(window.location.search);
  const campaignId = queryParams.get('campaignId');
  console.log(campaignId)

    const [filterValue, setFilterValue] = useState('');
    const [applyFilter, setApplyFilter] = useState(false);
  
    const handleCheckboxChange = (event) => {
      setApplyFilter(event.target.checked);
    };
    const handleFilterChange = (event) => {
        console.log(event.target.value); 
        setFilterValue(event.target.value);
      };
  
      
      const [data, setData] = useState([]);
      const [newData, setNewData] = useState([]);
      
      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('http://localhost:3000/data', { mode: 'cors' });
            setData(response.data);
          } catch (error) {
            console.log(error);
          }
        };
        fetchData();
      }, []);
      
      useEffect(() => {
        const filtered = data.filter((item) => item.role == "1");
        setNewData(filtered);
      }, [data])
      console.log(data);


      
      const filteredData = newData.filter((item) =>
      item.community_type.toLowerCase().includes(filterValue.toLowerCase())
    );
  
  return (

    <Fragment> 
           <Header/>
          
   <div className="page-heading" id="top">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="inner-content">
                    <h2>Check Our Editors</h2>
                    <span>Editors</span>
                </div>
            </div>
        </div>
    </div>
</div>


<section className="section" id="products">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="section-heading">
                    <h2>Our Latest Editors</h2>
                    <span>Check out all of our Editors.</span>
                    <label className="checkbox">
                        <input type="checkbox" checked={applyFilter}  onChange={handleCheckboxChange}/>
                        <span className="checkmark">
                        </span>
                        <span className="label-text">Apply filter</span>
                        <input className="inftext" type="text" value={filterValue} onChange={handleFilterChange} placeholder="You can filter our influencers as you like !"/>

                        </label>
                    
                </div>
            </div>
        </div>
    </div>
   
    <div className="container">
        <div className="row">
        {applyFilter
          ? filteredData.map((item) =>  <EditorsCard key={item.id} Edata={item} campaignId={campaignId}/>
         )
          : newData.map((item) => <EditorsCard key={item.id} Edata={item} campaignId={campaignId}/>
          )}
        </div>
    </div>

    
</section>
<Footer/>
</Fragment>
  )
}
