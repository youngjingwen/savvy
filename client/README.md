# 踢围前端代码

### 开发环境启动

```
cd client
npm install
npm run dev
```

### 生产环境

```
npm run build
node server.js
```

### 问题

开发环境下，`react-hot-loader` 对 `react-router` 的[dynamic routing](https://github.com/ReactTraining/react-router/blob/master/docs/guides/DynamicRouting.md) 对应的组件不起作用，报告警告信息：

```
Warning: [react-router] You cannot change <Router routes>; it will be ignored
```

这好像是个 [bug](https://github.com/gaearon/react-hot-loader/issues/288)
