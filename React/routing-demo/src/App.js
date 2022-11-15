import AboutUs from "./Components/AboutUs/AboutUs";
import ContactUs from "./Components/ContactUs/ContactUs";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import NotFound from "./Components/NotFound/NotFound";
import PersonList from "./Components/PersonList/PersonList";
import Profile from "./Components/Profile/Profile";
import AddContact from "./Components/AddContact/AddContact";
import ContactList from "./Components/ContactList/ContactList";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";


function App() {
  return (
    <div>
      
      <Header/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<AboutUs/>}/>
      <Route path="/contactus" element={<ContactUs/>}/>
      <Route path="/persondata" element={<PersonList/>}/>
      <Route path="/profile/:id" element={<Profile/>}/>
      <Route path="/addcontact" element={<AddContact/>}/>
      <Route path="/contactlist" element={<ContactList/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>

      <Route path="*" element={<NotFound/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
