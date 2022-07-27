import { useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import { themeOptions } from './styles/theme'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import PostList from './pages/Post/PostList/PostList'
import PostDetails from './pages/PostDetails/PostDetails'
import ProfileDetail from './pages/ProfileDetail/ProfileDetail'
import Browse from './pages/Browse/Browse'
import NewPost from './pages/NewPost/Newpost'
import NewIteration from './pages/NewIteration/NewIteration'
import * as authService from './services/authService'
import './App.css'


const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const navigate = useNavigate()
  const theme = createTheme(themeOptions)

  const handleLogout = (link) => {
    if (link !== '') return
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/profiles"
          element={user ? <Profiles /> : <Navigate to="/login" />}
        />
        <Route
          path="/profiles/:profileId"
          element={user ? <ProfileDetail user={user} /> : <Navigate to="/login" />}
        />
        <Route path="/posts/new" element={<NewPost user={user} />} />
        <Route path="/posts/:postId" element={<PostDetails user={user} />} />
        <Route path="/topics/:topicId" element={<PostList user={user} />} />
        <Route path="/browse" element={<Browse user={user} />} />
        <Route path="/topics/:topicId/posts/:postId/iterations" element={<NewIteration user={user} />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App
