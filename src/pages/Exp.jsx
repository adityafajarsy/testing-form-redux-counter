import React from 'react'
import Counter2 from '../Counter/Counter2'
import Counter1 from '../Counter/Counter1'
import FormCustom from '../Form/FormCustom'

const Exp = () => {
  return (
    <div className='h-screen'>
        <div className='h-full flex items-center justify-center gap-30'>
            <Counter1 />
            <Counter2 />
            <FormCustom />
        </div>
    </div>
  )
}

export default Exp