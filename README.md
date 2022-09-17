# 概述

Vue3+Ts+Vite+Pinia 前端模板

## 启动方式
进入项目目录执行
```sh
npm install
npm run dev
```
## 更新日志

### 2022.09.16
- uninstall yorkie , install husky
- commitlint
- ls-lint
- lint-staged to husky

### 2022.09.17
- axios
- element-plus
- auto import vue
- i18n
- login page

## Vscode必装插件
- `Code Spell Checker` 拼写检查
- `ESLint`
- `Prettier - Code formatter`
- `Vue Language Features (Volar)`

## 开发规范

### 目录结构

业务代码书写位置
```plainText
-src
|-assets 存放静态资源
  |-img
    |-<module-name> 业务目录名称
|-modules 存放业务代码
  |-<module-name> 业务目录名称
    |-types                       业务相关类型声明
    |-service                     业务相关API调用
    |-store                       模块store
    |-views                       业务相关页面
    |-<module-name>.routes.ts     业务模块路由配置
```
### git commit 规范
`git commit -m <type>[scope]: <description>`

type :用于表明我们这次提交的改动类型，是新增了功能？还是修改了测试代码？又或者是更新了文档？总结以下 11 种类型:

- build:主要目的是修改项目构建系统(例如 webpack，rollup 的配置等)的提交
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

#### 提交示例

```bash
git commit -m 'feat: 增加 xxx 功能'
git commit -m 'fix(JIRA-123): 修复 xxx bug'
```
