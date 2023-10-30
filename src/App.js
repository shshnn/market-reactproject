import React from 'react';
import "antd";
import './App.css';
import MainPageComponent from "./main/index";
import { Switch,Route,Link,useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import UploadPage from './upload';
import ProductPage from './product';
import { Button } from 'antd';
import {DownloadOutlined} from '@ant-design/icons';
function App() {
   const history = useHistory();
  return (

  <div>
    <div id="header">
    <div id="header-area">
      <Link to="/">
      
      <img src='/images/images/icons/logo.png' />
      </Link>
      <Button size='large' onClick={function(){
history.push('/upload');
      }}
      icon={<DownloadOutlined/>}>상품 업로드</Button>
    </div>
  </div>
  <div id="body">
    <Switch>
      <Route exact={true} path={"/"} component={MainPageComponent}/>
      
      <Route exact={true} path={"/products/:id"} component={ProductPage}/>
     
      <Route exact={true} path={"/upload"} component={UploadPage}/>
     
      </Switch>
      </div>
  <div id="footer"></div>
  </div> ); 
  
}

export default App;
