import { Router } from "express"; // лписываем все маршруты
import useController from "./useController.js"

const router = new Router() // создаем экземпляр роутера

router.post('/user', useController.create)  /// можно было засунь функцию, но следим за декомпозицией

// console.log(req.body);
// console.log(req.query); // в адресную строку передаем query парметры (?ключ=значение&)

// res.status(200).json('передаем любые данные')  // status(200) - передаю в постаманговорю, что в впорядке
router.get('/user/number/:number', useController.getone);
// router.get('/user/number/:number/:count', useController.getone);
router.put('/user/update', useController.update);

router.get('/user/number', useController.getall);
router.delete('/user/number/:name', useController.delete);

export default router  // для импрорта в другой файл

