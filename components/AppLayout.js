import Header from "./Header";
import Content from "./Content";
import { info } from "../data";

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