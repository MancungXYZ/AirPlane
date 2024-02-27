import { RouteObject } from "react-router";
import Layout from "../layout";
import Home from '../pages/Home/index'

const routes:RouteObject[] = [
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                children: [{path: "", element: <Home />}],
            }
        ]
    }
]

export default routes;