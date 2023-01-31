import logo from './logo.svg';
import './App.css';
import Rows from './Rows';
import Homepage from './components/Homepage';
import SignUp from './components/SignUp';
import Login from './components/Login';
import { Link, Route, Router, Routes } from 'react-router-dom';
import { Dashboard } from './components/Dashboard';
import Addcard from './components/Dashboard/Addcard';
import Dashboard2 from './components/Dashboard/Dashboard2';
import Profile from './components/Profile';
import Transaction from './components/Dashboard/Transaction';
import Linkedaccounts from './components/Dashboard/Linkedaccounts';
import Payment from './components/Dashboard/Payment';
import TransferHistory from './components/Dashboard/TransferHistory';
import CreditCard from './components/Dashboard/CreditCard';
import Verification from './components/Verification';
import CardsDisplay from './components/Dashboard/CardsDisplay';


function App() {
  return (
    <div className="App">
      {/* <Homepage /> */}
      {/* <Landingpage /> */}
      {/* <h1>Hi welcome to Netflix</h1>
      <Rows title = "Trending Now" />
      <Rows title = "Top Movies" /> */}

   

      
   
      <Routes >
        <Route path='/' element={ <Homepage /> } />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/dashboard' element={<Dashboard />} />
          {/* <Route path='*' element={<ErrorPage />} /> */}
          <Route path='/addcard' element={<Addcard />} />
          <Route path = '/dashboard2' element={<Dashboard2 />}  />
          <Route path ='/profile' element={<Profile />} />
          <Route path ='/linked' element={<Linkedaccounts />} />
            <Route path ='/transaction' element={<Transaction />} />

            <Route path ='/payments' element={<Payment />} />
            <Route path ='/TransferHistory' element={<TransferHistory />} />
            <Route path ='/Creditcard' element={<CreditCard />} />
            <Route path ='/Verification' element={<Verification />} />
            <Route path ='/CardsDisplay' element={<CardsDisplay />} />
            

        
      
      </Routes>
    
  
      

      
    </div>
  );
}

export default App;
