//NOTE tree concept by folder structure..

class Node {
  constructor(name, isFile = false) {
    this.name = name;
    this.isFile = isFile;
    this.children = [];
  }

  append(childNode) {
    if (!this.isFile) this.children.push(childNode);
  }
}

const root = new Node("root");
const firstNode = new Node("Downloads");
const secondNode = new Node("Documents");

root.append(firstNode);
root.append(secondNode);

const innerFirstNode = new Node("Images");

const firstImage = new Node("firstPic.png");
const secondImage = new Node("secondPic.png");

const dcim = new Node(".DCIM");

innerFirstNode.append(firstImage);
innerFirstNode.append(secondImage);
innerFirstNode.append(dcim);

firstNode.append(innerFirstNode);
console.dir(root, { depth: Infinity });

console.log("\nReviewing Tree structure in folder\n");
for (let item of root.children) {
  console.log(`${!item.name.includes(".png") ? "Folder" : "File"}`, item.name);
  if (item.children) {
    for (let nestedItem of item.children) {
      console.log(
        `  ${!nestedItem.name.includes(".png") ? "Folder" : "File"}`,
        nestedItem.name
      );
      if (nestedItem.children) {
        for (let innernested of nestedItem.children) {
          console.log(
            `    ${!innernested.name.includes(".png") ? "Folder" : "File"}`,
            innernested.name
          );
        }
      }
    }
  }
}
