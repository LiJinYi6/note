import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/Home';
import Article from '../pages/Article';
import Layout from "../pages/Layout";
import NotFound from "../pages/404";
const router = createBrowserRouter([
    {
        'path': "/",
        element: <Layout />,
        children:[
            {
               index: true,
               path: "/",
               element: <Home />
            } ,
            {
                path: "/article/:id/:name",
                element: <Article />
            }
        ]
    },
    {
        path: "/*",
        element: <NotFound />
    }
     
])


export default router;