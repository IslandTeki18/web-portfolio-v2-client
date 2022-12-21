import * as React from 'react'
import { Home, NotFound } from "~/src/features";

export const mainRoutes = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "*",
        element: <NotFound />
    }
]