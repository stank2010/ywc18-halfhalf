import './App.css';
import {useEffect, useState} from 'react';
import axios from 'axios';
import SearchBar from './component/Search';
import BreadBar from './component/Breadcrumb';
import FilterBar from './component/filter';
import ListBar from './component/listBar';
import { Col, Row,Typography } from 'antd';
import React from 'react';

const { Title } = Typography;

function App(){

  const [data,setData] = useState({categories:[],provinces:[],priceRange:[],merchants:[]});
  const [Shop,setShop] = useState({
    category:-1, //index
    sub : 0,     //index
    price:-1,     //index
    province:-1
  });


  useEffect(()=>{
    async function connectData(){
      const res = await axios.get('https://panjs.com/ywc18.json');
      setData(res.data);  
      console.log(res.data);
    }
    connectData();
  },[]);
  
  useEffect(()=>{
    console.log("SHop change" , Shop);
  },[Shop]);
  

  return(
    <div style={{maxWidth:"100%"}} className="backgroundy">
      <SearchBar 
        Provinces={data.provinces} 
        Categories={data.categories} 
      />
      <BreadBar />
      <Row style={{ marginTop: 16 }}>
        <Col 
          style={{fontFamily: "IBM Plex Sans Thai"}} 
          offset={1}
        >
          <Title level={4}>ผลการค้นหา{(Shop.category==-1)?"ทั้งหมด":data.categories[Shop.category].name}</Title>
        </Col>
        
      </Row>
      <Row>
        <Col xs={0} sm={0} md={{span:7,offset:1}} >
          <FilterBar 
            Shop = {Shop}
            setShop = {setShop}
            Provinces={data.provinces} 
            Categories={data.categories} 
            Price={data.priceRange}
          />
        </Col>
        <Col xs={{offset:1,span:22}} sm={{offset:1,span:22}}  md={{span:14,offset:1}} lg={{span:14,offset:1}} xl={{span:14,offset:1}}>
          <ListBar Merchants={data.merchants} />
        </Col>
      </Row>
    </div>
  );
}

export default App;

/*
  return(
    <div>
      <SearchBar />
      
      <p> Click {count} times ID:{room.id} Name:{room.name}</p>
      <But A={setCount} B={count}/>
      <button onClick={()=>console.log(data)}>Click Data</button>
    </div>
  );

*/

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/