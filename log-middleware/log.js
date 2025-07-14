// logging-middleware/log.js

const API_URL = "http://20.244.56.144/evaluation-service/log";

// 🔐 Replace this with your actual Bearer token from the auth step
const ACCESS_TOKEN = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJjazM5MTEyODNAZ21haWwuY29tIiwiZXhwIjoxNzUyNDcyNjA5LCJpYXQiOjE3NTI0NzE3MDksImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiJlOGExY2U1NS1jMDBmLTQzYWMtOWU5NS0zN2RmMzcwN2Y0YTAiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJrIGNoYW5kcmEgc2hla2hhciIsInN1YiI6IjBiY2Y4OTIyLWJjZjktNDg4YS04MTFkLTc2YTYxNDQ0YmJkYyJ9LCJlbWFpbCI6ImNrMzkxMTI4M0BnbWFpbC5jb20iLCJuYW1lIjoiayBjaGFuZHJhIHNoZWtoYXIiLCJyb2xsTm8iOiIxMjIxNzM3NCIsImFjY2Vzc0NvZGUiOiJDWnlwUUsiLCJjbGllbnRJRCI6IjBiY2Y4OTIyLWJjZjktNDg4YS04MTFkLTc2YTYxNDQ0YmJkYyIsImNsaWVudFNlY3JldCI6ImRWandkQ25BakhYWGhGcnQifQ.eaLJyc0hW5SsZY7R4LaYYGBLHAKjRni38hvbhJ9MKyo";

export async function log(stack, level, packageName, message) {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": ACCESS_TOKEN,
      },
      body: JSON.stringify({
        stack: stack,
        level: level,
        package: packageName,
        message: message,
      }),
    });

    const result = await response.json();
    console.log("🟢 Log sent successfully:", result);
  } catch (error) {
    console.error("🔴 Failed to send log:", error);
  }
}
