import React, { Component } from 'react';
import PageTemplate from './PageTemplate';
import TodoInput from './TodoInput'
import TodoList from './TodoList'

export default class App extends Component {

    state = {
        input : '',
        todos : [
            {id: 0, text:'리액트 공부하기', done: true},
            {id: 1, text:'컴포넌트 스타일링 해보기', done: false}
        ]
    }

    handleChange = (e) => {
        const { value } = e.target;
        this.setState({
            input: value
        });
    }

    id = 1;
    getId = () => {
        return ++this.id;
    }

    handleInsert = () => {
        const { input, todos } = this.state;
        const newTodo = {
            id : this.getId(),
            text : input,
            done : false
        };

        this.setState({
            todos: [ ...todos, newTodo],
            input: ''
        });
    }
    render(){
        const { input, todos } = this.state;
        const {
            handleChange,
            handleInsert
        } = this;

        return (
            <PageTemplate>
                <TodoInput onChange={ handleChange } onInsert={ handleInsert } value={ input }/>
                <TodoList todos={ todos }/>
            </PageTemplate>
        )
    }
}