import React from 'react';
import { connect } from 'react-redux';

import GenericBarChart from '../../components/GenericBarChart';
import emptySensorData from '../../helpers/emptySensorData';

import './styles.css';

const Charts = ({ data }) => {
  return (
    <div className="aggregated-charts-container">
      <div className="info-chart-container">
        <GenericBarChart
          data={data}
          dataKeyX="name"
          syncId="anyId"
          dataKeyY="beat"
          barName="Heart Rate" // Translated to English
          unit=" bpm" // No translation needed
          fillColor="#2fc432"
        />
      </div>
      <div className="info-chart-container">
        <GenericBarChart
          data={data}
          dataKeyX="name"
          syncId="anyId"
          dataKeyY="spo2"
          barName="SpO2" // No translation needed
          unit="%" // No translation needed
          fillColor="#2076e0"
        />
      </div>
      <div className="info-chart-container">
        <GenericBarChart
          data={data}
          dataKeyX="name"
          syncId="anyId"
          dataKeyY="temp"
          barName="Temperature" // Translated to English
          unit="°C" // No translation needed
          fillColor="#e02041"
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  let data = [];
  state.hospitalBeds.forEach((hospitalBed) => {
    const name = hospitalBed.name;
    const isExpired = state.sensors[hospitalBed.sensorId].expired;
    const records = state.sensors[hospitalBed.sensorId].data;
    const { beat, spo2, temp } = isExpired ? emptySensorData : records[records.length - 1];
    data.push({ name, beat, spo2, temp });
  });
  return { data };
};

export default connect(mapStateToProps)(Charts);