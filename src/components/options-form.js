import React, {Component} from 'react';

class OptionsForm extends Component {
  render() {
    return(
        <div style={{padding: '2px'}}>
          <div className="form-title">Tweet Options</div>
            <div className="form-group">
              <label>User Photo</label>
              <input
                value={this.props.userPhotoInput}
                onChange={this.props.userPhotoInputChange.bind(this)}
                type="file"
                name="photoInput"
                id="photoInput"
              />
              {this.props.userPhotoInput.length > 0 ?
                <div className="form-btn-container">
                  <button
                    onClick={this.props.removePhoto}
                    className="form-btn remove-photo-btn"
                    type="button"
                  >
                    Remove Photo
                  </button>
                </div>
              : null}
            </div>
          <div className="form-group">
            <label>Username</label>
            <input
              value={this.props.usernameInput}
              onChange={this.props.usernameInputChange.bind(this)}
              type="text"
              className="text-input"
            />
          </div>
          <div className="form-group">
            <label>Display Name</label>
            <input
              value={this.props.displayNameInput}
              onChange={this.props.displayNameInputChange.bind(this)}
              type="text"
              className="text-input"
            />
          </div>
          <div className="form-group">
            <label>Date & Time</label>
            <input
              value={this.props.dateAndTimeInput}
              onChange={this.props.dateAndTimeInputChange.bind(this)}
              type="text"
              className="text-input"
            />
          </div>
          <div className="form-group">
            <label>Text</label>
            <textarea
              value={this.props.textInput}
              onChange={this.props.textInputChange.bind(this)}
              type="text"
              className="text-input text-text-input"
            />
          </div>
          <div className="form-group">
            <label>Comment Count</label>
            <input
              value={this.props.commentCountInput}
              onChange={this.props.commentCountInputChange.bind(this)}
              type="text"
              className="text-input"
            />
          </div>
          <div className="form-group">
            <label>Retweet Count</label>
            <input
              value={this.props.retweetCountInput}
              onChange={this.props.retweetCountInputChange.bind(this)}
              type="text"
              className="text-input"
            />
          </div>
          <div className="form-group">
            <label>Like Count</label>
            <input
              value={this.props.likeCountInput}
              onChange={this.props.likeCountInputChange.bind(this)}
              type="text"
              className="text-input"
            />
          </div>
          <div className="form-group-row">
            <input
              checked={this.props.verifiedStatusInput}
              onChange={this.props.verifiedInputChange.bind(this)}
              name="verifiedStatus"
              id="verified"
              type="checkbox"
            />
            <label htmlFor="verified">Verified</label>
          </div>
          <div className="form-group">
            <button
              onClick={this.props.resetForm}
              className="form-btn"
            >
              Reset All Values
            </button>
          </div>
        </div>
    );
  }
}

export default OptionsForm;
