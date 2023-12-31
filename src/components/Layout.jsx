import { Outlet, Link, useLocation } from 'react-router-dom'


function Layout() {

  const location = useLocation();

  return (
    <div className='md:flex md:min-h-screen'>
        <aside className='md:w-1/4 bg-blue-900 py-10'>
          
          <h2 className='text-4xl font-black text-white text-center'>CRM Clientes</h2>

          <nav className='mt-10 text-center'>
          
            <Link 
              className={`${location.pathname === '/' ? 'text-white' : 'text-blue-300'} text-2xl block mt-2 hover:text-blue-100`} 
              to="/"
            > Clientes</Link>
            
            <Link 
              className={`${location.pathname === '/clientes/nuevo' ? 'text-white' : 'text-blue-300'} text-2xl block mt-2 hover:text-blue-100`} 
              to="/clientes/nuevo"
            > Nuevo Cliente</Link>
          
          </nav>
        
        </aside>

        <main className='md:w-3/4 p-10 md:h-screen md:overflow-auto h-screen'>
        
          <Outlet />
        
        </main>
    </div>
  )
}

export default Layout