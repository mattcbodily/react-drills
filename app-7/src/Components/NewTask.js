import React, { Component } from 'react';

class NewTask extends Component{
    constructor(){
        super();
        this.state = {
            input: ''
        };
        this.handleNewTask = this.handleNewTask.bind(this)
    }

    handleChange(val){
        this.setState({input: val});
    }

    handleNewTask(){
        this.props.add(this.state.input);
        this.setState({input: ''});
    }

    render(){
        return(
            <div>
                <input 
                    value={this.state.input}
                    placeholder='Enter new task'
                    onChange = {(e) => this.handleChange(e.target.value)}
                />
                <button onClick = {this.handleNewTask}>Add</button>
            </div>
        )
    }
}

export default NewTask