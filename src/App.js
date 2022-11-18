import "./App.css";
import Deshboard from "./Layouts/Deshboard";
import Navbar from "./Layouts/Navbar/Navbar";
import Sidebar from "./Layouts/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar/>  
        <div className="content">
          <Deshboard />
        </div>
      </div>
  );
}

export default App;
