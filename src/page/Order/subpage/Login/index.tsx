import React , {} from 'react';
import Button from './Button';

interface InterLoginProps {};
interface InterLoginState {};

class Login extends React.Component<InterLoginProps, InterLoginState> {
  constructor( props: InterLoginProps | Readonly<InterLoginProps> ){
    super( props )
  };

  render() {
    return <div>
      <h1>Login</h1>
      <Button />
    </div>
  };
}

export default Login