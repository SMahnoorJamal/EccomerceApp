export default async function handler(req, res) {
  const backend = await fetch("http://localhost:4000/send-otp", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(req.body),
  });

  const data = await backend.json();
  res.status(200).json(data);
}