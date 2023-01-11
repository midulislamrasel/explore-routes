import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact'
import Main from './Leout/Main';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Order from './Components/Order/Order';
import UserDitels from './Components/UserDitels/UserDitels';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: 'home',
          element: <Home></Home>,
          loader:() => {
            return fetch ('https://jsonplaceholder.typicode.com/users')
          },
        },
        {
          path: '/user/:id',
          loader: async ({params}) => {
            return fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
          },
          element: <UserDitels></UserDitels>,
        },
        {
          path: 'about',
          element: <About></About>
        },
        {
          path: 'contact',
          element: <Contact></Contact>
        },
        {
          path: 'header',
          element: <Header></Header>
        },
        {
          path: 'footer',
          element: <Footer></Footer>

        },
        {
          path: 'order',
          element: <Order></Order>
        }
      ]
    },
    {
      path: '*',
      element: <div> This page is note found</div>
    }
  ])


  return (
    <div className="App">
      <RouterProvider router = {router}></RouterProvider>
    </div>
  );
}

export default App;
