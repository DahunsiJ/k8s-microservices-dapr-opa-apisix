const express = require('express');
const app = express();
const PORT = process.env.PORT || 4400;

app.get('/', (req, res) => {
    res.send('Service 2 is running');
});

app.listen(PORT, () => {
    console.log(`Service 2 running on port ${PORT}`);
});
