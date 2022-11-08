import React from 'react'
import AuthLayout from '../../layout/authLayout'

type Props = {}

const Login: React.FC = (props: Props) => {
  return (
    <AuthLayout>
    <>{console.log("Login")}</>
    Login</AuthLayout>
  )
}

export default Login