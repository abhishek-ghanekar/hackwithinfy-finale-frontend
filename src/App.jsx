import Home from "./screens/Home/Home"
import { Routes, BrowserRouter , Route, useLocation} from 'react-router-dom'
import Login from "./screens/Home/Login/Login"
import Dashboard from "./screens/Dashboard/Dashboard"
function App() {
  

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
     </BrowserRouter>
      {/* <Home/> */}
    </>
  )
}

export default App
