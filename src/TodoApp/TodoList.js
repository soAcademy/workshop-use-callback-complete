import { useMemo, memo } from "react"
import TodoItem from "./TodoItem"

const TodoList = ({
    handleToggleTask,
    items
}) => {
    console.log('TodoList re-rendered')
    const renderedItems = useMemo(() => {
            console.log('todo items re-created')
        return (
        <ul>
            {items.map(item => (
                <TodoItem key={item.id} item={item} handleToggleTask={handleToggleTask} />
            ))}
        </ul>)}, [items])
    
    return <div>{renderedItems}</div>
}

export default memo(TodoList)