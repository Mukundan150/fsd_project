import React from 'react';

import { FaHeartbeat } from 'react-icons/fa';
import { GiLungs } from 'react-icons/gi';
import { WiThermometer } from 'react-icons/wi';
import { FiClock } from 'react-icons/fi';

import DownloadCSVButton from '../DownloadCSVButton';
import timeFormatter from '../../helpers/timeFormatter';

import './styles.css';

const ReportTable = ({ name, reports }) => {
  return (
    <div className="report-container">
      <DownloadCSVButton
        title="Export: CSV Report"
        reports={reports}
        filename={`${name} - report_${new Date().toLocaleString('en-US')}.csv`}
      />
      <h1>{name}</h1>
      <div className="table-container">
        <table className="report-table">
          <tbody>
            <tr>
              <th className="sensor-data-col">
                <FiClock size={20} title="Measurement Time" />
              </th>
              <th className="sensor-data-col">
                <FaHeartbeat size={20} title="Heart Rate" />
              </th>
              <th className="sensor-data-col">
                <GiLungs size={20} title="SpO2" />
              </th>
              <th className="sensor-data-col">
                <WiThermometer size={20} title="Temperature" />
              </th>
            </tr>
            {reports.map((report, id) => (
              <tr key={id}>
                <td className="sensor-data-col" title={new Date(report.timestamp).toLocaleDateString('en-US')}>
                  {timeFormatter(report.timestamp, false)}
                </td>
                <td className="sensor-data-col"> {report.beat} bpm</td>
                <td className="sensor-data-col"> {report.spo2} %</td>
                <td className="sensor-data-col"> {report.temp} °C</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReportTable;