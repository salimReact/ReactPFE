import React ,{Fragment, useState , useEffect}from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import EditorsCard from './EditorsCard'
import '../../assets/css/checkbox.css'
import {useLocation,useNavigate } from 'react-router-dom';


export default function CampEditors() {
    const contract = 'true';
  
    const location = useLocation();
    const editors = location.state.data
    console.log(editors)
    
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
                    <h2>Editors that want to work with You</h2>
                    <span>Check them out</span>

                    
                </div>
            </div>
        </div>
    </div>
   
    <div className="container">
        <div className="row">
        {
           editors.map((item) => <EditorsCard key={item.id} Edata={item} contract={contract}/>
          )}
        </div>
    </div>

    
</section>
<Footer/>
</Fragment>
  )
}
