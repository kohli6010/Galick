const express = require('express');
const app = express();
const csvFilePath = './predictions.csv';
const csv = require('csvtojson');
let obj;
let obj1=[];
csv().fromFile(csvFilePath).then((jsonObj) => {
    obj = jsonObj;
    for (let i = 0; i < obj.length; i++) {
        obj1.push(obj[i]['predicted_class'])
    }
});

const jsonArray = csv().fromFile(csvFilePath);

app.get('/', (req, res) => {
	console.log(obj1);
	res.json(obj1);
});

app.listen(5000, () => console.log(`server is running`));
