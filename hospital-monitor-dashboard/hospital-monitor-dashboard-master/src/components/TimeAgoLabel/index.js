import React from 'react';
import TimeAgo from 'react-timeago';
import brazilianStrings from 'react-timeago/lib/language-strings/en'; // Changed to English language strings
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter';

import timeFormatter from '../../helpers/timeFormatter';

const TimeAgoLabel = ({ date, short = true, expired = false }) => {
  const timeAgoFormatter = buildFormatter(brazilianStrings);

  if (isNaN(date)) {
    return <span>No data received</span>; // Translated to English
  }

  const complement = short ? '' : 'Updated '; // Translated to English

  const style = {
    color: expired ? 'red' : 'black',
    fontWeight: expired ? 'bold' : 'normal',
  };

  return (
    <span>
      {complement}
      <TimeAgo
        live
        date={date}
        formatter={timeAgoFormatter}
        title={'Last updated: ' + timeFormatter(date)} // Translated to English
        style={style}
      />
    </span>
  );
};

export default TimeAgoLabel;