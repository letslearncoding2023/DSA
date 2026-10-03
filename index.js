// let stack = []

// stack.push(10)
// stack.push(20)

// stack.push(10)
// stack.push(20)

// stack.push(30)
// stack.push(40)

// stack.push(50)
// stack.push(60)
// console.log(stack)

// stack.pop()
// console.log(stack)

// let top = stack[stack.length - 1];

// console.log(top);


// if (stack.length === 0) {
//     console.log("Stack is empty");
// } else {
//     console.log("Stack is not empty");
// }



// class Stack {
//     constructor() {
//         this.items = [];
//     }

//     // Add element
//     push(element) {
//         this.items.push(element);
//     }

//     // Remove element
//     pop() {
//         if (this.isEmpty()) {
//             return "Stack is empty";
//         }

//         return this.items.pop();
//     }

//     // View top element
//     peek() {
//         if (this.isEmpty()) {
//             return "Stack is empty";
//         }

//         return this.items[this.items.length - 1];
//     }

//     // Check empty
//     isEmpty() {
//         return this.items.length === 0;
//     }

//     // Get size
//     size() {
//         return this.items.length;
//     }

//     // Display stack
//     display() {
//         console.log(this.items);
//     }
// }

// let stack = new Stack();

// stack.push(10);
// stack.push(20);
// stack.push(30);

// stack.display();



// let stack = new Stack();

// stack.push(10);
// stack.push(20);
// stack.push(30);

// stack.display();



class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
        console.log(element + " pushed");
    }

    pop() {
        if (this.isEmpty()) {
            console.log("Stack Underflow");
            return;
        }

        let removed = this.items.pop();
        console.log(removed + " popped");
        return removed;
    }

    peek() {
        if (this.isEmpty()) {
            console.log("Stack is empty");
            return;
        }

        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    display() {
        console.log("Stack:", this.items);
    }
}

// Create Stack
let stack = new Stack();

// Push
stack.push(10);
stack.push(20);
stack.push(30);

// Display
stack.display();

// Peek
console.log("Top:", stack.peek());

// Pop
stack.pop();

// Display again
stack.display();

// Size
console.log("Size:", stack.size());