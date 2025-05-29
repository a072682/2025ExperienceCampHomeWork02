import { createHashRouter } from "react-router-dom";
import FrontLayout from "../layout/FrontLayout";
import Blog from "../pages/Blog";
import Index from "../pages/index";
import NotFound from "../pages/NotFound";
import BlogDetail from "../pages/BlogDetail";




const router = createHashRouter([ //createHashRouter為建立router的方法
	{
		path:"/",
		element: <FrontLayout />,
        children:[
            {
                path: "",
                element: <Index />,
            },
            {
                path: "BlogPage",
                element: <Blog />,
            },
            {
                path: "BlogPage/:id",
                element: <BlogDetail />,
            },
        ]
	},
    {
        path: "*",
        element: <NotFound />,
    }
])
export default router;