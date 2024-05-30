This is a [Next.js](https://nextjs.org/) project bootstrapped with
[`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google
Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the
[Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## 目录设计

> AI给的目录设计

```
- app/
  - ... # 放置使用 App Router 的页面组件
- pages/
  - api/ # 用于API路由，处理服务器端请求
  - ... # 其他非App Router的页面组件
- components/ # 可复用的UI组件
- models/ # 数据模型
- services/ # 服务层，业务逻辑处理
- validators/ # 数据验证 --- zod
- public/ # 静态资源文件夹
- styles/ # 样式文件夹
- contexts/ # React上下文提供者
- hooks/ # 自定义React Hooks
- i18n/ # 国际化配置
- config/ # 配置文件
- middleware/ # 中间件
- utils/ # 工具函数和实用程序
- scripts/ # 脚本命令
- test/ # 测试代码
- .env # 环境变量文件
- .next # Next.js的默认缓存和构建输出目录
- ... # 其他支持文件或目录
```

> 在App Router模式下，app目录是专门用来存放使用了App Router的页面组件的地方。这些页面组件通常包含带有getInitialProps方法的文件，它们负责处理客户端和服
> 务器端的初始化数据加载。

> pages目录仍然是重要的，但在这种情况下，它可能包含一些不依赖于App Router的页面组件，以及专门用于API路由的api子目录。

## [React 快速回顾](https://react.docschina.org/reference/react)

> [要点速览](https://juejin.cn/post/7296016269278150692?searchId=202405101432244BB1FB6EBF2D3639CBA7)

- Hook: 函数组件无法使用state和生命周期函数，所以需要使用hooks来代替。

  - `use`: 实验性的hook
  - `useState`: 状态管理
  - `useEffect`: 副作用管理,注意使用

    - `useEffect(setup, dependencies?)`
    - dependencies 默认为空数组，表示依赖项为空，即仅执行一次
    - setup: 副作用函数，执行时机为组件挂载或更新时. setup 函数选择性返回一个清理`cleanup`函数
    - 即使你的 Effect 是由一个交互（比如点击）引起的，浏览器也可能在处理 Effect 内部的状态更新之前重新绘制屏幕。通常，这就是你想要的。但是，如果你一定
      要阻止浏览器重新绘制屏幕，则需要用 **useLayoutEffect** 替换 **useEffect**。

  - `useLayoutEffect`: 同**useEffect**，但会在DOM更新之后同步执行

  - **`useRef`**: [引用管理，它能帮助引用一个不需要渲染的值](https://zhuanlan.zhihu.com/p/621183750)

    - 作用 - **可用于在组件之间共享数据，还可以存储`DOM`节点的引用**
      - 使用ref引用一个值
      - 通过ref操作DOM
      - **避免重复创建ref的内容,改变`ref`不会触发重新渲染**,用于优化渲染性能
        ```js
        // ---- 用法示例 ----
        const intervalRef = useRef(0);
        //如果需要存储一个 interval ID 并在以后检索它，那么可以将它存储在 ref 中。只需要手动改变它的 current 属性 即可修改 ref 的值：
        function handleStartClick() {
          const intervalId = setInterval(() => {
            // ...
          }, 1000);
          intervalRef.current = intervalId;
        }
        // 在之后，从 ref 中读取 interval ID 便可以 清除定时器：
        function handleStopClick() {
          const intervalId = intervalRef.current;
          clearInterval(intervalId);
        }
        ```
    - 使用 ref 可以确保：
      - 可以在重新渲染之间 存储信息（普通对象存储的值每次渲染都会重置）。
      - 改变它 不会触发重新渲染（状态变量会触发重新渲染）。
      - 对于组件的每个副本而言，这些信息都是本地的（外部变量则是共享的）。

  - `useMemo`: 缓存计算结果

    - `const cachedValue = useMemo(calculateValue, dependencies)`

  - `useCallback`: 缓存函数

    - 用于优化性能，特别是在处理回调函数时，以避免不必要的重新渲染
    - `const cachedFn = useCallback(fn, dependencies)`, 返回一个有缓存功能的函数
    - 用法
      - 跳过组件的重新渲染
      - 从记忆化回调中更新 state
      - 防止频繁触发 Effect
      - 优化自定义 Hook

  - `useContext`: 上下文管理

    - `createContext`：createContext是一个用于创建上下文对象的工厂方法。它返回一个包含Provider和Consumer两个组件的上下文对象。Provider组件用于提供数
      据，而Consumer组件用于订阅并读取这些数据。当需要共享的数据量较小或者不需要频繁更新时，使用createContext是一个好的选择。
    - `useContext`：useContext是一个Hook，它允许组件直接访问最近的Provider中的数据，而无需通过Consumer组件显式传递。这使得在不同层级的组件之间共享数据
      变得更加简单和高效。useContext适用于需要频繁更新或共享大量数据的场景。

  - `useReducer`: 状态管理

    - 基本用法
      ```js
        const [state, dispatch] = useReducer(reducer, initialArg, init?)
        function reducer(state, action) {
          // ...
        }
      ```

  - `useId`: 生成唯一的id

    - 返回一个唯一的字符串 ID，与此特定组件中的 useId 调用相关联。
    - useId 的主要用例是生成用于 HTML 元素的 id 属性。
      - **在`React`中直接编写`ID`并不是一个好的习惯。一个组件可能会在页面上渲染多次，但是`ID`必须是唯一的！使用`useId`生成唯一的ID**
    - 不应该被用来生成列表中的 key。key 应该由你的数据生成。

  - `useDeferredValue`: 延迟更新
  - `useTransition`: 延迟更新
  - useImperativeHandle: 暴露组件实例
  - useInsertionEffect: 插入样式
  - useSyncExternalStore: 订阅外部数据源

- 组件

  - `<Fragment>`(<>) 不添加额外节点的情况下将子元素组合
  - `<Suspense>` 允许你编程式测量 React 树的渲染性能。
  - `<Portal>`
  - `<StrictMode>` 在子组件完成加载前展示后备方案
    ```HTML
    <Suspense fallback={<Loading />}>
      <SomeComponent />
    </Suspense>
    ```

- API
  - createContext
  - forwardRef
  - memo
  - lazy
