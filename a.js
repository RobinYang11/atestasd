let obj ={
  name:"YANG",
  age:22,
  hobby:"geme"
}

// 对象属性 重新赋值
obj["age"] =33;
// 对象添加属性 并赋值
obj["addr"] = "海原县"
// 给对象属性 重新赋值
obj.age =22;
// 善处对象属性
delete obj.addr

for(var i in obj){
  console.log(i +":"+obj[i])  
}

/*
  * key value
    Object.keys(obj) value :返回一个数组
  * ["YANG",22,"geme"]
*/
Object.keys(obj).map(i=>{
  console.log(i+":"+obj[i]);
})

