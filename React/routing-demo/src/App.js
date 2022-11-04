import AboutUs from "./Components/AboutUs/AboutUs";
import ContactUs from "./Components/ContactUs/ContactUs";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import NotFound from "./Components/NotFound/NotFound";
import PersonList from "./Components/PersonList/PersonList";
import Profile from "./Components/Profile/Profile";


function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<AboutUs/>}/>
      <Route path="/contactus" element={<ContactUs/>}/>
      <Route path="/persondata" element={<PersonList/>}/>
      <Route path="/profile/:id" element={<Profile/>}/>
      <Route path="*" element={<NotFound/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
