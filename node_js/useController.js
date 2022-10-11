import { json } from "express";
import mongo from "./post.js";
import cup_counter from "./function_cup.js";

class useController {
    async create(req, res) { // передаем два параметра// async асинхронное подключение
        try {  /// создаем пользователя
            const { name, number, password, cup } = req.body  // req - какие даные получаем
            const user = await mongo.create({ name, number, password, cup }) //  подключаю асинхронно
            console.log(cup)
            res.json(user)  // вывести сообщение на страницу
        } catch (e) {  // вылавливает и выводит ошибки
            res.status(500).json(e)
        }
    }
    async getall(req, res) {  /// вывожу всех пользователей из базы
        try {
            const user = await mongo.find();
            return res.json(user);
        } catch (e) {
            res.status(500).json(e);
        }
    }
    async getone(req, res) { /// достаем инфо по номеру 
        try {
            const { number } = req.params;
            const user = await mongo.findOne({ number });
            if (!user) {
                return (res.status(400).json({ message: "номер не найден, создайте пользователя" }));
            }
            let cup = cup_counter(user.cup);
            console.log(cup, "кружек");
            const amoutOfCups = cup + " кружек";
            console.log(amoutOfCups)
            return res.json({ cup, massage: "кружек" });
        } catch (e) {
            res.status(500).json(e);
        }
    }
    async update(req, res) {  ///  не проверял // нужно добавить возможность обновлять несколько json
        try {
            const user = req.body;
            if (!user._id) {
                return res.status(404).json({ massage: "not id" });
            }
            const user_update = await mongo.findByIdAndUpdate(user._id, user, { new: true });
            return res.json(user_update);
        } catch (e) {
            res.status(500).json(e);
        }
    }
    async delete(req, res) {  /// удаляем по имени
        try {
            const { name } = req.params;
            const user = await mongo.findOneAndDelete({ name });
            return res.json("Ok")
        } catch (e) {
            res.status(500).json(e);
        }
    }
}


// class teaController {

//     async create_tea(req, res) {
//         try {
//             const { name } = req.body;
//             const name_tea = await new_tea.create({ name });
//             res.json(name_tea)
//         } catch {
//             res.status(500).json(e);
//         }
//     }
// }




export default new useController();