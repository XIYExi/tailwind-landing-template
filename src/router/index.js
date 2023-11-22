import App from "../App";
import BlocksApp from "../app/blocks/BlocksApp";
import {createBrowserRouter} from "react-router-dom";
import BlogsApp from "../app/blogs/BlogsApp";
import VoyageApp from "../app/voyage/VoyageApp";
import TributaryApp from "../app/tributary/TributaryApp";


const routes = [
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

