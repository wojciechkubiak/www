const request = require("request");
const path = require("path");
const fs = require("fs");

export default (req, res) => {
  const _path = path.join(__dirname, "..", "public", `WojciechKubiak.pdf`);
  const stream = fs.createWriteStream(_path);

  stream.on("error", () => console.log("Error"));
  stream.on("finish", () => {
    res.download(_path, function (err) {
      if (err) {
        console.log(err);
      }
    });
  });
};
