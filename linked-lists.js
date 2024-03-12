// Linked List class

class LinkedList {

    constructor(){

        this.head = null;
        this.tail = null;
        this.size = 0;
    };

    traverse(condition = null, index = Infinity){

        let prev = null;
        let current = this.head;
        let i = -1;

        while((current !== condition) && (i < index)){
            i++;
            prev = current;
            current = current.next;
        };

        return {prev, current};
    };

    append(value) {

        if(this.head === null) {
            this.prepend(value);
            return;
        };

        let {prev} = this.traverse();
        prev.next = new Node(value, null);
        this.tail = prev.next;
        this.size ++;
        return; 
    };

    prepend(value){

        if(this.head === null) {

            this.head =  new Node(value, null);
            this.tail = this.head;
            this.size ++;
            return;
        }

        let {prev} = this.traverse(this.head.next);
        this.head = new Node(value, prev);
        this.size ++;
    };

    at(index){

        if(index > this.size - 1) return null;

        let {prev} = this.traverse(null, index);
        return prev;
    };

    pop() {

        if(this.size === 1) {
           this.removeAt(0);
           return;
        }

        let {prev} = this.traverse(null, this.size -2);
        prev.next = null;
        this.tail = prev;
        this.size --;
    };

    shift(){

        if(this.size === 1) {
           this.removeAt(0);
           return;
        };

        this.head = this.head.next;
        this.size --;
        return;
    };

    contains(value, find = false){

        if(!value) return console.error(new Error("Please enter a value"));

        let current = this.head;
        let i = -1;

        while(current !== null){

            i++;

            if(value === current.value) return find ? i : true;
           
            current = current.next;
        };

        return find ? null : false;
    };

    find(value){

       return this.contains(value, find);
    };

    toString() {

        let current = this.head;

        let str = "";

        while(current !== null){

            str += `(${current.value}) --> `;

            current = current.next;
        };
        
        return str += "null";
    };

    insertAt(value, index){

        if(!(value && index)) {
            return console.error(new Error("You need 'value' and 'index' arguments"));
        };

        if(index > this.size - 1) return null;
        
        let {prev, current} = this.traverse(null, index - 1);
        
        prev.next = new Node(value, current);
        this.size ++;
    };

    removeAt(index){

        if(index > this.size - 1) return null;

        if(this.size === 1) {

            this.head = null;
            this.tail = null;
            this.size --;
            return;
        };

        if(index === 0) {
            this.shift();
            return;
        };

        if(index === this.size - 1){
            this.pop();
            return;
        };

        let {prev, current} = this.traverse(null, index - 1);
        prev.next = current.next;
        this.size --;
    };
};


// Node class

class Node {

    constructor(value, nextNode){

        this.value = value || null,
        this.next = nextNode || null
    };
};