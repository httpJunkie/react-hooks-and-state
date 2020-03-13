
  import React, { useState, useEffect, useRef } from 'react';

  const Counter = () => {
    const [count, setCount] = useState(0);
    const incrementCount = () => setCount(count + 1);

    useEffect(() => {
      document.title = `You clicked ${count} times`;
      console.log(`updated title clicked value to: ${count}`)
    }, [count])

    return (
      <>
        <p>You clicked {count} times</p>
        <button onClick={incrementCount} >Increment</button>
      </>
    )
  }

  export default Counter;

  /* #1: UNDERSTAND CLEANUP AND TRY SOME LOGGING */

  // useEffect(() => {
  //   const id = setInterval(() => {
  //     setCount(count + 1); 
  //     console.log(`02 updated title clicked value to: ${count}`) // is this value stale?
  //   }, 5000);
  //   return () => {
  //     clearInterval(id); 
  //     console.log(`03 clear interval after count updated to : ${count}`)
  //   }
  // }, [count]) // try removing dep array 😔. Notice reference to count is stale

  /* #2: FIX OUR STALE VALUE */

  // const countRef = useRef(count);
  // countRef.current = count;

  // useEffect(() => {
  //   document.title = `You clicked ${count} times`;
  //   console.log('01 update external thing')
  // }, [count])
  
  // useEffect(() => {
  //   const id = setInterval(() => {
  //     setCount(count + 1)
  //     console.log(`02 setCount was called : ${countRef.current}`)
  //   }, 5000);
  //   return () => {
  //     clearInterval(id)
  //     console.log(`03 clear interval`)
  //   }
  // })