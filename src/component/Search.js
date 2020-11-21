import {useEffect, useState} from 'react';
import { Input, Col, Row, Select, AutoComplete, Cascader } from 'antd';
import {SearchOutlined} from '@ant-design/icons'
import location from '../svg/location.svg';
import logo from '../images/halfhalf-logo.png';
import logomini from '../images/halfhalf-logo-mini.png';
import D_location from '../images/64114.png';
import Filter_Kung from '../images/filter.png';

const theme = {
  fontFamily: "IBM Plex Sans Thai"
};
const { Option } = Select;

function SearchBar({Provinces,Categories}){
  const onSearch = value => console.log(value);

  return(
  <Row gutter={16} style={{padding:"10px",...theme}}>
    
    <Col xs={0} sm={0} md={4}>
      <img  width="auto" height="40px" align="right" src={logo} alt="Logo" />
    </Col>
    
    <Col xs={4} sm={4} md={0} lg={0} xl={0}>
      <img  width="auto" height="40px" align="right" src={logomini} alt="Logo" />
    </Col>

    <Col xs={0} sm={0}  md={20}>
      <Input.Group className="leftKung" compact>
        <Select defaultValue="99"  style={{ width: '20%',...theme}}  size="large" className="leftKung">
          <Option value="99" className="fontMan"><img src={location} />พื้นที่ใกล้ฉัน</Option>
          <Option value="101" className="fontMan"><img src={D_location} width="25px" height="25px"/>สถานที่ทั้งหมด</Option>
          {
              Provinces.map((item,index)=>{
                return <Option className="fontMan" key={index} value={index}>{item}</Option>
              })
          }
        </Select>
        
        <AutoComplete
          style={{ width: '75%' }}
          className="fontMan"
          placeholder=""
          options={
              Categories.map(item=>{
                return {value:<font className="fontMan">{item.name}</font>};
              })
          }
        >
          <Input className="fontMan" size="large" placeholder="ค้นหา ชื่อ ร้านอาหาร และเครื่องดื่ม ร้านธงฟ้า ร้านค้า OTOP และสินค้าทั่วไป" suffix={<SearchOutlined/>} ></Input>
        </AutoComplete>
      </Input.Group>
      </Col>

      <Col xs={20} sm={20} md={0} lg={0} xl={0}>
        <Input.Group compact>        
          <AutoComplete
            style={{ width:'80%'}}
            placeholder=""
            options={
                Categories.map(item=>{
                  return {value:<font className="fontMan">{item.name}</font>};
                })
            }
          >
            <Input 
              size="large" 
              placeholder="ค้นหา ชื่อ ร้านอาหาร และเครื่องดื่ม ร้านธงฟ้า ร้านค้า OTOP และสินค้าทั่วไป" 
              suffix={<SearchOutlined/>} 
              style={{borderTopLeftRadius:"10px",borderBottomLeftRadius:"10px"}}
            >

              </Input>
          </AutoComplete>
          <img src={Filter_Kung} className="filterKung"/>
        </Input.Group>         
      </Col>
    </Row>
  );
}

export default SearchBar;