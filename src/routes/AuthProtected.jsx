import { Navigate, Route } from "react-router-dom";
import useStore from '@/store';
const AuthProtected = (props) => {


    const { userProfile, loginLoading } = useStore();

    if (!userProfile && !loginLoading) {
        return <Navigate to={{ pathname: "/login", state: { from: props.location } }} />
    }
    return (
        <>{props.children}</>
    )
}

const AccessRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest}
            element={props => {
                return (<>
                    <Component {...props} />
                </>)
            }
            } />
    )
}


export { AuthProtected, AccessRoute }