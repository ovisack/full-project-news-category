
import { Outlet } from 'react-router-dom';
import Header from '../component/Header/Header';
import LatestNews from '../component/Header/LatestNews/LatestNews';
import Navbar from '../component/Header/Navbar/Navbar';
import LeftNavbar from '../component/Layout_component/LeftNavbar';
import Right from '../component/Layout_component/Right';
// import NewCart from '../component/NewCart';
// import CategoryNews from '../pages/CategoryNews';

const Layout = () => {
    return (
        <div className='font-Poppins'>
          <header className='w-11/12 mx-auto'>
            <Header></Header>
            <section>
                <LatestNews></LatestNews>
            </section>
           
          </header>

          <nav> <section className='w-11/12 mx-auto py-2'>
                <Navbar></Navbar>
            </section></nav>
          <main className='w-11/12 mx-auto pt-7 grid md:grid-cols-12 gap-5'>
          <aside className=' right  col-span-3'><LeftNavbar></LeftNavbar></aside>
          {/* <section className='col-span-6'><CategoryNews></CategoryNews> </section> */}
          <section className='col-span-6'><Outlet></Outlet></section>
        <aside className='col-span-3'> <Right></Right></aside></main>
        </div>
    );
};

export default Layout;