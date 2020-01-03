class TskService {
    Tasks:indivtask[] = [
        {
          name: "Do CVWO Task",
          done: true,
          id: 1,
        },
        {
          name: "Play Celeste",
          done: false,
          tag: ["Important"],
          id: 2
        },
        {
          name: "Sleep",
          done: false,
          id: 3
        }
    ];  

    
    addTask(newTask:indivtask) {
        this.Tasks.push(newTask);
    }

    deleteTask(oldTask:indivtask) {
        this.Tasks.splice(this.Tasks.indexOf(oldTask), 1);
    }

    getTask() {
    }
    
    updateTask() {
    }
}

export interface indivtask{
    name: string;
    done: boolean;
    tag?: string[];
    date?: Date;
    id: number;
}

export const TaskService = new TskService();
