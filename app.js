var createError = require('http-errors'); // 导入 http-errors 模块，用于创建 HTTP 错误
var express = require('express'); // 导入 express 模块，用于创建 Web 应用
var path = require('path'); // 导入 path 模块，用于处理和转换文件路径
var cookieParser = require('cookie-parser'); // 导入 cookie-parser 模块，用于解析 Cookie
var logger = require('morgan'); // 导入 morgan 模块，用于日志记录

var indexRouter = require('./routes/index'); // 导入路由模块，处理根路径的请求
var usersRouter = require('./routes/users'); // 导入路由模块，处理 /users 路径的请求
const UserRouter = require('./routes/admin/UserRouter');

var app = express(); // 创建一个 Express 应用实例

// view engine setup
app.set('views', path.join(__dirname, 'views')); // 设置视图目录
app.set('view engine', 'jade'); // 设置视图引擎为 Jade

app.use(logger('dev')); // 使用 morgan 记录日志，仅在开发环境中
app.use(express.json()); // 解析 JSON 请求体
app.use(express.urlencoded({ extended: false })); // 解析 URL 编码的请求体
app.use(cookieParser()); // 使用 cookie-parser 解析 Cookie
app.use(express.static(path.join(__dirname, 'public'))); // 设置静态文件目录

app.use('/', indexRouter); // 使用 indexRouter 处理根路径的请求
app.use('/users', usersRouter); // 使用 usersRouter 处理 /users 路径的请求
// app.use('/adminapi')


/**
 * /adminapi/*-后台系统用的
 * /webapi/*-企业官网用的
 */
app.use(UserRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404)); // 如果请求的路径不存在，创建一个 404 错误并传递给错误处理中间件
});



// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message; // 设置错误信息
  res.locals.error = req.app.get('env') === 'development' ? err : {}; // 在开发环境中，设置错误对象

  // render the error page
  res.status(err.status || 500); // 设置响应状态码
  res.render('error'); // 渲染错误页面
});

module.exports = app; // 导出应用实例，以便在其他地方使用
