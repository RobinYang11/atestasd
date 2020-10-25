let obj ={
  name:"YANG",
  age:22,
  hobby:"geme"
}

for(var i in obj){
  console.log(i +":"+obj[i])  
}

// 返回Obj value数组
Object.keys(obj).map(i=>{
  console.log(i+":"+obj[i]);
})