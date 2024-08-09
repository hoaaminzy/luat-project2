import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import { useLocation } from "react-router-dom";
export default function Layout() {
  const location = useLocation();
  return (
    <div style={{overflow:"hidden"}}>
      {location.pathname === "/trangchu" ? (
          <Header type={true} />
        ) : (
          <Header type={false} />
        )}
        {/* <Header/>  */}
        <main className=''>
            <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}
