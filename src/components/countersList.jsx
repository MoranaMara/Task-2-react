import React, { useState } from "react";
import Counter from "./counter";

const initialState = [
  { id: 0, value: 0, name: "Ненужная вещь" },
  { id: 1, value: 4, name: "Ложка" },
  { id: 2, value: 0, name: "Вилка" },
  { id: 3, value: 0, name: "Тарелка" },
  { id: 4, value: 0, name: "Набор минималиста" },
];
const CountersList = () => {
  const [counters, setCounters] = useState(initialState);
  const hendleDelete = (id) => {
    const newCounters = counters.filter((c) => c.id !== id);
    setCounters(newCounters);
  };
  const handleReset = () => {
    setCounters(initialState);
  };
  const handleIncrement = (id) => {
    const elementIndex = counters.findIndex((count) => count.id === id); //ищем id элемента
    const newCounters = [...counters]; // создаем копию counters, что бы не мутировать исходный
    newCounters[elementIndex].value++; // прибавляем еденицу
    setCounters(newCounters);          // сохраняем в стейт
  };
  const handleDincrement = (id) => {
    const elementIndex = counters.findIndex((count) => count.id === id); 
    const newCounters = [...counters]; 
    newCounters[elementIndex].value--; 
    setCounters(newCounters);          
  };
  return (
    <>
      {counters.map((count) => (
        <Counter
          key={count.id}
          onIncrement={handleIncrement}
          onDincrement={handleDincrement}
          onDelete={hendleDelete}
          {...count}
        />
      ))}
      <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>Сброс</button>
    </>
  );
};
export default CountersList;

