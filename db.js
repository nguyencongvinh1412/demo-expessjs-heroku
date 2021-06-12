const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('./database/db.json')
const db = low(adapter)

// Set some defaults
db.defaults({
    users: [
        {
            "id": 1,
            "name": "công vinh",
            "age": "22",
            "sex": "nam"
        },
        {
            "id": 2,
            "name": "văn lành",
            "age": "22",
            "sex": "nam"
        },
        {
            "id": 3,
            "name": "hải triều",
            "age": "21",
            "sex": "nam"
        },
        {
            "id": 4,
            "name": "hồng hạnh",
            "age": "22",
            "sex": "nữ"
        },
        {
            "id": 5,
            "name": "minh nhật",
            "age": "21",
            "sex": "nam"
        },
        {
            "id": 6,
            "name": "hồng an",
            "age": "21",
            "sex": "nam"
        },
        {
            "id": 7,
            "name": "Edogawa Conan",
            "age": "6",
            "sex": "nam"
        }
    ]
}).write();
module.exports = db;
