const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");


app.use(cors());
app.use(express.json());

//ROUTES

//Create Class
app.post("/class", async(req, res) => {
    try {
        const {name, number, description} = req.body;
        const newClass = await pool.query("INSERT INTO class (name, number, description) VALUES($1, $2, $3) RETURNING *", [name, number, description]);

        res.json(newClass);
    } catch (error) {
        console.error(error.message)
    }
})

//Get all Class
app.get("/classes", async(req, res) => {
    try {
        const allClasses = await pool.query("SELECT * FROM class");
        res.json(allClasses.rows)
    } catch (error) {
        console.error(error.message)
    }
})

//Get a Class
app.get("/class/:id", async(req, res) => {
    try {
        const {id} = req.params;
        const c = await pool.query("SELECT * FROM class WHERE class_id = $1", [id]);

        res.json(c.rows[0])
    } catch (error) {
        console.error(error.message)
    }
})

//Update a Class
app.put("/class/:id", async (req,res) => {
    try {
        const {id} =  req.params;
        const {name, number, description} = req.body;
        const updateClass = await pool.query("UPDATE class SET name = $1, number = $2, description = $3 WHERE class_id = $4", [name, number, description, id]);

        res.json("Class was updated");
    } catch (error) {
        console.error(error.message)
    }
})


//Delete a Class

app.delete("/class/:id", async (req,res) => {
    try {
        const {id} = req.params;
        const deleteClass = await pool.query("DELETE FROM class WHERE class_id = $1", [id]);
        res.json("Deleted")

    } catch (error) {
        console.error(error.message)
    }
})



app.listen(5000, () => {
    console.log("server has started on port 5000")
})