
import './App.css'
import Login from './components/login'
import Profile from './components/Profile'

import UserContextProvider from './context/UserContextProvider'

function App() {
  

  return (
    <UserContextProvider>
      <h1>react with code </h1>
      <Login />
      <Profile /> 
    </UserContextProvider>
  )
}

export default App
