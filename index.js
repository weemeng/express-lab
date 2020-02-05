const PORT = 3000;
const app = require("./app")

const server = app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
