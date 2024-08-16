/* eslint-disable react/prop-types */
// import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export const ProtectedRoute = ({isAllowed, children, redirectTo='/'}) => {
    if(!isAllowed)
        return <Navigate to={redirectTo}/>

    return children ? children : <Outlet/>        

}
// ProtectedRoute.propTypes = {
//     isAllowed: PropTypes.bool.isRequired,
//     children: PropTypes.node,
//     redirectTo: PropTypes.string,
// };