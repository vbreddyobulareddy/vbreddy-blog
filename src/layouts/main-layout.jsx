import { Outlet } from 'react-router-dom';
import { HomeNavbarComponent } from '../components/navbar/home-navbar';

const MainLayout = () => {
  return (
    <>
    <HomeNavbarComponent />
    <Outlet />
    </>
  )
}

export default MainLayout;