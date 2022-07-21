import React from 'react';
import './PieChart.css'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Col, Row } from 'react-bootstrap';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
//   labels: ['Daraz', 'Bikroy', 'Picabo'],
  datasets: [
    {
      label: '# of Votes',
      data: [35, 35, 30],
      backgroundColor: [
        '#84AF27',
        '#FFC239',
        '#0095A0',
      ],
      borderColor: [
        '#84AF27',
        '#FFC239',
        '#0095A0',
      ],
      borderWidth: 1,
    },
  ],
};

const PieChart = () => {
    return (
       <div className="d-flex ">
           <Row>
             
          
            <Col className="pieChart">
            <Pie data={data} />
        </Col>
        <Col className="pieChartLabel">
            <div className="label">
                <div className="daraz"></div>
                <div>Daraz</div>
            </div>
            <div className="label">
                <div className="bikroy"></div>
                <div>Bikroy</div>
            </div>
            <div className="label">
                <div className="pickaboo"></div>
                <div>Pickaboo</div>
            </div>
            
        </Col>
        </Row>
       </div>
    );
};

export default PieChart;