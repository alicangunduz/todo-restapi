const fs = require("fs");

// Write to db
function dbWrite(data) {
  fs.writeFileSync("./db/todo.json", JSON.stringify(data), "utf8", (err) => {
    if (err) {
      console.log(err);
    }
  });
}

// Get post data
function getPostData(req) {
  return new Promise((resolve, reject) => {
    try {
      let body = "";
      req.on("data", (chunk) => {
        body += chunk.toString();
      });

      req.on("end", () => {
        resolve(body);
      });
    } catch (err) {
      reject(err);
    }
  });
}

module.exports = {
  dbWrite,
  getPostData,
};
