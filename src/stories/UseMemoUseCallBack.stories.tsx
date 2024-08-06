import React, { useMemo, useState, useCallback } from 'react';

// Стандартный экспорт для стори
export default {
    title: 'useMemo',
};

// Компонент для сложных вычислений
export const DifficultCountingExample = () => {
    const [a, setA] = useState<number>(3);
    const [b, setB] = useState<number>(10);

    let resultA = 1;
    let resultB = 1;

    // useMemo запоминает вычисления, которые не нужно пересчитывать для экономии производительности
    resultA = useMemo(() => {
        for (let i = 1; i <= a; i++) {
            resultA = resultA * i; // допустим, что у нас тут сложные вычисления
        }
        return resultA;
    }, [a]);

    for (let i = 1; i <= b; i++) {
        resultB = resultB * i;
    }

    return (
        <>
            <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))} />
            <input value={b} onChange={(e) => setB(Number(e.currentTarget.value))} />
            <hr />
            <div>Result for a: {resultA}</div>
            <div>Result for b: {resultB}</div>
        </>
    );
};

// Компонент для отображения пользователей
const UsersSecret = (props: { users: Array<string> }) => {
    console.log('UsersSecret');
    return (
        <div>
            {props.users.map((u, i) => (
                <div key={i}>{u}</div>
            ))}
        </div>
    );
};

// Мемоизация компонента UsersSecret
const Users = React.memo(UsersSecret);

// Компонент для демонстрации мемоизации с useMemo
export const HelpsToReactMemo = () => {
    console.log('Helps to React Memo');
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(['Dimych', 'Andrew', 'Artem', 'Katya']);

    const newArray = useMemo(() => {
        const newArray = users.filter((u) => u.toLowerCase().indexOf('a') > -1);
        return newArray;
    }, [users]);

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            {counter}
            <Users users={newArray} />
        </>
    );
};

// Компонент LikeUseCallback
export const LikeUseCallback = () => {
    console.log('LikeUseCallback');

    // Состояние счетчика и книг
    const [counter, setCounter] = useState(0);
    const [books, setBooks] = useState(['React', 'JS', 'Css', 'HTML']);

    // Функция для добавления книги
    const addBook = () => {
        const newUsers = [...books, 'Angular ' + new Date().getTime()]; // Создаем новый массив книг с новой книгой
        setBooks(newUsers); // Обновляем состояние книг
    };

    // Мемоизация функции addBook с использованием useMemo
    const memoizedAddBook = useMemo(() => {
        return addBook;
    }, [books]); // Функция будет пересоздана только если изменятся книги

    return (
        <>
            {/* Кнопка для увеличения счетчика */}
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <div>{counter}</div>
            {/* Компонент Book с мемоизированной функцией addBook */}
            <Book addBook={memoizedAddBook} books={books} />
        </>
    );
};

// Тип для пропсов компонента BooksSecret
type BookSecretPropsType = {
    books: Array<string>;
    addBook: () => void;
};

// Компонент BooksSecret
const BooksSecret = (props: BookSecretPropsType) => {
    console.log('BooksSecret');
    return (
        <div>
            {/* Кнопка для добавления книги, вызывает функцию addBook из пропсов */}
            <button onClick={() => props.addBook()}>add book</button>
            {/* Отображение списка книг */}
            {props.books.map((book, i) => (
                <div key={i}>{book}</div>
            ))}
        </div>
    );
};

// Мемоизация компонента BooksSecret
const Book = React.memo(BooksSecret);

// Компонент LikeUseCallback2 с использованием useCallback
export const LikeUseCallback2 = () => {
    console.log('LikeUseCallback2');

    // Состояние счетчика и книг
    const [counter, setCounter] = useState(0);
    const [books, setBooks] = useState(['React', 'JS', 'CSS', 'HTML']);

    // Мемоизация функции addBook с использованием useCallback
    const memoizedAddBook2 = useCallback(() => {
        console.log(books); // Логирование текущих книг
        const newUsers = [...books, 'Angular ' + new Date().getTime()]; // Создаем новый массив книг с новой книгой
        setBooks(newUsers); // Обновляем состояние книг
    }, [books]); // Функция будет пересоздана только если изменятся книги

    return (
        <>
            {/* Кнопка для увеличения счетчика */}
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <div>{counter}</div>
            {/* Компонент Book с мемоизированной функцией addBook */}
            <Book addBook={memoizedAddBook2} books={books} />
        </>
    );
};
