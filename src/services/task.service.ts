import {Task, taskModel} from "../models/task";

export const TaskService = {
    async createTask(task: Task): Promise<Task> {
     return await taskModel.model.create(task);
    },
    async getAllTasks(): Promise<Task[]> {
     return await taskModel.model.find();
    },
    async getSingleTask(id:string): Promise <Task | undefined | null> {
      return await taskModel.model.findOne({_id: id});
    },
    async deleteTask(id:string): Promise<any> {
      return await taskModel.model.deleteOne({_id: id});
    },
    async updateTask(id:string, task:Task): Promise<any> {
      return await taskModel.model.updateOne({_id: id}, task);
    }
}
