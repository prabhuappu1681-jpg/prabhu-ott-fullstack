export default function handler(req, res) {
  res.status(200).json({
    status: "Backend running",
    message: "OTT API working",
  });
}