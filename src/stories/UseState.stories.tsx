import React, {useMemo, useState} from 'react'

export default {
    title: 'useState demo',
}
function generateData() {
    //difficult counting
    console.log('generated data')
    return 1
}
export const Example1 = () => {
    console.log('Example1');
    //const initialValue = useMemo(generateData, []);
    const [counter, setCounter] = useState<number>(generateData)
    //вместо initialState мы можем отправить функцию, тогда не нужно будет использовать useMemo
  const changer = (state:number) => {
        return state + 1
  }
    return <>
    <button onClick = {() => setCounter(changer)}>+</button>
        {counter}

    </>

}