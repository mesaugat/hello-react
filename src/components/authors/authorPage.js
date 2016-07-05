"use strict";

var React = require('react');
var Router = require('react-router');
var Link = require('react-router').Link;
var AuthorList = require('./authorList');
var AuthorStore = require('../../stores/authorStore');
var AuthorActions = require('../../actions/authorActions');

var Authors = React.createClass({

    getInitialState: function() {
        return {
            authors: AuthorStore.getAllAuthors()
        };
    },

    componentWillMount: function() {
        AuthorStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        AuthorStore.removeChangeListener(this._onChange);
    },

    _onChange: function() {
        this.setState({ authors: AuthorStore.getAllAuthors() });
    },
    
    render: function(){
        return (
            <div>
                <Link to="addAuthor" className="btn btn-default pull-right">Add Author</Link>
                <h1>Authors</h1>
                <AuthorList authors={this.state.authors} />
            </div>
        );
    }
});

module.exports = Authors;
