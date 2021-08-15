import * as React from 'react'

function Example() {
  const [count, setCount] = React.useState(0)

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click here</button>
      <p>You clicked: {count} times</p>
    </div>
  )
}

export default Example
