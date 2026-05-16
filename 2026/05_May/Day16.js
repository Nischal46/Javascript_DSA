// NOTE: TREE DSA 

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  static addChild(parent, child) {
    parent.children.push(child);
  }

  static printParents(node, parent) {
    if (parent === null) {
      console.log(node.data + " -> root");
    }
    else {
      console.log(node.data + " -> " + parent.data);
    }
    for (let child of node.children)
      printParents(child, node);
  }
}

const treeConcept = new Node(3);
const firstnode = new Node(22);

const secondNode = new Node(34);
Node.addChild(treeConcept, firstnode);
Node.addChild(treeConcept, secondNode);

const innerNode = new Node(45);
Node.addChild(firstnode, innerNode);

//Node.printParents(treeConcept, null);

console.log("Logging of tree concept :-> ", treeConcept);


