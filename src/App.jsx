import Home from "./screens/Home/Home"
import { useEffect } from "react"
import { Routes, BrowserRouter , Route, useLocation} from 'react-router-dom'
import Login from "./screens/Home/Login/Login"
import Dashboard from "./screens/Dashboard/Dashboard"
import ShortestRoute from "./screens/ShortestRoute/ShortestRoute"
import ReportGarbage from "./screens/ReportPicture/ReportGarbage"
import axios from "axios"
function App() {
  // const formData = FormData()

  // useEffect(() => {
    
  //   axios.post('/temp', {
  //     firstName: 'Fred',
  //     lastName: 'Flintstone'
  //   })
  //   .then(function (response) {
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  // })

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/ShowRoute" element={<ShortestRoute/>}/>
        <Route path="/ReportGarbage" element={<ReportGarbage/>}/>
      </Routes>
     </BrowserRouter>
      {/* <Home/> */}
    </>
  )
}

export default App
