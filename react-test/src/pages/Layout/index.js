import {Link, Outlet} from "react-router-dom";
function Layout(){
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/article/1001/ljy">Article</Link>
            <h1>Layout Page</h1>
            <p>This is the layout page content.</p>
            <p>It can be used to wrap other components or pages.</p>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    )
}

export default Layout;