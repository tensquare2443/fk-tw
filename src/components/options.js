import React, {Component} from 'react';
import OptionsForm from './options-form';

class Options extends Component {
  render() {
    return(
      <div>
        {this.props.optionsToggled ?
          <div className="options-toggled">
            <OptionsForm
              optionsToggled={this.props.optionsToggled}
              userPhotoInput={this.props.userPhotoInput}
              usernameInput={this.props.usernameInput}
              displayNameInput={this.props.displayNameInput}
              dateAndTimeInput={this.props.dateAndTimeInput}
              textInput={this.props.textInput}
              commentCountInput={this.props.commentCountInput}
              retweetCountInput={this.props.retweetCountInput}
              likeCountInput={this.props.likeCountInput}
              userPhotoInputChange={this.props.userPhotoInputChange}
              usernameInputChange={this.props.usernameInputChange}
              displayNameInputChange={this.props.displayNameInputChange}
              dateAndTimeInputChange={this.props.dateAndTimeInputChange}
              textInputChange={this.props.textInputChange}
              commentCountInputChange={this.props.commentCountInputChange}
              retweetCountInputChange={this.props.retweetCountInputChange}
              likeCountInputChange={this.props.likeCountInputChange}
              verifiedInputChange={this.props.verifiedInputChange}
              submitToImgur={this.props.submitToImgur}
              removePhoto={this.props.removePhoto}
              resetForm={this.props.resetForm}
            />
          </div>
        : null}
        <div className="options-sidebar">
          <OptionsForm
            optionsToggled={this.props.optionsToggled}
            userPhotoInput={this.props.userPhotoInput}
            usernameInput={this.props.usernameInput}
            displayNameInput={this.props.displayNameInput}
            dateAndTimeInput={this.props.dateAndTimeInput}
            textInput={this.props.textInput}
            commentCountInput={this.props.commentCountInput}
            retweetCountInput={this.props.retweetCountInput}
            likeCountInput={this.props.likeCountInput}
            userPhotoInputChange={this.props.userPhotoInputChange}
            usernameInputChange={this.props.usernameInputChange}
            displayNameInputChange={this.props.displayNameInputChange}
            dateAndTimeInputChange={this.props.dateAndTimeInputChange}
            textInputChange={this.props.textInputChange}
            commentCountInputChange={this.props.commentCountInputChange}
            retweetCountInputChange={this.props.retweetCountInputChange}
            likeCountInputChange={this.props.likeCountInputChange}
            verifiedInputChange={this.props.verifiedInputChange}
            submitToImgur={this.props.submitToImgur}
            removePhoto={this.props.removePhoto}
            resetForm={this.props.resetForm}
          />
        </div>
      </div>
    );
  }
}

export default Options;
