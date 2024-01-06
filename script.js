//fs module
// var fs=require('fs');
// fs.writeFileSync('first.txt',"Goood Morning,Welcome to the first seesion of the node module")
// var newRead=fs.readFileSync('first.txt','utf-8')
// console.log(newRead)



//path module
// var path=require('path')
// var newPath='/first.txt'
// var absPath='/Users'
// console.log(path.basename(newPath))
// console.log(path.extname(newPath))
// console.log(path.isAbsolute(newPath))
// console.log(path.basename(newPath))


//buffer module
// var bufferNew=Buffer.from("hello world")
// var bufferTwo=Buffer.from("12345")
// bufferTwo.copy(bufferNew,4)
// console.log(bufferNew.toString())
// console.log(Buffer.concat([bufferNew,bufferTwo]).toString())
// console.log(Buffer.compare(bufferNew,bufferTwo))
// console.log(bufferNew.equals(bufferTwo))


//http
// var http=require('http')
// http.createServer(function(req,res){
    // res.writeHead(200,{'Content-Type':'text/plaintext'})
//     res.write("hello")
// }).listen(3000,()=>{console.log("server running")})


//url
// var url=require('url')
// var urlAddress='http://localhost:8000/index.html?year=2023';
// var parsedAddress=url.parse(urlAddress,false,true)
// console.log(parsedAddress.host)
// console.log(parsedAddress.pathname)
// console.log(parsedAddress.search)


//util
// var util=require('util')
// var textMessage="hello, my name is %s,and im %d year old"
// console.log(textMessage,"sumith",21)

//os
var os=require('os')
console.log("platform is",os.platform())
console.log("Architecture is",os.arch())