import { useEffect, useRef } from 'react';

type Callback<T> = (args: T) => void;

const useTimeout = (callback: Callback<any>, args: any, delay: number): void => {
    const savedCallback = useRef(callback);

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        const id = setTimeout(() => savedCallback.current(args), delay);

        return () => clearTimeout(id);
    }, [delay, args]);
};

export default useTimeout;
