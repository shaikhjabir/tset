
import { Router, RequestHandler } from "express";
// import { user, person } from "../../shared/db/model";
import { getTransaction } from "../../shared/lib/getTransaction";
import { Transaction } from "sequelize";
import chalk from "chalk";
// import { EventEmitter } from "events";

const createData: RequestHandler = async (req, res, next) => {
    const transaction: Transaction = await getTransaction();
    // const { userId, userName, email, password } = req.body;
    // await user.create({ userId, userName, email, password }, {
    //     transaction
    // })
    const { personId, name } = req.body;
    console.log(chalk.red.underline("we are chalk "))
    // await person.create({ personId, name }, {
    //     transaction
    // })
    // transaction.commit();
    // res.json({ success: true })
    transaction.commit();
    res.end();

}
const getData: RequestHandler = async (_req, res, next) => {
    // let data: Array<Object>;
    // const data = await person.findAll({
    //     include: [user]
    // });
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("<h2>we are success</h2>");
    res.end();

}

const router = Router();

router.post('', createData)
router.get('', getData)



export { router };