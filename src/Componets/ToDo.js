import React, {useState} from "react";

const ToDo = () => {
    const [todo, setTodo] = useState([{
        id: "32323",
        task: "This is default",
        completed: false
    }]);

    return   <div className='container'>
        <h1>ToDO-list</h1>
        <form onSubmit={(e) => {
            e.preventDefault()
            console.log(e.target)
            let text = e.target["task"].value
            if (text) {
                setTodo([...todo, {
                    id: Math.random(),
                    task: text,
                    completed: false
                }])
                e.target["task"].value = ""
            }
        }}>

            <input
                   placeholder='Enter Todo...'
                   name="task"
                   type="text"/>
                <button className='save-btn'
                    type="submit">Save Todo
            </button>
        </form>

        <div className="todo-list">
            {
                todo.map((v, i) => {
                    return <div key={v.id} className="todo-item">
                        <div className="todo-content">
                            {v.task}
                        </div>
                        <div>
                            <button className='delete-btn'
                                    onClick={() => {
                                        let _todo = [...todo];
                                        _todo.splice(i, 1)
                                        setTodo(_todo)
                                    }}
                            >Delete
                            </button>
                        </div>
                    </div>
                })
            }
        </div>
    </div>
}
export default ToDo