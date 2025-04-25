const express = require('express');
const app = express();

const port = 8000; // ✅ make sure this is defined

app.get('/',(req,res)=>{
    res.send('<h1>Hello from [Vineeth jampala]\'s Web App</h1>');
});

app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`); // ✅ use backticks
});