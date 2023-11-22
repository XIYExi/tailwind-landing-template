import App from "../App";
import {createBrowserRouter} from "react-router-dom";
import BlocksApp from "../app/blocks/BlocksApp";
import BlogsApp from "../app/blogs/BlogsApp";
import VoyageApp from "../app/voyage/VoyageApp";
import TributaryApp from "../app/tributary/TributaryApp";
import FettleApp from "../app/fettle/FettleApp";


const routes = [
    {
      path: '/fettle',
      element: <FettleApp />
    },
    {
      path: '/tributary',
      element: <TributaryApp />
    },
    {
      path: '/voyage',
      element: <VoyageApp />
    },
    {
      path: '/blogs',
      element: <BlogsApp />
    },
    {
      path: '/blocks',
      element: <BlocksApp />
    },
    {
        path: '/',
        element: <App />
    }
]


const router = createBrowserRouter(routes);

export default router;

