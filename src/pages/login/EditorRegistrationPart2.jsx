import React, { Fragment,useState } from 'react'
import '../../assets/css/checkbox.css'
import axios from 'axios';



export default function EditorRegistrationPart2() {
  const formData = JSON.parse(localStorage.getItem('formData'));



  if (!formData) {
    return <div>Loading...</div>;
  }
  const [image, setImage] = useState(null);
  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };
  const [data, setData] = useState({
    Fname: formData.Fname,
    username: formData.username,
    email: formData.email,
    phone: formData.phone,
    password: formData.password,
    gender: formData.gender,
    role: "1",
    community_type: [],
  })

  const handleInputChange = (event) => {
    const { name, checked } = event.target;
    if (checked) {
      setData({ ...data, community_type: [...data.community_type, name] });
    } else {
      setData({ ...data, community_type: data.community_type.filter((hobby) => hobby !== name) });
    }
  };
  const Axios = axios.create({
    baseURL: 'http://localhost:3000/'
});
const community_typeString = JSON.stringify(data.community_type);

const register = () => {
  const formData = new FormData();
  formData.append("Fname", data.Fname);
  formData.append("username", data.username);
  formData.append("email", data.email);
  formData.append("phone", data.phone);
  formData.append("password", data.password);
  formData.append("gender", data.gender);
  formData.append("role", data.role);
  formData.append("community_type", community_typeString);
  formData.append("image", image);

  
  Axios.post("http://localhost:3000/register", formData)
    .then((response) => {
      console.log(response);
      if (response.status == 200) {
        window.location.href = "/login";
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
      <form encType="multipart/form-data" method='POST'  onSubmit={register}>
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
    <div className='upload'> 
    <input type="file" name="image" onChange={handleImageChange} />
</div>
    </div>
       </div>
       <div className="button">
       <button type='submit' className='Loginbutton'>register</button>
       </div>
   </div>
 </div>
 </form>

 </div></Fragment>
  )
}
