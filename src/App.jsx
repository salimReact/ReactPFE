import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Index from './pages/Index'
import Editors from './pages/Editors/Editors'
import CampEditors from './pages/Editors/CampEditors'
import Editor from './pages/Editors/Editor'
import Profile from './pages/Profile'
import Login from './pages/login/Login'
import Contract from './pages/Contracts/Contract'
import YourContract from './pages/Contracts/YourContract'
import ForgetPassword from './pages/login/ForgetPassword'
import AnnoncerRegistrationPart1 from './pages/login/AnnoncerRegistrationPart1'
import AnnoncerRegistrationPart2 from './pages/login/AnnoncerRegistrationPart2'
import EditorRegistrationpart1 from './pages/login/EditorRegistrationPart1'
import EditorRegistrationpart2 from './pages/login/EditorRegistrationPart2'
import RegistrationChoice from './pages/login/RegistrationChoice'
import CreateCampaign from './pages/Campaign/CreateCampaign'
import CampaignListAnnoncer from './pages/Campaign/CampaignListAnnoncer'
import CreateDevis from './pages/Campaign/CreateDevis'
import GetDevis from './pages/Campaign/GetDevis'
import ChangePassword from './pages/ChangePassword'
import Timeline from './pages/timeline/Timeline'
import Offers from './pages/Campaign/Offers'
import Messages from './pages/Contracts/Messages'





function App() {

  return (
    <Routes>
      <Route  path="/" element={<Index/>}/>
      <Route  path="/about" element={<About/>}/>
      <Route  path="/contact" element={<Contact/>}/>
      <Route  path="/profile" element={<Profile/>}/>
      <Route  path="/Editors" element={<Editors/>}/>
      <Route  path="/CampEditors" element={<CampEditors/>}/>
      <Route  path="/Editor" element={<Editor/>}/>
      <Route  path="/Contract" element={<Contract/>}/>
      <Route  path="/YourContract" element={<YourContract/>}/>
      <Route  path="/login" element={<Login/>}/>
      <Route  path="/ForgetPassword" element={<ForgetPassword/>}/>
      <Route  path="/AnnoncerRegistrationPart1" element={<AnnoncerRegistrationPart1/>}/>
      <Route  path="/AnnoncerRegistrationPart2" element={<AnnoncerRegistrationPart2/>}/>
      <Route  path="/EditorRegistrationpart1" element={<EditorRegistrationpart1/>}/>
      <Route  path="/EditorRegistrationpart2" element={<EditorRegistrationpart2/>}/>
      <Route  path="/registrationChoice" element={<RegistrationChoice/>}/>
      <Route  path="/ChangePassword" element={<ChangePassword/>}/>
      <Route  path="/timeline" element={<Timeline/>}/>  
      <Route  path="/CreateCampaign" element={<CreateCampaign/>}/> 
      <Route  path="/CampaignListAnnoncer" element={<CampaignListAnnoncer/>}/> 
      <Route  path="/YourOffers" element={<Offers/>}/> 
      <Route  path="/CreateDevis" element={<CreateDevis/>}/> 
      <Route  path="/GetDevis" element={<GetDevis/>}/> 
      <Route  path="/Messages" element={<Messages/>}/> 
      </Routes>
    
    )
  }

export default App
