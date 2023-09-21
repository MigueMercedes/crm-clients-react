import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import NuevoCliente, { action as NuevoClienteAction } from './pages/NuevoCliente'
import EditarCliente, {loader as editarClienteLoader, action as editarClienteAction} from './pages/EditarCliente'
import Index, { loader as clientesLoader } from './pages/Index'
import { action as eliminarClienteAction } from './components/Cliente'
import Error404 from './components/Error404'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element:  <Index />,
        loader: clientesLoader, // Utilizar loaders para obtener datos de una API
        errorElement: <Error404 />
      },
      {
        path: '/clientes/nuevo',
        element: <NuevoCliente />,
        action: NuevoClienteAction, // Utilizar action para procesar la entrada de datos en un Form
        errorElement: <Error404 />
      },
      {
        path: 'clientes/:clienteId/editar',
        element: <EditarCliente />,
        loader: editarClienteLoader,
        action: editarClienteAction,
        errorElement: <Error404 />
      },
      {
        path: 'clientes/:clienteId/eliminar',
        action: eliminarClienteAction
      },
      {
        path: '*',
        element: <Error404 />
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
