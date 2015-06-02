function Node(val) {
  this.val = val;
  this.next = null;
}

var n = new Node(0);
var head = n;

var current = n;
for (var i = 1; i <= 10; i++) {
  current.next = new Node(i);
  current = current.next;
}

function reverse(node) {
  var prev = null;
  var current = node;
  var next;
  while (current !== null)
  {
    next = current.next;  
    current.next = prev;   
    prev = current;
    current = next;
  }
  head = prev;
}

console.log(head);
reverse(n);
console.log(head);

// Normal
// {val: 0, next: {val:1, next: {val: 2, next: {val:3, next: {val: 4, next: null}}}}}

// Reversed
// {val: 4, next: {val: 3, next: {val:2, next: {val: 1, next: {val: 0, next: null}}}}}
