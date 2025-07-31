// Enum for Task Status
enum TaskStatus {
  Pending = "Pending",
  InProgress = "InProgress",
  Completed = "Completed"
}

// Interface for Task
interface Task {
  id: number;
  title: string;
  description?: string; // optional property
  status: TaskStatus;
  dueDate: Date;
}

// Array of tasks
const tasks: Task[] = [
  {
    id: 1,
    title: "Complete TypeScript assignment",
    description: "Finish coding exercises",
    status: TaskStatus.Pending,
    dueDate: new Date("2025-08-01"),
  },
  {
    id: 2,
    title: "Review PR",
    status: TaskStatus.InProgress,
    dueDate: new Date("2025-08-02"),
  },
  {
    id: 3,
    title: "Prepare meeting slides",
    description: "Slides for team meeting",
    status: TaskStatus.Completed,
    dueDate: new Date("2025-07-30"),
  },
  {
    id: 4,
    title: "Write documentation",
    status: TaskStatus.Pending,
    dueDate: new Date("2025-08-05"),
  },
];

// Filter out pending tasks
const pendingTasks = tasks.filter(task => task.status === TaskStatus.Pending);

// Print pending tasks
console.log("Pending Tasks:");
console.log(pendingTasks);
