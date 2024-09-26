import Header from "./Header";
import Content from "./Content";

import { Outlet } from "react-router-dom";

export default function AppLayout()
{
    return (
        <>
            <Header />
            <Outlet />
            {/* <Content /> */}
        </>
    );
}