

export default class Queue {

  queue: Array<number | string>

  constructor() {
    this.queue = []
  }

  enqueue(value: number | string) {
    return this.queue.push(value)
  }

  dequeue() {
    return this.queue.shift()
  }

  peek() {
    if (!this.queue) return null
    return this.queue[0]
  }

  size() {
    return this.queue.length
  }


}