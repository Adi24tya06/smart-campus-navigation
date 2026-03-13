// Campus connection table
const campusData = [

["MainGate","1",200],
["MainGate","3",500],

["1","cc",50],

["cc","6,7,8",130],

["6,7,8","9,10,11,12",60],

["9,10,11,12","15",150],

["15","13",10],

["13","14",100],

["14","17",10],

["17","31",800],

["31","30,29,28,27,26,25",100],

["31","32,33,34",120],

["34","36,37,38",80]

];


// Build graph automatically
function buildGraph(data){

const graph={}

data.forEach(row=>{

let start=row[0]
let ends=row[1].split(",")
let dist=row[2]

if(!graph[start]) graph[start]={}

ends.forEach(end=>{

if(!graph[end]) graph[end]={}

graph[start][end]=dist
graph[end][start]=dist

})

})

return graph
}

const campusGraph = buildGraph(campusData)


// Route function
function findRoute(){

let start=document.getElementById("start").value
let end=document.getElementById("end").value

if(!campusGraph[start]){
document.getElementById("result").innerText="Start location not found"
return
}

if(!campusGraph[end]){
document.getElementById("result").innerText="Destination not found"
return
}

let path=dijkstra(campusGraph,start,end)

document.getElementById("result").innerText=
"Shortest Path: "+path.join(" → ")

}