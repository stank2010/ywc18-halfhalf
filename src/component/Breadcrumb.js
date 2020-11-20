import { Breadcrumb } from 'antd';
import { Input, Col, Row, Select, InputNumber, DatePicker, AutoComplete, Cascader } from 'antd';



export default function BreadBar(){
    return(
    <Row style={{padding:"10px",backgroundColor:"#27397c"}}>
        <Col offset={2}>
            <Breadcrumb separator="" style={{color:"white", fontFamily: "IBM Plex Sans Thai"}}>
                <Breadcrumb.Item >หน้าแรก</Breadcrumb.Item>
                <Breadcrumb.Separator style={{color:"rgb(255 255 255 / 100%);"}} />
                <Breadcrumb.Item>ค้นหา</Breadcrumb.Item>
            </Breadcrumb>
        </Col>
    </Row>
    );
}