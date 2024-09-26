import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter,RouterProvider } from "react-router-dom";

import AppLayout from "./components/AppLayout";
import Content from "./components/Content";
import DetailedContent from "./components/DetailedContent";

import { info } from "./data";

const root=ReactDOM.createRoot(document.querySelector("#root"));
// root.render(<App />);

const appRouter=createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Content />
            },
            {
                path: '/country/:name',
                element: <DetailedContent />
            }
        ]
    }
])

root.render(<RouterProvider router={appRouter} />)