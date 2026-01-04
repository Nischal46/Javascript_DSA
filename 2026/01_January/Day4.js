//NOTE: Graph data structure

class Graph {
    constructor() {
        this.adjList = {};
    }

    addUser(user) {
        if (!this.adjList[user]) {
            this.adjList[user] = [];
        }
    }

    addFriend(u1, u2){
        this.adjList[u1].push(u2);
        this.adjList[u2].push(u1);
    }
}

const social = new Graph();
["A", "B", "C", "D", "E"].forEach((u) => social.addUser(u));


social.addFriend("A", "B");
social.addFriend("B", "C");
social.addFriend("C", "D");
social.addFriend("A", "E");

function recommendFriends(graph, user) {
    const directFriends = new Set(graph.adjList[user]);
    const recommendations = new Set();

    for (let friend of directFriends) {
        for (let foaf of graph.adjList[friend]) {
            if (foaf !== user && !directFriends.has(foaf)) {
                recommendations.add(foaf);
            }
        }
    }

    return Array.from(recommendations);
}

console.log("Friend Suggestions for A:");
console.log(recommendFriends(social, "A"));
