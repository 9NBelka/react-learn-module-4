import { useMemo, useState } from "react"

function UseMemoExample() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);

  const value = useMemo(() => {
    return a + b
  },[a, b])

  return (
    <div>
      <button onClick={() => setA(a+1)}>a+1 a={a}</button>
      <button onClick={() => setB(b+1)}>b+1 b={b}</button>
      <button onClick={() => setC(c+1)}>c+1 c={c}</button>
      <p>value {value}</p>
    </div>
  )
} 

export default UseMemoExample