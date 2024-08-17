import {useState} from "react";
import './App.css';
import {Routes,Route,Navigate} from "react-router-dom";
import {
    AddContact,
    EditContact,
    Contacts,
    Contact,
    Navbar
} from "./components";

const App = ()=>{
    const [getContacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(false);
  return (
    <div className="App">
      <Navbar/>
        <Routes>
            <Route path="/" element={<Navigate to="/contacts"/>}/>
            <Route path="/contacts" element={<Contacts contacts={getContacts} loading={loading}/>}/>
            <Route path="/contacts/add" element={<AddContact/>}/>
            <Route path="/contacts/:contactId" element={<Contact/>}/>
            <Route path="/contacts/edit/:contactId" element={<EditContact/>}/>
        </Routes>
    </div>
  );
}

export default App;
