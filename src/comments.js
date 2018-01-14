import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

class CommentSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
      text: ''
    };

    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      text: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    let newComment = [{
      text: this.state.text,
      id: Date.now()
      },
      ...this.state.comments
    ];
    this.setState({
      comments: newComment,
      text: ''
    });
  }

  render() {
    console.log(this.state)
    return (
      <div className="comments-wrapper">
      <h3>Comments({this.state.comments.length})</h3>
      <form onSubmit={this.handleSubmit}>
      <input
      className="comment-form"
      placeholder={"Write a comment..."}
      onChange={this.onChange}
      value={this.state.text}
      autoFocus="true"
      />
      <button
      className="comment-button">
      {'Add'}
      </button>
      </form>
      <CommentList
      comments={this.state.comments}
      />
      </div>
    );
  }
};

export default CommentSection;

const CommentList = props => {

  const Comment = (comment, index) => (
    <div
      className="comment-item"
      key={comment.id}
      index={index}
    >{comment.text}</div>
  );

  const comments = props.comments.map(Comment);

  return (
    <div className="comments-list">
      {comments}
    </div>
  );
}
