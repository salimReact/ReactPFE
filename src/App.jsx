import { Route, Routes , Navigate } from 'react-router-dom'
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
import Messages from './pages/Messages/Messages'
import GetMessages from './pages/Messages/GetMessages'
import ListMessages from './pages/Messages/ListMessages'
import Admin from './pages/Admin/Admin'
import CheckUser from './pages/Admin/CheckUser'
import CheckCampaign from './pages/Admin/CheckCampaign'
import CheckContract from './pages/Admin/CheckContract'



function App() {
  const role = Number(sessionStorage.getItem('role'));

  const handleRouteProtection = (allowedRoles, element) => {
    if (allowedRoles.includes(role)) {
      return element;
    } else {
      return <Navigate to="/" replace />;
    }
  };

  return (
    <Routes>
      <Route
        path="/profile"
        element={handleRouteProtection([1], <Profile />)}
      />
      <Route
        path="/YourContract"
        element={handleRouteProtection([1], <YourContract />)}
      />
      <Route
        path="/YourOffers"
        element={handleRouteProtection([1], <Offers />)}
      />
      <Route
        path="/CreateDevis"
        element={handleRouteProtection([1], <CreateDevis />)}
      />
      <Route
        path="/Messages"
        element={handleRouteProtection([1], <Messages />)}
      />
      <Route
        path="/GetMessages"
        element={handleRouteProtection([1], <GetMessages />)}
      />
      <Route
        path="/ListMessages"
        element={handleRouteProtection([1], <ListMessages />)}
      />

      <Route
        path="/profile"
        element={handleRouteProtection([2], <Profile />)}
      />
      <Route
        path="/Contract"
        element={handleRouteProtection([2], <Contract />)}
      />
      <Route
        path="/CampEditors"
        element={handleRouteProtection([2], <CampEditors />)}
      />
      <Route
        path="/Editor"
        element={handleRouteProtection([2], <Editor />)}
      />
      <Route
        path="/CampaignListAnnoncer"
        element={handleRouteProtection([2], <CampaignListAnnoncer />)}
      />
      <Route
        path="/GetDevis"
        element={handleRouteProtection([2], <GetDevis />)}
      />
      <Route
        path="/CreateCampaign"
        element={handleRouteProtection([2], <CreateCampaign />)}
      />
      <Route
        path="/Messages"
        element={handleRouteProtection([2], <Messages />)}
      />
      <Route
        path="/GetMessages"
        element={handleRouteProtection([2], <GetMessages />)}
      />
      <Route
        path="/ListMessages"
        element={handleRouteProtection([2], <ListMessages />)}
      />

      <Route
        path="/Admin"
        element={handleRouteProtection([3], <Admin />)}
      />
      <Route
        path="/CheckUser"
        element={handleRouteProtection([3], <CheckUser />)}
      />
      <Route
        path="/CheckCampaign"
        element={handleRouteProtection([3], <CheckCampaign />)}
      />
      <Route
        path="/CheckContract"
        element={handleRouteProtection([3], <CheckContract />)}
      />

      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/Editors" element={<Editors />} />
      <Route path="/login" element={<Login />} />
      <Route path="/ForgetPassword" element={<ForgetPassword />} />
      <Route
        path="/AnnoncerRegistrationPart1"
        element={<AnnoncerRegistrationPart1 />}
      />
      <Route
        path="/AnnoncerRegistrationPart2"
        element={<AnnoncerRegistrationPart2 />}
      />
      <Route
        path="/EditorRegistrationpart1"
        element={<EditorRegistrationpart1 />}
      />
      <Route
        path="/EditorRegistrationpart2"
        element={<EditorRegistrationpart2 />}
      />
      <Route
        path="/registrationChoice"
        element={<RegistrationChoice />}
      />
      <Route path="/ChangePassword" element={<ChangePassword />} />
      <Route path="/timeline" element={<Timeline />} />
    </Routes>
  );
}

export default App;
