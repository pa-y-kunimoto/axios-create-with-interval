import express from "express";

const app = express();
const port = 3000;

app.get("/api/hello", (req, res) => {
  console.log("timestamp delta: ", calcTimeStampDelta(new Date()), "ms");
  const name = req.query.name || "World";
  res.send(`Hello, ${name}!`);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

let timestamp: Date;
const calcTimeStampDelta = (_timestamp: Date): number => {
  if (timestamp) {
    const diff = _timestamp.getTime() - timestamp.getTime();
    timestamp = _timestamp;
    return diff;
  }
  timestamp = _timestamp;
  return 0;
}
