const express = require('express');
const app = express();

// Import route files
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');
const orderRoutes = require('./routes/orderRoutes');

// Use the routes with your Express app
app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.use('/cart', cartRoutes);
app.use('/orders', orderRoutes);

app.get('/',(req,res,next)=>{
    res.send("backend is running");
})


app.listen(
    5000,
    ()=> console.log("backend is running")
)