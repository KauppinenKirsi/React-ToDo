import React, { Component } from 'react';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: ""
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit = (event) => {
        this.props.add(this.state.title,this.state.description);
        this.setState({
            title: "",
            description: ""
        });
        event.preventDefault();
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input id="title" name="title" type="text" value={this.value} onChange={this.handleChange} />
                </div>
                <div>
                    <label htmlFor="desc">Description</label>
                    <textarea name="description" id="desc" value={this.description} onChange={this.handleChange} ></textarea>
                </div>
                <button>Add new todo</button>
            </form>
        )
    }
}

