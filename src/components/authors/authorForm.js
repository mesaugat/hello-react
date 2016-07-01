"use strict";

var React = require('react');
var Input = require('../common/textInput');

var AuthorForm = React.createClass({
    propTypes: {
        error: React.PropTypes.object,
        onSave: React.PropTypes.func.isRequired,
        author: React.PropTypes.object.isRequired,
        onChange: React.PropTypes.func.isRequired
    },

    render: function() {
        return (
            <form className="jumbotron">
                <h2>Add Author</h2>
                <Input name="firstName" label="First Name" value={this.props.author.firstName} onChange={this.props.onChange} error={this.props.errors.firstName} />
                <Input name="lastName" label="Last Name" value={this.props.author.lastName} onChange={this.props.onChange} error={this.props.errors.lastName} />
                <button type="submit" className="btn btn-default" onClick={this.props.onSave}>Save</button>
            </form>
        );
    }
});

module.exports = AuthorForm;
