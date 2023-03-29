import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Index from './pages/Index'
import Influencers from './pages/Influencers'
import Profile from './pages/Profile'
import Login from './pages/login/Login'
import ForgetPassword from './pages/login/ForgetPassword'
import AnnoncerRegistrationPart1 from './pages/login/AnnoncerRegistrationPart1'
import AnnoncerRegistrationPart2 from './pages/login/AnnoncerRegistrationPart2'
import EditorRegistrationpart1 from './pages/login/EditorRegistrationPart1'
import EditorRegistrationpart2 from './pages/login/EditorRegistrationPart2'
import RegistrationChoice from './pages/login/RegistrationChoice'



function App() {

  return (
    <Routes>
      <Route  path="/" element={<Index/>}/>
      <Route  path="/about" element={<About/>}/>
      <Route  path="/contact" element={<Contact/>}/>
      <Route  path="/profile" element={<Profile/>}/>
      <Route  path="/influencers" element={<Influencers/>}/>
      <Route  path="/login" element={<Login/>}/>
      <Route  path="/ForgetPassword" element={<ForgetPassword/>}/>
      <Route  path="/AnnoncerRegistrationPart1" element={<AnnoncerRegistrationPart1/>}/>
      <Route  path="/AnnoncerRegistrationPart2" element={<AnnoncerRegistrationPart2/>}/>
      <Route  path="/EditorRegistrationpart1" element={<EditorRegistrationpart1/>}/>
      <Route  path="/EditorRegistrationpart2" element={<EditorRegistrationpart2/>}/>
      <Route  path="/registrationChoice" element={<RegistrationChoice/>}/>

      
    </Routes>
    
    )
  }

export default App
