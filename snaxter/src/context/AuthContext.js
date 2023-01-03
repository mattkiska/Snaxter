// import { createContext, useState, useEffect } from 'react';

// const AuthContext = createContext()

// export default AuthContext

// export const AuthProvider = ({ children }) => {

//     let [user, setUser] = useState(null)
//     let [authTokens, setAuthTokens] = useState(null)

//     let loginUser = async ()=> {
//         let response = fetch('http://localhost:8000/api/token/', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body:JSON.stringify({ 'username':null, 'password':null })
//         })
//     }

//     let contextData = {
//         loginUser: loginUser
//     }

//     return (
//         <AuthContext.Provider value={contextData}>
//             {children}
//         </AuthContext.Provider>
//     )
// }