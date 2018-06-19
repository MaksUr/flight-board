const flights = [
  'DP-404',
  'DP-405',
  'DP-406',
  'DP-407',
  'DP-408',
  'DP-409'
];


function randomDate() {
  var date = new Date(Date.now());
  var hour = Math.random() * 12 | 0;
  var minute = Math.random() * 60 | 0;
  date.setHours(hour);
  date.setMinutes(minute);
  return date.toISOString();
}


const range = len => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newPerson = () => {
  return {
    flight: flights[Math.floor(Math.random()*flights.length)],  
    departure: randomDate(),  
  };
};

export function makeData(len = 10) {
  return range(len).map(d => {
    return {
      ...newPerson(),
      children: range(10).map(newPerson)
    };
  });
}

export function makedata() {
  var result = [];  
}
