import { Schema, Model, model, Document } from 'mongoose';

export interface Task extends Document {
    id: string,
    title: string,
    description:string,
    assignee: string,
    isCompleted: boolean
}


const TaskSchema: Schema = new Schema(
    {
        title: String,
        description:String,
        assignee: String,
        isCompleted: Boolean
    },
    {
        timestamps: true
    }
)

export class TaskModel {
    private _model: Model<Task>;

    constructor() {
        this._model = model<Task>('Task', TaskSchema);
    }

    get model(): Model<Task> {
        return this._model;
    }
}

export const taskModel = new TaskModel();

