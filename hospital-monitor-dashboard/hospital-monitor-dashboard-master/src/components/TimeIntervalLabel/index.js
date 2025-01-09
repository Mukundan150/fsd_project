import React from 'react';

import timeFormatter from '../../helpers/timeFormatter';

const TimeIntervalLabel = ({ start, end }) => {
  if (isNaN(start)) {
    return <span>No data received</span>; 
  }

  return (
    <span>
      Between {timeFormatter(start)} - {timeFormatter(end)} 
    </span>
  );
};

export default TimeIntervalLabel;