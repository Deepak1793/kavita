import Carosol from "./Carosol";
import Component1 from "./Component1";
import Component2 from "./Component2";
import Header from "./Header";


function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
        <Header/>
        </div>
        <div className="row">
     <div className="col-12 col-sm-12 col-md-4 col-lg-3">
     <Component1/>
     </div>
     <div className="col-12 col-sm-12 col-md-4 col-lg-3">
     <Component1/>
     </div>
     <div className="col-12 col-sm-12 col-md-4 col-lg-3">
     <Component1/>
     </div>
     <div className="col-12 col-sm-12 col-md-4 col-lg-3">
     <Component2/>
     </div>
        </div>

        <div className="row">
          <div className="col-12 col-sm-8 col-md-6">
          <Component2/>
          </div>
          <div className="col-12 col-sm-4 col-md-6">
          <Carosol/>
          </div>
        </div>
      </div>




    </div>
  );
}

export default App;
