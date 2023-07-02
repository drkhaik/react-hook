
const Todo = (props) => {
    // console.log(props)
    // const todo = props.todo;
    const { todo, title, deleteDataTodo } = props;
    const handleDelete = (id) => {
        deleteDataTodo(id)
    }
    return (
        <ul className='todo-container' style={{ 'listStyle': 'none', 'fontSize': '20px' }}>
            <div> {title} </div>
            {todo.map(todoChild => {
                return (
                    <div key={todoChild.id}>
                        <li className='todo-child'> {todoChild.title}
                            &nbsp; &nbsp; <span onClick={() => { handleDelete(todoChild.id) }}>[X]</span> </li>
                    </div>
                )
            })}
            <hr />
        </ul>
    );
}

export default Todo;