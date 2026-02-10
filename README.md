# ReactJS Learning Repository

This repository documents my journey learning ReactJS, following the CodeWithHarry (CWH) course and other resources. It contains the projects I've built and notes I've taken along the way.

## 📂 Projects

### 1. Todo List Application

- **Directory**: `todo-list/`
- **Description**: A fully functional Todo List application that allows users to add, view, and delete daily tasks.
- **Key Concepts Learned**:
  - Functional Components
  - Props & PropTypes
  - State Management (useState)
  - JSX Syntax
  - Component Reusability

#### 🆕 Recent Updates (Todo List)

- **Bug Fix**: Resolved the "unique key prop" warning by using `React.Fragment` with a unique `key` in the `map` function.
- **Feature**: Implemented the `onDelete` functionality using the `filter()` method to remove todos from the state.
- **Interaction**: Fixed the button `onClick` event to properly trigger only when clicked.

---

## 📚 Learning Notes

Here are some key takeaways and command references from my learning process:

### 🚀 Getting Started

To create a new React app without installing global packages, use `npx`:

```bash
npx create-react-app <app-name>
# Example:
npx create-react-app todo-list
```

### 🛠️ Common NPM Commands

- `npm start`: Starts the development server.
- `npm run build`: Bundles the app into static files for production.
- `npm test`: Starts the test runner.
- `npm run eject`: Removes the single build dependency (Warning: irreversible!).

### 💡 React Concepts

#### JSX (JavaScript XML)

- **HTML in JS**: React allows writing HTML-like syntax directly in JavaScript.
- **Dynamic Content**: Use curly braces `{}` to insert JavaScript variables or expressions.
  ```jsx
  <h1>Hello, {name}</h1>
  ```
- **Fragments**: Always wrap adjacent elements in a parent tag or a fragment `<> ... </>` because a component must return a single element.

#### Class vs ClassName

In React/JSX, use `className` instead of `class` and `htmlFor` instead of `for` because `class` and `for` are reserved keywords in JavaScript.

#### Component Naming

- **Capitalization**: Custom components **must** start with an uppercase letter (e.g., `<Header />` not `<header />`) to distinguish them from built-in HTML elements.

#### Exports & Imports

- **Default Export**:

  ```javascript
  // File: todos.js
  export default Todos;
  // Import:
  import Todos from "./my-components/todos";
  ```

- **Named Export**:
  ```javascript
  // File: todos.js
  export const Todos = () => { ... };
  // Import:
  import { Todos } from './my-components/todos';
  ```

### 🧩 VS Code Extensions

Useful snippets for quick coding:

- `rfc`: Creates a React Functional Component.
- `rafc`: Creates a React Arrow Functional Component.

---

## 🎣 Comprehensive React Hooks Reference

Below is a detailed guide to all standard React Hooks with examples.

### 1. State Management Hooks

Hooks that allow functional components to manage local state.

#### `useState`

Declares a state variable that you can update comfortably.

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return <button onClick={() => setCount(count + 1)}>Count is {count}</button>;
}
```

#### `useReducer`

An alternative to `useState` for complex state logic, similar to Redux.

```jsx
import { useReducer } from "react";

function reducer(state, action) {
  if (action.type === "increment") return { count: state.count + 1 };
  return state;
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <button onClick={() => dispatch({ type: "increment" })}>
      Count is {state.count}
    </button>
  );
}
```

### 2. Context Hooks

#### `useContext`

Accepts a context object using `React.createContext` and returns the current context value.

```jsx
import { useContext } from "react";
const ThemeContext = React.createContext("light");

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return <button className={theme}>I am styled by context!</button>;
}
```

### 3. Ref Hooks

#### `useRef`

Returns a mutable ref object whose `.current` property is initialized to the passed argument. It persists for the full lifetime of the component and doesn't trigger re-renders.

```jsx
import { useRef } from "react";

function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}
```

#### `useImperativeHandle`

Customizes the instance value that is exposed to parent components when they use `ref`.

```jsx
useImperativeHandle(ref, () => ({
  focus: () => {
    inputRef.current.focus();
  },
}));
```

### 4. Effect Hooks

#### `useEffect`

Performs side effects (`Data fetching`, `DOM manipulation`, `Timers`) in function components.

```jsx
import { useEffect } from "react";

useEffect(() => {
  const subscription = props.source.subscribe();
  // Cleanup function (like ComponentWillUnmount)
  return () => {
    subscription.unsubscribe();
  };
}, [props.source]); // Only re-run if props.source changes
```

#### `useLayoutEffect`

Fires synchronously after all DOM mutations. Use it to read layout from the DOM and synchronously re-render.

```jsx
useLayoutEffect(() => {
  // Measure DOM layout here
}, []);
```

#### `useInsertionEffect`

Fires before any DOM mutations. Intended for CSS-in-JS libraries to inject styles dynamically.

### 5. Performance Hooks

#### `useMemo`

Memoizes a **value**. It only recomputes the memoized value when one of the dependencies has changed.

```jsx
const expensiveValue = useMemo(() => {
  return computeExpensiveValue(a, b);
}, [a, b]);
```

#### `useCallback`

Memoizes a **function**. It returns a memoized version of the callback that only changes if one of the dependencies has changed.

```jsx
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
```

### 6. Transition Hooks

#### `useTransition`

Lets you update the state without blocking the UI, marking state updates as non-urgent.

```jsx
const [isPending, startTransition] = useTransition();

function handleClick() {
  startTransition(() => {
    setTab("next"); // This update is low priority
  });
}
```

#### `useDeferredValue`

Accepts a value and returns a new copy of the value that will defer to more urgent updates.

```jsx
const deferredQuery = useDeferredValue(query);
// The UI will render with the old 'query' value while the new one loads in background
```

### 7. Other Hooks

#### `useId`

Generates unique IDs for accessibility attributes.

```jsx
const id = useId();
return <div id={id}>...</div>;
```

#### `useDebugValue`

Used to display a label for custom hooks in React DevTools.

```jsx
useDebugValue(isOnline ? "Online" : "Offline");
```

---

## 🚀 React 19: New Hooks & Features

React 19 introduces powerful new hooks for data fetching and form handling.

#### `use` API

A new API to read properties from a Promise or Context directly in render.

```jsx
import { use } from "react";

function Comments({ commentsPromise }) {
  // Suspend until promise resolves
  const comments = use(commentsPromise);
  return comments.map((comment) => <p>{comment}</p>);
}
```

#### `useActionState` (formerly `useFormState`)

Manages the state of an action, useful for form submissions.

```jsx
const [state, formAction] = useActionState(fn, initialState);

return <form action={formAction}>...</form>;
```

#### `useFormStatus`

Provides status information about the last form submission (e.g., pending state).

```jsx
import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();
  return <button disabled={pending}>Submit</button>;
}
```

#### `useOptimistic`

Lets you optimistically show a different state while an async action is underway.

```jsx
import { useOptimistic } from "react";

function Thread({ messages, sendMessage }) {
  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    messages,
    (state, newMessage) => [...state, newMessage],
  );

  // ...
}
```
