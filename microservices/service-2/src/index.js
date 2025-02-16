const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.send('Service 1 is running');
});

app.listen(PORT, () => {
    console.log(`Service 1 running on port ${PORT}`);
});
