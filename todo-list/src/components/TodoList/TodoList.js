import React, { Component } from 'react';
import TodoItem from '../TodoItem';

export default class TodoList extends Component {
    render(){
        return(
            <div>
                <TodoItem done>리액트 공부하기</TodoItem>
                <TodoItem>컴포넌트</TodoItem>
            
            </div>
        )
    }
}