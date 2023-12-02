require('dotenv').config() //импортируем файл env
const express = require('express'); 
const userRouter = require('./routes/routes');
const taskRouter = require('./routes/tasks.routes');

// const cors = require('cors'); 
// const cookieParser = require('cookie-parser')


const PORT = process.env.PORT || 5000;  //обращаемся к файлу env через process

const app = express()

app.use(express.json());
app.use('/api', userRouter);
app.use('/api', taskRouter);




const start = async () => {
    try {
        app.listen(PORT, () => console.log(`Server started on PORT = ${PORT}`))
    } catch (err) {
        console.log(err);
    }
}

start();






