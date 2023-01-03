import React from 'react'
// import AuthContext from '../context/AuthContext'


const SignInForm = () => {
  // let {loginUser} = useContect(AuthContext)
  return (
    <div>
      <form>
        <input type="text" name="username" placeholder="Enter Username" />
        <br></br>
        <input type="password" name="password" placeholder="Enter Password" />
        <br></br>
        <input type="submit" />
      </form>
    </div>
  )
}

export default SignInForm