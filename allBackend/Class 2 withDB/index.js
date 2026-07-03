const express = require('express')
const mysql = require('mysql2/promise')
const app = express()
const port = 3000
app.use(express.json())
app.use(express.urlencoded())


async function ConnectDB() {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'password',
        port: 3307,
        database: 'students',
    });

    //get all data from databse
    app.get('/', async (req, res) => {
        const [results] = await connection.query('SELECT * FROM tabel1');
        res.json(results)
    })

    //add data into a database
    app.post('/', async (req, res) => {
        const { name, age } = req.body
        await connection.execute('insert into tabel1 (name , age) values(?,?)', [name, age])
        res.status(201).json('added succesfully')
    })

    //delete data from database
    app.delete('/:name', async (req, res) => {
        const name = req.params.name
        await connection.execute('DELETE FROM tabel1 WHERE name = (?)', [name])
        res.status(200).json('removed succesfully')
    })

    //get specific data from database by passing name as a parameter
    app.get('/:name', async (req, res) => {
        const name = req.params.name
        const [results] = await connection.execute('SELECT * FROM tabel1 WHERE name = (?)', [name])
        res.status(200).json(results)
    })

    //update the existing data selecting it by id through body
    app.put('/', async (req, res) => {
        const { name, id } = req.body
        const [results] = await connection.execute('UPDATE tabel1 SET NAME = ? WHERE id = ? ', [name, id])
        if (results.affectedRows == 0) {
            return res.status(404).json('Student not found')
        }
        res.status(200).json('Updated successfully')
    })





    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })

}
ConnectDB()
