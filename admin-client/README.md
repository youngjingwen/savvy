# 踢围后台管理系统前端实现

### 开发环境启动

```
cd admin-client
npm install
npm run dev
```

### 生产环境

```
cd admin-client
npm run build
node server.js
```

### 问题

开发环境下，`react-hot-loader` 对 `react-router` 的[dynamic routing](https://github.com/ReactTraining/react-router/blob/master/docs/guides/DynamicRouting.md) 对应的组件不起作用，报告警告信息：

```
Warning: [react-router] You cannot change <Router routes>; it will be ignored
```

这好像是个 [bug](https://github.com/gaearon/react-hot-loader/issues/288)
