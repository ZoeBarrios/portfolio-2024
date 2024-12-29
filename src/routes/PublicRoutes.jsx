import { Route } from "wouter";
import Home from "../pages/Home";
import Comments from "../pages/Comments";

function PublicRoutes() {
    return (
        <>
            <Route path="/" component={Home} />
            <Route path="/comments" component={Comments} />
        </>
    )

}

export default PublicRoutes;