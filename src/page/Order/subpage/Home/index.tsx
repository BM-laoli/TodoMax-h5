import React , {} from 'react';

interface InterHomeProps {};
interface InterHomeState {};

class Home extends React.Component<InterHomeProps, InterHomeState> {
  constructor( props: InterHomeProps | Readonly<InterHomeProps> ){
    super( props )
  };

  render() {
    return <div>
      <h1>Home</h1>
    </div>
  };
}

export default Home