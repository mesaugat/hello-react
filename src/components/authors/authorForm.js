"use strict";

var React = require('react');
var Input = require('../common/textInput');

var AuthorForm = React.createClass({
    render: function() {
        return (
            <form className="jumbotron">
                <h2>Add Author</h2>
                <Input name="firstName" label="First Name" value={this.props.author.firstName} onChange={this.props.onChange} />
                <Input name="lastName" label="Last Name" value={this.props.author.lastName} onChange={this.props.onChange} />
                <button type="submit" className="btn btn-default" onClick={this.props.onSave}>Add</button>
            </form>
        );
    }
});

module.exports = AuthorForm;
