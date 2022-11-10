import Carosol from "./Carosol";
import Component1 from "./Component1";
import Component2 from "./Component2";
import Header from "./Header";
import UserCard from "./UserCard";
import Typography from '@mui/material/Typography';


function App() {
  return (
    // <div className="container">
    //   <div className="row">
    //     <div className="col-12">
    //     <Header/>
    //     </div>
    //     <div className="row">
    //  <div className="col-12 col-sm-12 col-md-4 col-lg-3">
    //  <Component1/>
    //  </div>
    //  <div className="col-12 col-sm-12 col-md-4 col-lg-3">
    //  <Component1/>
    //  </div>
    //  <div className="col-12 col-sm-12 col-md-4 col-lg-3">
    //  <Component1/>
    //  </div>
    //  <div className="col-12 col-sm-12 col-md-4 col-lg-3">
    //  <Component2/>
    //  </div>
    //     </div>

    //     <div className="row">
    //       <div className="col-12 col-sm-8 col-md-6">
    //       <Component2/>
    //       </div>
    //       <div className="col-12 col-sm-4 col-md-6">
    //       <Carosol/>
    //       </div>
    //     </div>
    //   </div>




    // </div>

    <div>
      <UserCard/>
      <br /><br />
      {
  /* There is already an h1 in the page, let's not duplicate it. */
}
<Typography variant="button" component="button" color="error">
  Heading
</Typography>;
<Typography variant="h6" component="span">
  Heading
</Typography>;

    </div>
  );
}

export default App;
