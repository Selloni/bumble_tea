import express from 'express'
import mongoose from 'mongoose'
import router from './router.js';
// import cors from 'cors'  // защита браузеров
import * as dotenv from 'dotenv';
dotenv.config();//  достаем даные из другого файла

const db_url = process.env.BD;  /// тут скрыта ссылка для базы данных
const PORT = 5010;
const app = express();
app.use(express.json());  //  явно указываем что мы ожидаем json пакет
app.use('/api', router)  // регестрируем маршрут  -- отрабатывает по api
// var cors = require('cors')
// app.use(cors())  // инициализируем cors
async function startApp() {
    try {
        await mongoose.connect(db_url, { useUnifiedTopology: true, useNewUrlParser: true })
        app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT)) // прослушивать 5000 порт
    } catch (e) {
        console.log(e)
    }
}

startApp()
