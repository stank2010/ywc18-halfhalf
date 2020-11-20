import { Input, Col, Row, Card ,Tag,Typography,Divider,Button,Tooltip} from 'antd';
import {useEffect, useState} from 'react';
import Parser from 'html-react-parser';
import Car from '../images/carpark.png'
import Jong from '../images/jong.png'
import Pet from '../images/pet.png'

const {Title} = Typography;
const {Meta} = Card;

function Tagging({isOpen}){
    if(isOpen=="Y")
        return <Tag className="marginTop" color="#00cc00">เปิดอยู่</Tag>;
    else if(isOpen=="N")
        return <Tag  className="marginTop" color="gray">ปิดอยู่</Tag>;
    return <Tag className="marginTop"> </Tag>;
}

function level(priceLevel){
    let A = "";
    for(let i=0;i<priceLevel;i++)
        A+="<b>$</b>";

    for(let i=priceLevel;i<4;i++)
        A+="$";
    return A;
}

function Cardsub({Merd}){

    return(
        <Card style={{fontFamily:"IBM Plex Sans Thai",width:"100%"}} bodyStyle={{padding:"5px"}} className="hello">
            <Row gutter={[8,8] /* [8,8] to [8,48] */} style={{width:"100%",height:"100%"}}>

                <Col  xs={0} sm={0} md={8} lg={8} xl={8} >
                   <img src={Merd.coverImageId} className="polaroidImg"/>
                </Col>

                <Col  xs={24} sm={24} md={0} lg={0} xl={0} 
                    style={
                        {
                            backgroundImage:`url(${Merd.coverImageId})`,
                            height:"200px",
                            width:"100%",
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center'
                        }
                    }
                >
                </Col>


                <Col xs={24} sm={24} md={{offset:2,span:12}}>
                    <Meta title={
                        <Row gutter={[8,8]}>
                            <Col>
                                <Title className="marginTop" level={4}>
                                    {Merd.shopNameTH} 
                                </Title>
                            </Col>
                            <Col>
                                <Tagging isOpen={Merd.isOpen}/>
                            </Col>
                        </Row>
                        }  
                        description={
                            <>
                                <Row>
                                    <Col style={{padding:"10px"}}>
                                        {Merd.categoryName} | {Parser(level(Merd.priceLevel))} | {Merd.addressDistrictName} {Merd.addressProvinceName}
                                    </Col>
                                </Row>
                                <Divider />
                                <Row style={{paddingBottom:"10px"}}>
                                    <Col>
                                        {Parser(Merd.highlightText)}
                                    </Col>
                                </Row>

                                <Row gutter={[8,0]} style={{paddingBottom:"10px"}}>
                                    <Col>
                                        <Title level={5}>
                                            เมนูแนะนำ:
                                        </Title>
                                    </Col>
                                    {Merd.recommendedItems.map((item)=><Col>{item}</Col>)}
                                </Row>

                                <Row gutter={[16,0]} style={{paddingBottom:"10px"}}>
                                    {Merd.facilities.map((item)=>{
                                        if(item=="ที่จอดรถ")
                                            return <Col><Tooltip title={item}> <img src={Car} className="roundImg"  /> </Tooltip></Col>;
                                        else if(item=="สามารถนำสัตว์เลี้ยงเข้าได้")
                                            return <Col><Tooltip title={item}> <img src={Pet} className="roundImg" />  </Tooltip></Col>;
                                        else if(item=="รับจองล่วงหน้า")
                                            return <Col><Tooltip title={item}> <img src={Jong} className="roundImg" /> </Tooltip></Col>;
                                        return <></>;
                                    })}
                                </Row>
                            </>
                        } 
                    />
                    
                </Col>
            </Row>
        </Card>        
    );
}

function ListBar({Merchants,Shop}){
    
    return(
        <div style={{marginTop:0,marginBottom:25}}>
            { 
                Merchants.map((item)=>{
                    return <Row className="marginBottom"> <Cardsub Merd={item} /> </Row>
                })
            }
            <Row>
                <Col offset={7} span={10} style={{width:"100%",fontFamily:"IBM Plex Sans Thai",marginTop:"20px",borderRadius:"5px"}}>
                    <Button  size="large" block>ดูเพิ่มเติม</Button>
                </Col>
            </Row>
        </div>
    );
}

export default ListBar;