import { Outlet, NavLink } from 'react-router-dom'
import CompNavbar from '../components/Navbar'

function RootLayout() {
  return (
    <>
      <CompNavbar />
      <Outlet />
    </>
  )
}

export default RootLayout
