const dynamoose = require("dynamoose");

const schema = new dynamoose.Schema({ id: String, name: String, age: Number });

const peopleModel = dynamoose.model("people", schema);

exports.handler = async (event) => {
  const response = {
    statusCode: null,
    body: null,
  };
  let parsedBody = JSON.parse(event.body);
  try {
    const results = await peopleModel.update(parsedBody);
    response.statusCode = 200;
    response.body = JSON.stringify(results);
  } catch (e) {
    response.statusCode = 500;
    response.body = JSON.stringify(e.message);
  }

  return response;
};