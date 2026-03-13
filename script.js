// Graph of campus paths (example distances)
const campusGraph = {

Gate: {
Library: 4,
Admin: 2
},

Library: {
Hostel: 3,
Auditorium: 5
},

Admin: {
Library: 1,
Auditorium: 6
},

Hostel: {
Auditorium: 2
},

Auditorium: {}

};

// Dijkstra shortest path
function shortestPath(graph, start, end){

let distances = {};
let visited = {};
let previous = {};

for (let node in graph){
distances[node] = Infinity;
previous[node] = null;
}

distances[start] = 0;

while (true){

let closestNode = null;

for (let node in distances){
if (!visited[node] && (closestNode === null || distances[node] < distances[closestNode])){
closestNode = node;
}
}

if (closestNode === null) break;
if (closestNode === end) break;

visited[closestNode] = true;

for (let neighbor in graph[closestNode]){

let newDist = distances[closestNode] + graph[closestNode][neighbor];

if (newDist < distances[neighbor]){
distances[neighbor] = newDist;
previous[neighbor] = closestNode;
}

}

}

let path = [];
let current = end;

while(current){
path.unshift(current);
current = previous[current];
}

return path;

}

// Button function
function findRoute(){

let start = document.getElementById("start").value;
let end = document.getElementById("end").value;

if(start === end){
document.getElementById("result").innerText =
"You are already at " + start;
return;
}

let route = shortestPath(campusGraph, start, end);

document.getElementById("result").innerText =
"Shortest Path: " + route.join(" → ");

}