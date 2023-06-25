const express = require('express');
const app = express();
const path = require('path');
const { v4: uuid } = require('uuid');
const methodOverride = require('method-override');
const pageUtils = require('./utils/pageUtils');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true, limit:'10mb', parameterLimit: 50000 }));
app.use(methodOverride('_method'));

let blogs = [
    {
        id: uuid(),
        title: 'My First Blog',
        desc: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
        imgUrl: 'https://images.unsplash.com/photo-1687190521573-337b1250e25e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        id: uuid(),
        title: 'My Second Blog',
        desc: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
        imgUrl:'https://images.unsplash.com/photo-1687201364205-6ec23f194c9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        id: uuid(),
        title: 'My Third Blog',
        desc: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
        imgUrl:'https://images.unsplash.com/photo-1687201364205-6ec23f194c9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        id: uuid(),
        title: 'My Fourth Blog',
        desc: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
        imgUrl:'https://images.unsplash.com/photo-1687201364205-6ec23f194c9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        id: uuid(),
        title: 'My Fifth Blog',
        desc: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
        imgUrl:'https://images.unsplash.com/photo-1687201364205-6ec23f194c9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    }
];


// Get all blogs
app.get('/blogs', (req, res) => {
    res.render('index', { blogs });    
});


// Get all blogs
app.get('/v1/blogs', (req, res) => {
    // This is the v1 api with extra features
    const { pageNo = 1, pageSize = 2 } = req.query;
    const { start, end } = pageUtils.getPageNoAndPageSize(pageNo, pageSize);
    const blogsData = blogs.slice(start,end);
    res.json(blogsData);
});

// Show new form
app.get('/blogs/new', (req, res) => {
    res.render('new');
})

// Create new blog
app.post('/blogs', (req, res) => {
    const { title, imgUrl, desc } = req.body;
    const newBlog = { id: uuid(), title, imgUrl, desc }
    blogs.push(newBlog);
    res.redirect('/blogs');
});

// Show a single blog
app.get('/blogs/:blogId', (req, res) => {
    const { blogId } = req.params; 
    const blog = blogs.find((blog) => blog.id === blogId);
    if (!blog) {
        throw new Error('Blog with this id is not present');
    }
    res.render('show', { blog });
});

// Show edit form
app.get('/blogs/:blogId/edit', (req, res) => {
    const { blogId } = req.params; 
    const blog = blogs.find((blog) => blog.id === blogId);
    if (!blog) {
        throw new Error('Blog with this id is not present');
    }
    res.render('edit', { blog });
});

// Apply partial modification
app.patch('/blogs/:blogId', (req, res) => {
    const { blogId } = req.params;
    const { title, desc, imgUrl } = req.body;
    const newBlogs = blogs.map((blog) => blog.id === blogId ? { ...blog, title: title, desc: desc, imgUrl: imgUrl } : blog);
    blogs = newBlogs;
    res.redirect(`/blogs/${blogId}`);
});

// Delete blog
app.delete('/blogs/:blogId', (req, res) => {
    const { blogId } = req.params;
    const newBlogs = blogs.filter((blog) => blog.id !== blogId);
    blogs = newBlogs;
    res.redirect('/blogs');
});

app.all('*', (req, res) => {
    res.status(404).json({
        status: "FAILED",
        message: 'You are requesting a wrong url!'
    })
});

app.listen(3000,()=>{
  console.log('server started at port 3000');
});