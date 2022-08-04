// Singly Linked Lists

/**
 * In a singly linked list, each node contains exactly one reference to the next node.
 */

// implementation

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    insertAtHead(value) {
        this.head = new Node(value, this.head);
        return this;
    }
    insertAtTail(value) {
        let newNode = new Node(value);
        let tail = this.head;

        if (this.head) {
            while (tail.next) {
                tail = tail.next;
            }
            tail.next = newNode;
        } else {
            this.head = newNode;
        }
        return this;
    }
    find(isMatch) {
        let index = 0;
        let node = this.head;

        while (node) {
            if (isMatch(node, index)) {
                return node;
            }
            index++;
            node = node.next;
        }
        return null;
    }
    length() {
        let counter = 0;
        let node = this.head;

        while (node) {
            counter++;
            node = node.next;
        }
        return counter;
    }
}

const linkedList = new LinkedList();
linkedList.insertAtTail(5);
linkedList.insertAtTail(6);
linkedList.insertAtTail(7);
linkedList.insertAtTail(8);

// function reverseLinkedList(list) {
//     const reversedList = new LinkedList();
//     let node = list.head;

//     while (node) {
//         reversedList.insertAtHead(node.value);
//         node = node.next;
//     }
//     return reversedList;
// }

function reverseLinkedList(list) {
    const node = list.head;

    if (!node) return;

    let previous = null;
    let current = node;
    let next = null;

    while (current) {
        // first temporarily store all of the elements in the linked list other than the current node.
        next = current.next;
        // assign the reference of the current node the previous node. The first iteration will assign this to null, creating a new 'tail' node.
        current.next = previous;
        // reassign the previous node to the current node, which will now be referencing the previous node.
        previous = current;
        // reassign the current node to the remaining elements in the linked list, and continue iterating until the while loop conditional statement is falsy.
        current = next;
    }
    return previous;
}

console.log(reverseLinkedList(linkedList));