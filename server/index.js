const express = require("express");
const cors = require("cors");
const blogs = require("./api/blogData.json")


const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/" , (req, res) => {
    res.send("Hello world !")
})

app.get("/blogs", (req, res) => {
    res.status(200).json(blogs)
})

app.get("/blogs/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const blog = blogs.filter((data) => data.id === id)
    res.status(200)
    .send(blog);
    
})
app.get("/blogs/:id", (req, res) => {
    const category = parseInt(req.params.id) ;
    const FilteredBlog = blogs.filter((data) => data.category === category)
    res.status(200)
    .send(FilteredBlog);
    
})


app.listen(port, (req, res) => {
console.log(`Server is running on the ${port}`);
})