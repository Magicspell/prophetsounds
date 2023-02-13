import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Root from './routes/root';
import ErrorPage from './routes/errorPage';
import TestPage from './routes/testPage';
import PageNumber from './routes/pageNumber';
import Index from './routes';
import PackPage from './routes/packPage';
import PackList from './routes/packList';

const router = createBrowserRouter([
  {
    path:"/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
        { index: true, element: <Index /> },
        {
            path: "packs/:packId",
            element: <PackPage />,
            loader: async ({params}) => {
                return params.packId;
            }
        },
        {
            path: "tag/:tagId",
            element: <PackList />,
            loader: async ({params}) => {
                return params.tagId;
            }
        },
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);