const settings = {
  DASHBOARD_NAME: 'Dashboard Mukundan',
  BROKER_URL: 'wss://mqtt.eclipse.org:443/mqtt',
  OXIMETERS_TOPIC: 'oximeters',
  ALERTS_TOPIC: 'alerts',
  RECORDS_TO_SAVE: 500,
  MINUTES_TO_EXPIRE: 1,
  HOSPITAL_BEDS: [
    { name: 'sachin bed', sensor_id: 1 },
    { name: 'sudarshan bed', sensor_id: 2 },
    { name: 'janardhan bed', sensor_id: 3 },
    { name: 'Kedharnath bed', sensor_id: 4 },
    { name: 'bed 5', sensor_id: 5 },
    { name: 'bed 6', sensor_id: 6 },
    { name: 'bed 7', sensor_id: 7 },
    { name: 'bed 8', sensor_id: 8 },
    { name: 'bed 9', sensor_id: 9 },
    { name: 'bed 10', sensor_id: 10 },
  ],
  REPORT_INTERVAL_MINUTES: 60,
};
