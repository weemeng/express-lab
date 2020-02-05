const request = require("supertest");
const app = require("./app");
const { data, basicResponse } = require("./data");

describe("app.js", () => {
  it("should return 1 when 1!", () => {
    expect(1).toBe(1);
  });
  it("GET / should respond with 200 and receive the basic response", async () => {
    const agent = request(app);
    const response = await agent.get("/").expect(200);
    expect(response.body).toStrictEqual(basicResponse);
  });
  it("GET /jumplings should respond with 200 and all jumplings", async () => {
    const agent = request(app);
    const response = await agent.get("/jumplings").expect(200);
    expect(response.body).toStrictEqual(data);
  });
  it("POST /jumplings should respond with 201 and given jumpling", async () => {
    const oneJumpling = data[1];
    const agent = request(app);
    const response = await agent
      .post("/jumplings")
      .send(oneJumpling)
      .expect(201);
    expect(response.body).toStrictEqual(oneJumpling);
  });
  it("GET /jumplings/:id should return jumplings with all ids", async () => {
    const agent = request(app);
    const response = await agent.get("/jumplings/3").expect(200);
    expect(response.body).toStrictEqual([data[2]]);
  });
  it("PUT /jumplings/:id should replace jumpling with new data", async () => {
    const oneJumpling = data[1];
    const agent = request(app);
    const response = await agent
    .put("/jumplings/2")
    .send(data[1])
    .expect(200);
    expect(response.body).toStrictEqual(data[1]);
});
it("DELETE /jumplings/:id should delete specific jumpling with id and print all deleted jumplings", async () => {
    const agent = request(app);
    const response = await agent.delete("/jumplings/4").expect(200);
    expect(response.body).toStrictEqual([data[3], data[7]]);    
});
// it("POST /jumplings/presenters should automatically generate one of the jumplings", async () => {
//     const oneJumpling = data[1];
//     const agent = request(app);
//     const response = await agent.post("/jumplings/presenters").expect(201);
//     expect(response.body).toStrictEqual(oneJumpling);
//   })
  //Delete random sequence to use JOi to validate
});
