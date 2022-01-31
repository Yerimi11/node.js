const http = require('http'); // http : node.js가 제공하는 모듈

const hostname = '127.0.0.1';
const port = 1337;

http.createServer((req, res) => { // http라는 모듈에 createServer함수를 호출하면
 res.writeHead(200, { 'Content-Type': 'text/plain' });
 res.end('Hello yerim~\n'); // 응답코드 // http의 서버라고하는 객체를 리턴하는데
}).listen(port, hostname, () => { // 그 객체는 listen이라는 메소드를 가지고 있기 때문에 호출 가능
 console.log(`Server running at http://${hostname}:${port}/`);
});
