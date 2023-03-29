import React ,{Fragment, useState}from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import InfluencersCard from './InfluencersCard'
import '../assets/css/checkbox.css'


export default function Product() {
    const [filterValue, setFilterValue] = useState('');
    const [applyFilter, setApplyFilter] = useState(false);
  
    const handleCheckboxChange = (event) => {
      setApplyFilter(event.target.checked);
    };
    const handleFilterChange = (event) => {
        console.log(event.target.value); // Debugging
        setFilterValue(event.target.value);
      };
  
    const data = [
      { id: 1, name: 'gaming' },
      { id: 2, name: 'sport' },
      { id: 3, name: 'food' },
    ];
  
    const filteredData = data.filter((item) =>
      item.name.toLowerCase().includes(filterValue.toLowerCase())
    );
  
  return (

    <Fragment> 
           <Header/>
          
   <div className="page-heading" id="top">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="inner-content">
                    <h2>Check Our Products</h2>
                    <span>Awesome &amp; Creative HTML CSS layout by TemplateMo</span>
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
                    <h2>Our Latest Products</h2>
                    <span>Check out all of our products.</span>
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
          ? filteredData.map((item) =>  <InfluencersCard key={item.id} name={item.name}/>
         )
          : data.map((item) => <InfluencersCard key={item.id} name={item.name}/>
          )}
        </div>
    </div>

    
</section>
<Footer/>
</Fragment>
  )
}
