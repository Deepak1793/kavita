
import { Route, Routes } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import BankDetails from './components/BankDetails';
import Blog from './components/Blog';
import ContactUs from './components/ContactUs';
import './components/CustomButtons.css'
import Dashboard from './components/Dashboard';
import ForgotPassword from './components/ForgotPassword';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import MiniStatement from './components/MiniStatement';
import NoraChat from './components/Nora-bot/NoraChat';
import ProductInfo from './components/ProductInfo';
import PrivateRoute from './components/PrivateRoute';
import Profile from './components/Profile';


import SignUpPage from './components/SignUpPage';
import ErrorPage from './components/ErrorPage';

function App() {
  return (

    <div>

      {/* <Dashboard /> */}

      {/* <HomePage /> */}
      {/* <LoginPage /> */}
      {/* <SignUpPage /> */}

      <Routes>

        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/forgotpassword' element={<ForgotPassword />} />
        <Route path='/aboutus' element={ <AboutUs /> } />
        <Route path='/blog' element={ <Blog /> } />
        <Route path='/contactus' element={ <ContactUs /> } />
        <Route path='*' element={ <ErrorPage /> } />
      <Route element={<PrivateRoute />} >
        <Route path='/dashboard' element={<Dashboard />} />        
        <Route path='/recentTransactions' element={<MiniStatement />} />
        <Route path='/profile' element={<Profile />} />        
        <Route path='/bankdetails' element={<BankDetails />} />
        <Route path='/nora' element={<NoraChat />} />
        <Route path='/productinfo' element={<ProductInfo />  } />
      </Route>
{/* To do */}
        
        {/* <Route path='/Unauthorised' element={<Unauthorised />} /> */}
        {/* <Route path='*' element={<ErrorPage />} /> */}

      </Routes>





    </div>

  );
}

export default App;
