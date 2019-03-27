// 1，引入express
global.express = require('express');
// 接收post过来的数据
const bodyParser = require('body-parser');
// 数据库操作模块
const mysql = require('mysql');
// 模板引擎
const ejs = require('ejs');
// 2，创建一个web应用
const app = express();
const cookieParser = require('cookie-parser');
const session = require('express-session');
//引入request模块，用于请求新闻的api
var request = require('request');

//开启cookie
let secret = 'moc.newnix.www';
app.use(cookieParser(secret));

// 开启session
app.use(session({
	secret: secret,
	name: 'sessid1810',
	resave: false,
	saveUninitialized: true,
	cookie: {
		maxAge: 24 * 3600000 * 7
	}
}));

//接收post过来的数据
app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(bodyParser.json()); //接收json格式的数据

// 连接到数据库
global.mydb = mysql.createConnection({
	user: 'root',
	password: '123',
	host: 'localhost',
	database: 'xinwen',
	port: 3306
});
mydb.connect();

//设置允许跨域访问该服务器
app.all('*', function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	//Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	res.header('Access-Control-Allow-Methods', '*');
	res.header('Content-Type', 'application/json;charset=utf-8');
	next();
});






// api、json导入到数据库
// const fs =require("fs");
// const jsonFile = './yule.json';//此处为你的json文件
// const jsonObj = JSON.parse(fs.readFileSync(jsonFile));
// 
// (async () => {
//   for (let w of jsonObj.result.data) {
//     try {
//       let addSql = `insert into xinwenxiangqing(title,category,author_name,url,thumbnail_pic_s,thumbnail_pic_s02,thumbnail_pic_s03,date,categoryid) values(?,?,?,?,?,?,?,?,?)`;
//       let addSqlParams = [w.title, w.title, w.category,w.author_name,w.thumbnail_pic_s,w.thumbnail_pic_s02,w.thumbnail_pic_s03,w.date,180110];
//       await insert(addSql, addSqlParams);
//     } catch (error) {
//       console.log(`Error: ${error}`);
//     }
//   }
//   console.log('All completed!');
// })();
// 
// function insert(addSql, addSqlParams) {
//   return new Promise((resolve, reject) => {
//     try {
//       mydb.query(addSql, addSqlParams, function (err, result) {
//         if (err) {
//           console.log('[INSERT ERROR] - ', err.message);
//           reject(err);
//         } else {
//           // console.log('INSERT ID:', result);
//           console.log('INSERT ID:', addSqlParams[0]);
//           resolve();
//         }
//       });
//     } catch (err) {
//       reject(err);
//     }
//   })
// }



//json更新数据库

// const fs = require("fs");
// const jsonFile = './tushu/zhongguowenxue.json'; //此处为你的json文件
// const jsonObj = JSON.parse(fs.readFileSync(jsonFile));
// 
// (async () => {
// 	for (let w of jsonObj.result.data) {
// 		try {
// 			// for(let i=1;i<=300;i++) { var addSql = 'update xinwenxiangqing set neirong=? where xwxqid='+i} 
// 			let addSql = `update xinwenxiangqing set neirong=? where xwxqid=5`;
// 			let addSqlParams = w.sub2;
// 			await insert(addSql, addSqlParams);
// 		} catch (error) {
// 			console.log(`Error: ${error}`);
// 		}
// 	}
// 	console.log('All completed!');
// })();
// 
// function insert(addSql, addSqlParams) {
// 	return new Promise((resolve, reject) => {
// 		try {
// 			mydb.query(addSql, addSqlParams, function(err, result) {
// 				if (err) {
// 					console.log('[INSERT ERROR] - ', err.message);
// 					reject(err);
// 				} else {
// 					// console.log('INSERT ID:', result);
// 					console.log('INSERT ID:', addSqlParams[0]);
// 					resolve();
// 					// insert(addSql,addSqlParams)
// 				}
// 			});
// 		} catch (err) {
// 			reject(err);
// 		}
// 	})
// }



//新闻展示接口
app.get('/xwzhanshi', function(req, res) {
	let sql = 'select * from xinwenxiangqing where categoryid=?'
	mydb.query(sql, req.query.categoryid, function(err, result) {
		if (err) {
			console.log(err);
			return;
		} else {
			// console.log(typeof(result))
			res.json(
				{result}
			)
		}
	})
})

//新闻详情接口
app.get('/xwxiangqing', function(req, res) {
	let sql = 'select * from xinwenxiangqing where uniquekey=?'
	mydb.query(sql, req.query.uniquekey, function(err, result) {
		if (err) {
			console.log(err);
			return;
		} else {
			// console.log(typeof(result))
			res.json(
				result
			)
		}
	})
})


//商品目录
app.get('/bookmulu', function(req, res) {
	let sql = 'select * from bookmulu'
	mydb.query(sql, req.query.cataid, function(err, result) {
		if (err) {
			console.log(err);
			return;
		} else {
			console.log(typeof(result))
			res.json(
				result
			)
		}
	})
})


//商品分类展示接口
app.get('/spzhanshi', function(req, res) {
	let sql = 'select * from book where cataid=?'
	mydb.query(sql, req.query.cataid, function(err, result) {
		if (err) {
			console.log(err);
			return;
		} else {
			console.log(typeof(result))
			res.json(
				result
			)
		}
	})
})


// 视频数据
app.get('/video', function(req, res) {
	let sql = 'select * from videos'
	mydb.query(sql, function(err, result) {
		if (err) {
			console.log(err);
			return;
		} else {
			console.log(typeof(result))
			res.json(
				result
			)
		}
	})
})

//视频详情接口
app.get('/videoplay', function(req, res) {
	let sql = 'select * from videos where id=?'
	mydb.query(sql, req.query.id, function(err, result) {
		if (err) {
			console.log(err);
			return;
		} else {
			console.log(typeof(result))
			res.json(
				result
			)
		}
	})
})



//商品商品详情接口
app.get('/spxiangqing', function(req, res) {
	let sql = 'select * from book where bookid=?'
	mydb.query(sql, req.query.bookid, function(err, result) {
		if (err) {
			console.log(err);
			return;
		} else {
			console.log(typeof(result))
			res.json(
				result
			)
		}
	})
})

//用户注册接口
app.post('/userregist', function(req, res) {
	let userid = req.body.userid;
	let username = req.body.username;
	let phonenum = req.body.phonenum;
	let userpasswd = req.body.userpasswd;
	mydb.query('select * from user where userid=?', phonenum, function(err, result) {
		if (err) {
			console.log(err);
			return;
		}
		if (result.length) {
			res.json({
				r: 'userid_has_exists'
			});
			return;
		} else {
			mydb.query('insert into user(username,userpasswd,regtime,phonenum,userid) value(?,?,now(),?,?)', [username,
				userpasswd, phonenum, userid
			], function(req, res) {
				if (err) {
					console.log(err)
					return;
				}
				res.json({r:'ok'});
			});
		}
	})
})

//用户登录post路由
app.post('/userlogin', (req, res) => {
	let userLoginData = req.body;
	let sql = 'select * from user where phonenum = ?';
	mydb.query(sql, [userLoginData.phonenum], (err, result) => {
		//检查账号是否存在
		if (result.length==0){
			res.json({
				r: 'phonenum_not_found'
			});
			return;
		}
		//检查密码是否正确
		if (result[0].userpasswd!= userLoginData.userpasswd) {
			res.json({
				r: 'userpasswd_err'
			});
			return;
		}
		req.session.phonenum = result[0].phonenum;
		req.session.username = result[0].username;
		req.session.head=result[0].head;
		//登录成功
		res.json({
			r: 'ok'
		});
	});
})






//模板引擎设置
app.engine('html', ejs.renderFile); //自定义模板引擎html
app.set('views', 'myviews'); //模板文件所在的路径
app.set('view engine', 'html'); //注册模板引擎到express


// 引入新闻api
// app.get("/test.php",function(req,res){
// 	var testurl="http://192.168.7.192:81/test.php"
// 	request(testurl,function(err,data,body){
// 	   if (!err && response.statusCode == 200) {
//     }
// 		res.send(body)
// 	})
// });
// 


app.get('/', function(req, res) {
	res.sendfile(__dirname + '/lssdjt.json')
})
// 历史上的今天api处理
// app.get("/",function(req,res){
// 	var testurl="http://api.juheapi.com/japi/toh"
// 	
// 	request(testurl+"?key=daedbd787eb470b59d1e9d778108b50d"+"&v="+req.query.v+"&month="+req.query.month+"&day="+req.query.day,function(err,data,body){
// 	   if (!err && res.statusCode == 200) {
//     }
// 		res.send(body)
// 	})
// })


//静态资源托管
app.use(express.static(__dirname + '/static'));

//端口监听
app.listen(81, () => {
	console.log('服务器已启动，端口为81');
});
