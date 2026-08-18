const fs = require('fs');
const rly = require('indian-railway-station-codes');

const fileContent = `export const quotas = [
  'General Quota',
  'Tatkal Quota',
  'Premium Tatkal Quota',
  'Ladies Quota',
  'Senior Citizen Quota',
  'Physically Handicapped Quota',
  'Defence Quota'
];

export const stations = ${JSON.stringify(rly.stations, null, 2)};
`;

fs.writeFileSync('src/data/stations.ts', fileContent);
