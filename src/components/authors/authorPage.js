"use strict";

var React = require('react');
var Router = require('react-router');
var Link = require('react-router').Link;
var AuthorList = require('./authorList');
var AuthorApi = require('../../api/authorApi');

var Authors = React.createClass({

    getInitialState: function() {
        return {
            authors: []
        };
    },

    componentDidMount: function() {
        if (this.isMounted()) {
            this.setState({ authors: AuthorApi.getAllAuthors() });
        }
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
