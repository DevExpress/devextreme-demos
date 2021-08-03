import { Injectable } from '@angular/core';

export class Task {
    subject: string;
    priority: number;
}

let tasks: Task[] = [{
    subject: "Choose between PPO and HMO Health Plan",
    priority: 3
}, {
    subject: "Non-Compete Agreements",
    priority: 0
}, {
    subject: "Comment on Revenue Projections",
    priority: 1
}, {
    subject: "Sign Updated NDA",
    priority: 2
}, {
    subject: "Submit Questions Regarding New NDA",
    priority: 3
}, {
    subject: "Rollout of New Website and Marketing Brochures",
    priority: 3
}];

@Injectable()
export class Service {
    getTasks(): Task[] {
        return tasks;
    }
}