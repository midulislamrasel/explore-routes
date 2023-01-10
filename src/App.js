import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Contact from './Components/Contact/Contact';
import Header from './Components/Header/Header';
import Order from './Components/Order/Order';
import Main from './layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/main',
      element: <Main></Main>,
      // children: [{
        
      // }]
    },
    {
      path: '/',
      element : <Header></Header>
    },
    {
      path: '/order',
      element:<Order></Order>
    },
    {
      path: '/contact',
      element:<Contact></Contact>
    }
  ])
  return (
    <div className="App">


      
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
