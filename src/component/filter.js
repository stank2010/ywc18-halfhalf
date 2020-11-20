import {  Col, Row, Select, Typography, Card ,Radio} from 'antd';
import {useEffect, useState} from 'react';
import location from '../svg/location.svg';
import D_location from '../images/64114.png';
import React from 'react';

const { Title } = Typography;
const { Option } = Select;
const radioStyle = {
    display: 'block',
    height: '30px',
    lineHeight: '30px',
};

function SubCategory({Shop2,setShop2,Cate}){

    const onChange = e => {
        setShop2({...Shop2,sub:e.target.value});
    };

    if(Shop2.category != -1)
        return (
        <Row style={{ marginBottom: 16 }}>
            <Col span={24}>
                <Title level={5}>ประเภทร้านค้า</Title>
            </Col>
            <Col span={24}>
                <Radio.Group onChange={onChange} defaultValue={-1}>
                    <Radio key={-1} style={radioStyle} value={-1}>ทั้งหมด</Radio>
                    {
                        Cate[Shop2.category].subcategories.map((item,index)=>
                        <Radio style={radioStyle} key={index} value={index}>{item}</Radio>
                        )
                    }
                </Radio.Group>          
            </Col>      
        </Row>);
    return <> </>;
}


function FilterBar({Provinces,Categories,Price,Shop,setShop}){
    const [Shop2,setShop2] = useState(Shop);

    const onChangeType = e => {
        setShop2({...Shop2,category:e.target.value});
    };

    const handleChange = value => {
        setShop2({...Shop2,price:value});
    };

    const handleChangeProv = value => {
        setShop2({...Shop2,province:value});
    };
    
    useEffect(()=>{
        setShop(Shop2);
        console.log(Shop2);
    },[Shop2]);

    return (
        <Card style={{fontFamily:"IBM Plex Sans Thai",borderColor:"gray"}}>
            <Row style={{ marginBottom: 16 }}>
                <Col span={24}>
                    <Title level={5}>ประเภทร้านค้า</Title>
                </Col>
                <Col span={24}>
                    <Radio.Group onChange={onChangeType} defaultValue={-1}>
                        <Radio style={radioStyle} value={-1}>
                            ทั้งหมด
                        </Radio>
                        {
                            Categories.map((item,index)=>{
                                return(<Radio key={index} style={radioStyle} value={index}>{item.name}</Radio>);
                            })
                        }
                    </Radio.Group>
                </Col>
            </Row>

            <Row style={{ marginBottom: 16 }}>
                <Col span={24}>
                    <Title level={5}>จังหวัด/ใกล้ฉัน</Title>
                </Col>
                <Col span={24}>
                    <Select onChange={handleChangeProv} defaultValue={-1}  style={{ width: '100%'}}  size="large">
                        <Option value={-1} className="fontMan"><img src={location} />พื้นที่ใกล้ฉัน</Option>
                        <Option value={-2} className="fontMan"><img src={D_location} width="20px" height="20px"/>สถานที่ทั้งหมด</Option>
                        {
                            Provinces.map((item,index)=>{
                                return <Option key={index} value={index} className="fontMan">{item}</Option>
                            })
                        }
                    </Select>
                </Col>
            </Row>

            <Row style={{ marginBottom: 16 }}>
                <Col span={24}>
                    <Title level={5}>ราคา</Title>
                </Col>
                <Col span={24}>
                    <Select 
                        defaultValue="กรุณาเลือก"  
                        style={{ width: '100%'}}  
                        size="large"
                        onChange={handleChange}
                    >
                        {
                            Price.map((item,index)=>{
                                return <Option className="fontMan" key={index} value={index}>{item}</Option>
                            })
                        }
                    </Select>
                </Col>
            </Row>
            
            <SubCategory Shop2={Shop2} setShop2={setShop2} Cate={Categories} />
        </Card>
    );
}

export default FilterBar;