import "./App.css";
import Dashbord from "./components/Dashbord/Dashbord";
import SideBar from "./components/SideBar/Sidebar";
function App() {
  return (
    <div className="Container">
      <SideBar />
      <Dashbord />
    </div>
  );
}

export default App;
