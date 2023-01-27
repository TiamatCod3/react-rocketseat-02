import { useState } from 'react'
import { Button } from './components/Button'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Button variant={'primary'}/>
      <Button variant={'secondary'}/>
      <Button variant={'danger'}/>
      <Button variant={'success'}/>
    </div>
  )
}

export default App
