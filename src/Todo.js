import React, { useEffect, useState } from "react";
import List from './components/List';
import Item from './components/Item';
import TodoForm from "./components/TodoForm";
import './Todo.css'

const SAVED_ITEMS = "savedItems"

function Todo() {

    const [items, setItems] = useState([]);

    useEffect(() => {
        let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS))
        if (savedItems) {
            setItems(savedItems);
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(SAVED_ITEMS, JSON.stringify(items))
    }, [items])

    function onAddItem(text) {

        let it = new Item(text)

        setItems([...items, it])
    }

    function onItemDeleted(item) {
        let filteredItems = items.filter(it => it.id != item.id)

        setItems(filteredItems);
    }

    function onDone(item) {

        let updatedItems = items.map(it => {
            if (it.id == item.id) {
                it.done = !it.done;

            }
            return it;
        })

        setItems(updatedItems);
    }

    return (
        <div className="container">
            <h1>Todo</h1>
            <TodoForm onAddItem={onAddItem}></TodoForm>

            <List onDone={onDone} onItemDeleted={onItemDeleted} items={items}></List>

        </div>
    )
}

export default Todo

