import {useState} from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Contacts from "./components/contact/Contacts";
import contacts from "./components/contact/Contacts";

const App = ()=>{
    const [getContacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(false);
  return (
    <div className="App">
      <Navbar/>
        <Contacts contacts={getContacts} loading={loading}/>
    </div>
  );
}

export default App;
