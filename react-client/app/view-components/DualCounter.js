
  import React, { useState, useCallback } from 'react';

  const CountButton = ({onClick, count, id}) => {
    console.log(id)
    for(let i=0; i<1000000000; i++){
      //
    }
    return <button onClick={onClick}>{count}</button>
  }

  const CountButtonMemod = React.memo(CountButton)

  function DualCounter() {
    const [count1, setCount1] = useState(0)
    const increment1 = useCallback(() => setCount1(c => c + 1), [])
    const [count2, setCount2] = useState(0)
    const increment2 = useCallback(() => setCount2(c => c + 1), [])
    const [count3, setCount3] = useState(0)
    const increment3 = useCallback(() => setCount3(c => c + 1), [])
    const [count4, setCount4] = useState(0)
    const increment4 = useCallback(() => setCount4(c => c + 1), [])

    return (
      <>
        <CountButtonMemod id={`1`} count={count1} onClick={increment1} />
        <CountButtonMemod id={`2`} count={count2} onClick={increment2} />
        <CountButtonMemod id={`3`} count={count3} onClick={increment3} />
        <CountButtonMemod id={`4`} count={count4} onClick={increment4} />
      </>
    )
  }

  export default DualCounter