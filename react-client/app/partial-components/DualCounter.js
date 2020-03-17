
  import React, { useState, useCallback } from 'react';

  const CountButton = ({onClick, count, id}) => {
    console.log(id)
    for(let i=0; i<1000000000; i++){
      //
    }
    return <button onClick={onClick}>{count}</button>
  }

  const CountButtonMemoed = React.memo(CountButton)

  const updateMethod = c => c + 1;

  function DualCounter() {
    const [count1, setCount1] = useState(0)
    const increment1 = useCallback(() => setCount1(updateMethod), [])
    const [count2, setCount2] = useState(0)
    const increment2 = useCallback(() => setCount2(updateMethod), [])
    const [count3, setCount3] = useState(0)
    const increment3 = useCallback(() => setCount3(updateMethod), [])
    const [count4, setCount4] = useState(0)
    const increment4 = useCallback(() => setCount4(updateMethod), [])

    return (
      <>
        <CountButtonMemoed id={`1`} count={count1} onClick={increment1} />
        <CountButtonMemoed id={`2`} count={count2} onClick={increment2} />
        <CountButtonMemoed id={`3`} count={count3} onClick={increment3} />
        <CountButtonMemoed id={`4`} count={count4} onClick={increment4} />
      </>
    )
  }

  export default DualCounter