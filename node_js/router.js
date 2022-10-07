import { Router } from "express"; // лписываем все маршруты
import Post from "./post.js";

const router = new Router() // создаем экземпляр роутера

router.post('/user', async (req, res) => { // передаем два параметра// async асинхронное подключение
    try {
        const { name, number, password } = req.body  // req - какие даные получаем
        const user = await Post.create({ name, number, password }) //  подключаю асинхронно res.json(user)  // вывести сообщение на страницу
        res.json(user)  // вывести сообщение на страницу
    } catch (e) {  // вылавливает и выводит ошибки
        res.status(500).json(e)
    }
    // console.log(req.body);
    // console.log(req.query); // в адресную строку передаем query парметры (?ключ=значение&)

    // res.status(200).json('передаем любые данные')  // status(200) - передаю в постаманговорю, что в впорядке

});
router.get('/user/number');
router.get('/user');
router.put('/user/number');
router.delete('/user/number');

export default router  // для импрорта в другой файл

