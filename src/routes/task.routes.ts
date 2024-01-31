import {TaskService} from "../services/task.service";
import {Router, Request, Response} from 'express';
import {Task} from "../models/task";

const router = Router();


router.get('/', async (req: Request, res: Response) => {
    try {
        let tasks = await TaskService.getAllTasks()
        res.status(200).send(tasks);
    } catch (e) {
        res.status(400).send({msg: e})
    }
});

router.get('/:id', async (req: Request, res: Response) => {
    const taskId = req.params.id;
    try {
        const item = await TaskService.getSingleTask(taskId);
        res.send(item);
    } catch (e) {
        res.status(400).send({msg: e})
    }
});

router.post('/', async (req: Request, res: Response) => {
    const task: Task = req.body
    try {
        const itemCreated = await TaskService.createTask(task);
        res.send(itemCreated);
    } catch (e) {
        res.status(400).send({msg: e})
    }
});

router.delete('/:id', async (req: Request, res: Response) => {
    const taskId = req.params.id;
    try {
        await TaskService.deleteTask(taskId)
        res.send({msg: 'Successfuly Deleted Task'}).status(204);
    } catch (e) {
        res.status(400).send({msg: e})
    }
});

router.put('/:id', async (req: Request, res: Response) => {
    const taskId = req.params.id;
    const task: Task = req.body

    try {
        const itemCreated = await TaskService.updateTask(taskId, task)
        res.send(itemCreated);
    } catch (e) {
        res.status(400).send({msg: e})
    }
});


export const taskRouter = router;
