import React, { Component } from 'react';

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
      text: this.state.text
      },
      ...this.state.comments
    ];
    this.setState({
      comments: newComment,
      text: ''
    });
  }

  render() {
    return (
      <div className="comments-wrapper">
      <h2>Comments({this.state.comments.length})</h2>
      <div className="comments-list-wrapper">
        <form className="comments-form-area" onSubmit={this.handleSubmit}>
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
      </div>
    );
  }
};

export default CommentSection;

const CommentList = props => {
  const Comment = (comment, index) => (
    <div
      className="comment-item"
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
