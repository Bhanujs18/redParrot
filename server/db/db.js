const mongoose = require('mongoose');

const db = async () => {
await mongoose.connect("mongodb+srv://bhanupratap19995:H9oYLFZC1CiXUYAn@cluster0.qknnclc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/orders");
}

module.exports = db;


