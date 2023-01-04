import { useContext } from "react"
import { TodoContext } from "./TodoAppContext"

const TodoItem = ({
    handleToggleTask,
    item
}) => {
    const handleClick = (e) => {
        handleToggleTask(e.currentTarget.id)
    }
    const count = useContext(TodoContext)
    return <li id={item.id} onClick={handleClick} className={item.isComplete ? "todo strike" : "todo"}>[{count}] {item.text}</li>
}

export default TodoItem