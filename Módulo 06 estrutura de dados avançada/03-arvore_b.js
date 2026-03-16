//Implemente uma árvore B com um grau mínimo de 3 e insira os seguintes valores: 10, 20, 5, 6, 12, 30, 7, 17. Mostre a estrutura da árvore após cada inserção.
//○ Adicione a funcionalidade de remoção e demonstre a remoção dos valores 6 e 17.

class BTreeNode {
  constructor(t, leaf = false) {
    this.t = t;
    this.leaf = leaf;
    this.keys = [];
    this.children = [];
  }

  traverse() {
    let result = [];

    for (let i = 0; i < this.keys.length; i++) {
      if (!this.leaf) {
        result = result.concat(this.children[i].traverse());
      }

      result.push(this.keys[i]);
    }

    if (!this.leaf) {
      result = result.concat(this.children[this.keys.length].traverse());
    }

    return result;
  }

  insertNonFull(k) {
    let i = this.keys.length - 1;

    if (this.leaf) {
      this.keys.push(0);

      while (i >= 0 && this.keys[i] > k) {
        this.keys[i + 1] = this.keys[i];
        i--;
      }

      this.keys[i + 1] = k;
    } else {
      while (i >= 0 && this.keys[i] > k) {
        i--;
      }

      i++;

      if (this.children[i].keys.length === 2 * this.t - 1) {
        this.splitChild(i, this.children[i]);

        if (this.keys[i] < k) {
          i++;
        }
      }

      this.children[i].insertNonFull(k);
    }
  }

  splitChild(i, y) {
    let t = this.t;
    let z = new BTreeNode(t, y.leaf);

    z.keys = y.keys.splice(t);

    let middle = y.keys.pop();

    if (!y.leaf) {
      z.children = y.children.splice(t);
    }

    this.children.splice(i + 1, 0, z);
    this.keys.splice(i, 0, middle);
  }
}

class BTree {
  constructor(t) {
    this.t = t;
    this.root = null;
  }

  insert(k) {
    if (this.root == null) {
      this.root = new BTreeNode(this.t, true);
      this.root.keys.push(k);
    } else {
      if (this.root.keys.length === 2 * this.t - 1) {
        let s = new BTreeNode(this.t, false);

        s.children[0] = this.root;

        s.splitChild(0, this.root);

        let i = 0;

        if (s.keys[0] < k) {
          i++;
        }

        s.children[i].insertNonFull(k);

        this.root = s;
      } else {
        this.root.insertNonFull(k);
      }
    }
  }

  print(node = this.root, level = 0) {
    if (node == null) return;

    console.log("Nivel", level, ":", node.keys);

    for (let child of node.children) {
      this.print(child, level + 1);
    }
  }
}

// TESTE

let tree = new BTree(3);

let valores = [10, 20, 5, 6, 12, 30, 7, 17];

for (let v of valores) {
  console.log("\nInserindo:", v);

  tree.insert(v);

  tree.print();
}
