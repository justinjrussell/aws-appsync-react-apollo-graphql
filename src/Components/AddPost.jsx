import React, { Component } from 'react';

export default class AddPost extends Component {
    constructor(props){
        super(props);
        this.state = this.getInitialState();
    }
    static defaultProps = {
        onAdd: () => null
    }
    getInitialState = () => ({
        title:'',
        author: '',
        content: '',
        url: ''
    })
    handleChange = (field, event) => {
        const { target: { value }} = event;
        this.setState({
            [field]: value
        });
    }
    handleAdd = () => {
        const { title, author, content, url } = this.state;
        this.setState(this.getInitialState(), () => {
            this.props.onAdd({title, author, content, url});
        });
    }
    handleCancel = () => {
        this.setState(this.getInitialState());
    }
    render() {
        return (
            <fieldset>
                <legend>Add new Post</legend>
                <div>
                    <label>
                        Title<input 
                            type="text" 
                            placeholder="Title" 
                            value={this.state.title} 
                            onChange={this.handleChange.bind(this,'title')} 
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Author<input 
                            type="text" 
                            placeholder="Author" 
                            value={this.state.author} 
                            onChange={this.handleChange.bind(this,'author')} 
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Content<input 
                            type="text" 
                            placeholder="Content" 
                            value={this.state.content} 
                            onChange={this.handleChange.bind(this,'content')} 
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Url<input 
                            type="text" 
                            placeholder="Url" 
                            value={this.state.url} 
                            onChange={this.handleChange.bind(this,'url')} 
                        />
                    </label>
                </div>
                <div>
                    <button onClick={this.handleAdd}>Add new post</button>
                    <button onClick={this.handleCancel}>Cancel</button>
                </div>
            </fieldset>
        );
    }
}

