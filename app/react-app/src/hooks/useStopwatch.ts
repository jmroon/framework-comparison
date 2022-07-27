// import { useEffect, useRef, useState } from 'react';

// export function useStopwatch(interval: number) {
//   const [time, setTime] = useState(0);
//   const id = useRef<number>();

//   useEffect(() => {
//     start();
//     return () => clear();
//   }, [interval]);

//   function clear() {
//     clearInterval(id.current);
//   }

//   function reset() {
//     clear();
//     start();
//   }

//   function start() {
//     id.current = window.setInterval(savedCallback.current, delay);
//   }

//   function incrementTime() {
//     setTime(time + 1);
//   }

//   return { time, controls: { start, clear, reset } };
// }

// implementation to come
export {};
