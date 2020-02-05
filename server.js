const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 8080;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
    res.send({ joseph: 'Hello From Joseph' });
});

app.get('/api/v1/products', (req, res) => {
    res.send([
        {
            "name": "DELUXE COOKED HAM",
            "price": "5.15",
            "id": "102",
            "catId": "1",
        },
        {
            "name": "CORN ON THE COBB",
            "price": "1.19",
            "id": "11",
            "catId": "4",
        }
        ]);
});

app.get('/api/v1/products/102', (req, res) => {
    res.send([
        {
            "name": "DELUXE COOKED HAM",
            "price": "5.15",
            "id": "102",
            "catId": "1",
        }
    ]);
});

app.get('/api/v1/products/11', (req, res) => {
    res.send([
        {
            "name": "CORN ON THE COBB",
            "price": "1.19",
            "id": "11",
            "catId": "4",
        }
    ]);
});

app.put('/api/v1/products/11', (req, res) => {
    res.send([
        {
            "name": "CORN ON THE COBB",
            "price": "1.19",
            "id": "11",
            "catId": "4",
        }
    ]);
});


app.post('/api/world', (req, res) => {
    console.log(req);
    res.send(
        `I received your POST request. This is what you sent me: ${req.body.post}`,
    );
})

app.listen(port, () => console.log(`Listening on port ${port}`));
