
class ListNode {
    constructor(value, next = null) {
        this.value = value
        this.next = next
    }
}

let node1 = new ListNode(10)
let node2 = new ListNode(20, next = node1)
let node3 = new ListNode(30, next = node2)
let node4 = new ListNode(70, next = node3)


function printNodes(node) {
    let arr = []
    while (node.next != null) {
        arr.push(node.value)
        node = node.next
    }
    return arr
}


function reverseList(node) {
    let arr = []
    while (node.next != null) {
        node = node.next
    }
}
console.log(printNodes(node4))