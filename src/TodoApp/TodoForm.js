import { useState, memo } from 'react'

const TodoForm = ({
    addTask
}) => {
    console.log('TodoForm re-rendered')
    const [ userInput, setUserInput ] = useState('')

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = () => {
        if (userInput.length === 0)
            return

        addTask(userInput)
        setUserInput('')
    }
    
    return (
        <div>
            <div>What needs to be done?</div>
            <input
                value={userInput}
                onChange={handleChange}
            />
            <button onClick={handleSubmit}>
                Add
            </button>
        </div>
    )
}

export default memo(TodoForm)