import React from 'react';
import { Col, Row } from 'react-bootstrap';
import PieChart from './PieChart/PieChart';
import './Charts.css'

const index = () => {
    return (
        <div>
            <Row>
                <Col md="5" className=""> 
                <div>
                    <h1 className="h1 pie">Sources</h1>
                </div>
                <div>

                <PieChart/>
                </div>
                </Col>
                <Col md="7">
                <div>
                    <h1 className="h1">Conditions</h1>
                </div>
                <div>

                {/* <PieChart/> */}
                </div>
                </Col>
            </Row>
        </div>
    );
};

export default index;