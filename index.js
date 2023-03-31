/**
 * Date: 31/03/2023
 * Subject: Portfolio All package require
 * Auth: Ismile Sardar
 */
const app = require("./app");
const PORT = process.env.PORT || 8000;

app.listen(PORT, ()=>{
    console.log(`server running at http://localhost:${PORT}`);
});