//Implemente uma árvore B+ com grau mínimo de 2 e insira os valores: 15, 5, 25, 10, 20, 30, 35.
//○ Mostre a estrutura da árvore após cada inserção, destacando a organização dos nós internos e folhas

class Node {
  constructor(leaf = false) {
    this.leaf = leaf;
    this.keys = [];
    this.children = [];
    this.next = null;
  }
}

class BPlusTree {
  constructor() {
    this.root = new Node(true);
    this.order = 2;
  }

  insert(value) {
    let root = this.root;

    if (root.keys.length === 3) {
      let newRoot = new Node(false);

      newRoot.children.push(root);

      this.split(newRoot, 0);

      this.root = newRoot;
    }

    this.insertNonFull(this.root, value);
  }

  insertNonFull(node, value) {
    if (node.leaf) {
      node.keys.push(value);

      node.keys.sort((a, b) => a - b);
    } else {
      let i = node.keys.length - 1;

      while (i >= 0 && value < node.keys[i]) {
        i--;
      }

      i++;

      if (node.children[i].keys.length === 3) {
        this.split(node, i);

        if (value > node.keys[i]) {
          i++;
        }
      }

      this.insertNonFull(node.children[i], value);
    }
  }

  split(parent, index) {
    let node = parent.children[index];

    let newNode = new Node(node.leaf);

    let mid = Math.floor(node.keys.length / 2);

    if (node.leaf) {
      newNode.keys = node.keys.splice(mid);

      newNode.next = node.next;
      node.next = newNode;

      parent.keys.splice(index, 0, newNode.keys[0]);
    } else {
      newNode.keys = node.keys.splice(mid + 1);

      parent.keys.splice(index, 0, node.keys.pop());

      newNode.children = node.children.splice(mid + 1);
    }

    parent.children.splice(index + 1, 0, newNode);
  }

  print(node = this.root, level = 0) {
    console.log("Nivel", level, ":", node.keys);

    if (!node.leaf) {
      for (let child of node.children) {
        this.print(child, level + 1);
      }
    }
  }
}

// TESTE

let tree = new BPlusTree();

let valores = [15, 5, 25, 10, 20, 30, 35];

for (let v of valores) {
  console.log("\nInserindo:", v);

  tree.insert(v);

  tree.print();
}
