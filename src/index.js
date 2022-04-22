// bin tree 2
//dsjhbskjdbcv
const w = (arg) => console.log(arg);

class Node {
  constructor(val) {
    this.key = val;
    this.left = null;
    this.right = null;
  }
}

let n;
//        1
//       /  \
//     2     3
//   /  \
//  4   5
//  /
// 6
const loadTree = () => {
  n = new Node(1);

  n.left = new Node(2);
  n.right = new Node(3);

  n.left.left = new Node(4);
  n.left.right = new Node(5);

  n.left.left.left = new Node(6);
};

loadTree();

const traverseTree = (node) => {
  // base case
  if (node == null) return;

  traverseTree(node.left);
  w(node.key);
  traverseTree(node.right);
};

traverseTree(n);

console.log("aaaaaaa");
