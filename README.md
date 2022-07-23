## 概述

2022 年 7 月创建的基于 Vue3.2+TypeScript 的工程，此工程的主要目的：

- Vue3搭建一套完整架构
- 将开发中可能用到的工具或样式等进行统一管理

## 启动方式

进入项目目录执行
```sh
npm install
npm run dev
```

## git commit说明

`git commit -m <type>[scope]: <description>`

type :用于表明这次提交的改动类型，是新增了功能？还是修改了测试代码？又或者是更新了文档？总结以下 11 种类型:

- build:主要目的是修改项目构建系统(例如 glup，webpack，rollup 的配置等)的提交
- ci:主要目的是修改项目继续集成流程(例如 Travis，Jenkins，GitLab CI，Circle 等)的提交
- docs:文档更新
- feat:新增功能
- fix:bug 修复
- perf:性能优化
- refactor:重构代码(既没有新增功能，也没有修复 bug)
- style:不影响程序逻辑的代码修改(修改空白字符，补全缺失的分号等)
- test:新增测试用例或是更新现有测试
- revert:回滚某个更早之前的提交
- chore:不属于以上类型的其他类型(日常事务)

scope:一个可选的修改范围。用于标识此次提交主要涉及到代码中哪个模块。

description:一句话描述此次提交的主要内容，做到言简意赅。

## 日志

### 2022.07.20
- npm init vue@latest
- TypeScript `yes`
- JSX `yes`
- Vue Router `yes`
- Pinia `yes`
- Vitest `yes`
- Cypress `no`
- ESLint `no`
- 手动添加Eslint+Prettier(代码格式检查)
- 添加ls-lint(文件命名格式检查) lint-stage(husky时只检测暂存区内容)
- 添加husky

### 2022.07.23
- 安装Element-Plus
- https://element-plus.gitee.io/zh-CN/guide/installation.html#%E4%BD%BF%E7%94%A8%E5%8C%85%E7%AE%A1%E7%90%86%E5%99%A8
-
