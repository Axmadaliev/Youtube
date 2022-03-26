import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodos } from '../../store/actions/todos';
import { Button, Pagination } from '@mui/material'
import "./Todos.css"
import { Box } from '@mui/system';
const Todos = () => {
    const itemPerPage = 10;
    const [page, setPage] = useState(1)
    const [localTodos, setLocalTodos] = useState([])
    const todos = useSelector(state => state.todos.todos)
    const dispatch = useDispatch()
    useEffect(() => {
        setLocalTodos(todos.slice((page-1)*itemPerPage,page*itemPerPage))
    },[todos, page])

    // const pagesArr = new Array(Math.floor(todos.length / itemPerPage)).fill(0)
    const handleDeleteTodo = (id) => {
        dispatch(deleteTodos(id))
    }
    return (
        <>
        <div className='todos'>
                <Box>
                    {localTodos.map((element, index) => {
                        return <Box key={index} className='todos__item'>{element.title}
                            <Button color='primary' variant='contained' size={'sm'} onClick={() => { handleDeleteTodo(element.id) }}>del</Button>
                        </Box>
                    })}
                </Box>
                <div className='controls'>
                    <Pagination onChange={(e, num) =>{setPage(num)} } count={Math.ceil(todos.length / itemPerPage)} />
                    {/* {
                        pagesArr.map((items, index) => {
                            return <button key={index} style={{backgroundColor:index+1===page ? "black" : "",color:index+1===page ? "white" : ""}} onClick={() => {setPage(index+1)}}>{index+1}</button>
                        })
                    } */}
                </div>
        </div>
        </>
    );
}

export default Todos;
