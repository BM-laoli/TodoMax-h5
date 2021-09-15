import React , {} from 'react';

interface InterButtonProps {};
interface InterButtonState {};

class Button extends React.Component<InterButtonProps, InterButtonState> {
  constructor( props: InterButtonProps | Readonly<InterButtonProps> ){
    super( props )
  };

  render() {
    return <div>
      <h1>Button</h1>
    </div>
  };
}

export default Button