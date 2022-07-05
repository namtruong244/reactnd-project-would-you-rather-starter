import {Redirect, Route} from "react-router-dom";
import {useSelector} from "react-redux";
import {NavBar} from "../NavBar/NavBar";

export const PrivateRoute = ({ withNavBar=true, location,...rest }) => {
    const { currentUser } = useSelector(state => state.auth)

    if (currentUser === null) {
        return <Redirect
            to={{
                pathname: "/login",
                state: { from: location }
            }} />
    }

    return (
        <>
            <NavBar />
            <Route {...rest}/>
        </>
        )
}
