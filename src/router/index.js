import App from "../App";
import {createBrowserRouter} from "react-router-dom";
import BlocksApp from "../app/blocks/BlocksApp";
import BlogsApp from "../app/blogs/BlogsApp";
import VoyageApp from "../app/voyage/VoyageApp";
import TributaryApp from "../app/tributary/TributaryApp";
import FettleApp from "../app/fettle/FettleApp";
import FullscreenApp from "../app/fullscreen/FullscreenApp";
import ImpulseApp from "../app/impulse/ImpulseApp";
import FoundationApp from "../app/foundation/FoundationApp";


const routes = [
    {
      path: '/foundation',
      element: <FoundationApp />
    },
    {
      path: '/impulse',
      element: <ImpulseApp />
    },
    {
      path: '/fullscreen',
      element: <FullscreenApp />
    },
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

