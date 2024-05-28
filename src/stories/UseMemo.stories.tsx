import React, {useMemo, useState} from 'react';

export default {
    title: 'useMemo',
}

export const DifficultCountingExample = () => {
    const [a, setA] = useState<number>(3);
    const [b, setB] = useState<number>(10);

    let resultA = 1;
    let resultB = 1;
//useMemo запоминает вычисления, которые не нужно пересчитывать для экономии производительности
    resultA = useMemo(() => {
        for (let i = 1; i < a; i++) {
            resultA = resultA * i // допустим, что у нас тут сложные вычисления
        }
        return resultA;
    }, [a])

    for (let i = 1; i < b; i++) {
        resultB = resultB * i;
    }

    return (
        <>
            <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
            <input value={b} onChange={(e) => setB(Number(e.currentTarget.value))}/>
            <hr/>
            <div>
                Result for a: {resultA}
            </div>
            <div>
                Result for b: {resultB}
            </div>

        </>
    )
}
const UsersSecret = (props: { users: Array<string> }) => { // создали тип прямо внутри
    console.log('UsersSecret')
    return (
        <div>{
            props.users.map((u, i) => <div key={i}>{u}</div>)
        }</div>
    );
};
const Users = React.memo(UsersSecret);
export const HelpsToReactMemo = () => {
    console.log('Helps to React Memo')
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(['Dimych', 'Andrew', 'Artem', 'Katya']);

     const newArray = useMemo(() => {
         const newArray =  users.filter(u => u.toLowerCase().indexOf('a') > -1)
         return newArray;
     }, [users])

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            {counter}
            <Users users={newArray}/>
        </>
    )}