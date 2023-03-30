import React, { Fragment,useState } from 'react'
import '../../assets/css/checkbox.css'
import axios from 'axios';



export default function EditorRegistrationPart2() {
  const formData = JSON.parse(localStorage.getItem('formData'));



  if (!formData) {
    return <div>Loading..</div>;
  }

  const [data, setData] = useState({
    Fname: formData.Fname,
    username: formData.username,
    email: formData.email,
    phone: formData.phone,
    password: formData.password,
    gender: formData.gender,
    hobbies: [],
    image : "",
  });
  const handleInputChange = (event) => {
    const { name, checked } = event.target;
    if (checked) {
      setData({ ...data, hobbies: [...data.hobbies, name] });
    } else {
      setData({ ...data, hobbies: data.hobbies.filter((hobby) => hobby !== name) });
    }
  };
  console.log(data);
  const Axios = axios.create({
    baseURL: 'http://localhost:3000/'
});
const hobbiesString = JSON.stringify(data.hobbies);

  const register = () => {
Axios.post("http://localhost:3000/register",{
  Fname:data.Fname,
  username:data.username,
  email:data.email,
  phone:data.phone,
  password:data.password,
  gender:data.gender,
  hobbies: hobbiesString,
  image:data.image,
}).then((response)=>{
  console.log(response);
  if (response.data.message === "User registered successfully") {
    window.location.href = "/";
  } else {
    setErrorMessage("Error registering user");
  }
})
.catch((error) => {
  console.log(error);
  setErrorMessage("An error occurred while registering user");
});



}
  return (
    <Fragment>
      <div className="reg">
    <div className="container1">
   <div className="title">Registration 2/2</div>
   <div className="content">
       <div className="user-details">
        <div className='sort'>
            <div className='sort1'>
       <label className="checkbox">
       <input type="checkbox" name="Beauty" onChange={handleInputChange}/>
      <span className="checkmark"></span>
      <span className="label-text">Beauty</span>
    </label>
    <label className="checkbox">
       <input type="checkbox" name="Gaming" onChange={handleInputChange} />
      <span className="checkmark"></span>
      <span className="label-text">Gaming</span>
    </label>
    <label className="checkbox">
       <input type="checkbox" name="High-tech" onChange={handleInputChange}/>
      <span className="checkmark"></span>
      <span className="label-text">High-tech</span>
    </label>
    <label className="checkbox">
       <input type="checkbox" name="App mobiles" onChange={handleInputChange}/>
      <span className="checkmark"></span>
      <span className="label-text">App mobiles</span>
    </label>
    <label className="checkbox">
       <input type="checkbox" name="Lifestyle" onChange={handleInputChange}/>
      <span className="checkmark"></span>
      <span className="label-text">Lifestyle</span>
    </label>
    </div>
    <div className='sort2'><label className="checkbox">
       <input type="checkbox" name="Parents-Kids" onChange={handleInputChange}/>
      <span className="checkmark"></span>
      <span className="label-text">Parents / Kids</span>
    </label>
    <label className="checkbox">
       <input type="checkbox" name="Travel" onChange={handleInputChange}/>
      <span className="checkmark"></span>
      <span className="label-text">Travel</span>
    </label>
    <label className="checkbox">
       <input type="checkbox" name="Food" onChange={handleInputChange}/>
      <span className="checkmark"></span>
      <span className="label-text">Food</span>
    </label>
    <label className="checkbox">
       <input type="checkbox" name="Animals" onChange={handleInputChange}/>
      <span className="checkmark"></span>
      <span className="label-text">Animals</span>
    </label>
    <label className="checkbox">
       <input type="checkbox" name="Humour" onChange={handleInputChange}/>
      <span className="checkmark"></span>
      <span className="label-text">Humour</span>
    </label>
    </div>
    </div>
       </div>
       <div className="button">
       <button onClick={register} className='Loginbutton'>register</button>
       </div>
   </div>
 </div>
 </div></Fragment>
  )
}
