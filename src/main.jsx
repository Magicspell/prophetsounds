import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Root from './routes/root';
import ErrorPage from './routes/errorPage';
import Index from './routes';
import PackPage from './routes/packPage';
import PackList from './routes/packList';
import ContactPage from './routes/contactPage';

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
        {
            path: "contact",
            element: <ContactPage />
        }
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);