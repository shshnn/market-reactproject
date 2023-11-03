export const API_URL = 
process.env.NODE_ENV === "production"
? "https://react-market-sh.fly.dev" 
: "http://localhost:8080";