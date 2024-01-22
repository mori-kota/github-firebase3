import http from 'k6/http';

export const options = {
  duration: '5s',
  vus: 2,
  thresholds: {
    http_req_failed: ['rate<0.01'], // http errors should be less than 1%
    http_req_duration: ['p(95)<500'], // 95 percent of response times must be below 500ms
  },
};

export default function () {
  const data = {
    data: {
      firstNumber: 6,
      secondNumber: 4,
      },
  };
  const res = http.post(`http://127.0.0.1:5001/fir-pj777/us-central1/testFunction`, JSON.stringify(data), {
    timeout: 310000,
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log("Response", res);
}