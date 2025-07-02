import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import AdmissionPage from "./pages/AdmissionPage"
import ContactPage from "./pages/ContactPage"
import CoursesPage from "./pages/CoursesPage"
import './styles/Pages.css'
import ChatbotComponent from "./components/Chatbot/ChatbotComponents"
import { useState } from "react"
import DeveloperInfoPopup from "./components/DeveloperInfo/DeveloperInfoPopup"

const App = () => {
  const [showPopup, setShowPopup] = useState(true);
  
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return(
    <div>
      <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Vinisha Vidyadhar Gavali"
          studentPhotoUrl="/Images/vinisha.jpeg" 
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/Contact" element={<ContactPage/>}/>
        <Route path="/courses" element={<CoursesPage/>}/>
        <Route path="/admissions" element={<AdmissionPage/>}/>
      </Routes>
     < ChatbotComponent />
    </Router>
    </div>
   
  )
}

export default App;