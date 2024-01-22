const frisby = require('frisby');

describe("Firebase Functions frisby Tests", () => {
  describe("frisbyTest", () => {
    test("Should contain status as ok, and response matches 24", () => 
      frisby.post(`http://127.0.0.1:5001/fir-pj777/us-central1/testFunction` ,{
        body:{
          data: {
            firstNumber: 6,
            secondNumber: 4,      
          }
        },
      })
      .expect('status', 200)
      .then(function (res) {
        console.log(res);
        json = JSON.parse(res.body);
        expect(json.Result).toBe(24);
      })
    );
  });
});