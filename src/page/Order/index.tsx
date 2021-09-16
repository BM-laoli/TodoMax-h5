import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Tag from "@/components/Tag";
import store from './store';
import { inject, observer, Provider } from 'mobx-react';
import { toJS } from 'mobx';
import { Button } from 'antd-mobile';
import './index.less';

@inject("store")
@observer
class App extends React.Component  {
  componentDidMount(){
    // @ts-ignore
    console.log( toJS(this.props.store) );
  }

  render(){
    return (
      <div >
        <p>Order</p>
        <Tag />
        <Button type="primary"> 点击我  </Button>
        
        <div className="a"></div>
      </div>

   
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
