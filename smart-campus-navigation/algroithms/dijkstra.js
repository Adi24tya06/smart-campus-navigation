function dijkstra(graph,start,end){

let distances={}
let previous={}
let visited={}

for(let node in graph){
distances[node]=Infinity
previous[node]=null
}

distances[start]=0

while(true){

let closest=null

for(let node in distances){
if(!visited[node] && (closest===null || distances[node]<distances[closest])){
closest=node
}
}

if(closest===null) break
if(closest==end) break

visited[closest]=true

for(let neighbor in graph[closest]){

let newDist=distances[closest]+graph[closest][neighbor]

if(newDist<distances[neighbor]){
distances[neighbor]=newDist
previous[neighbor]=closest
}

}

}

let path=[]
let current=end

while(current!=null){
path.unshift(current)
current=previous[current]
}

return path
}