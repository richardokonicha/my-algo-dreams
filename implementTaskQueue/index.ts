import Queue from "./queue";

const tasks = new Queue()

tasks.enqueue(500)
tasks.enqueue("corolla")

tasks.enqueue("motorolla")

tasks.enqueue("telsa")



console.log(tasks)

tasks.dequeue()
tasks.dequeue()
tasks.dequeue()

console.log(tasks)

