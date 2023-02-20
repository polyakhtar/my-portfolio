import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Layout/Main/Main';
import About from './Pages/About/About';
import Blog from './Pages/Blog/Blog';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import Project from './Pages/Home/Project/Project';
import Project1 from './Pages/Home/Project/Project1/Project1';
import Project2 from './Pages/Home/Project/Project2/Project2';
import Projects3 from './Pages/Home/Project/Project3/Projects3';

function App() {
const router=createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/project',
        element:<Project></Project>
      },
      {
        path:'/project1',
        element:<Project1></Project1>
      },
      {
        path:'/project2',
        element:<Project2></Project2>
      },
      {
        path:'/project3',
        element:<Projects3></Projects3>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/blog',
        element:<Blog></Blog>
      }
    ]

  }
])
  return (
    <div className="" style={{backgroundColor:'#212121'}}>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
