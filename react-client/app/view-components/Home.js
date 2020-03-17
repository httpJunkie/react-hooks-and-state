import React from 'react';
import Counter from '../partial-components/Counter';
// import CounterClass from '../partial-components/CounterClass';
import DualCounter from '../partial-components/DualCounter';

const Home = () => {
  document.title = `Todo App Home`;
  return (
    <div className="view-home">
      <h1>State Management and React Hooks Demo</h1>
      <p>
        This application has responsive menus, light and dark themed CSS, counter component example, and contains  
        a the <a href="/todos">todos</a> component from my presentation. To view or fork the code, visit <a href="https://github.com/httpJunkie/kr-todo-hooks">this application's repo</a>  on GitHub.
      </p>

      <h2>Counter Demo</h2>
      <Counter />

      <h2>Dual Counter Demo</h2>
      <DualCounter />
    </div>
  )
}

export default Home;