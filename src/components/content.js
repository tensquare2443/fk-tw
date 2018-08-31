import React, {Component} from 'react';
import {
  heartSvg,
  verifiedSvg
} from '../svg';

class Content extends Component {
  render() {
    return(
      <div className="content-container">
        <div className="desktop-content">
          <div className="tweet-column">
            <div className="tweet-top-margin"></div>
            <div className="tweet">
              <div style={{display: 'flex', flexDirection: 'row'}}>
                <div>
                  {this.props.base64Image.length > 0 ?
                    <img
                      src={this.props.base64Image}
                      className="user-photo"
                    />
                    :
                    <img
                      src={require('../img/unknown.png')}
                      className="user-photo"
                    />
                  }
                </div>
                <div className="non-img-content">
                  <div className="top-row">
                    <div className="top-row-user-data">
                      <div className="display-name">
                        {this.props.displayName}
                      </div>
                      {this.props.verifiedStatus ?
                        <div>
                          <img
                            src={require('../img/bluecheck.png')}
                            className="verified-img"
                          />
                        </div>
                      : null}
                      <div className="username">
                        <span className="display-at-symbol">@</span>
                        {this.props.username}
                      </div>
                      <div className="bullet-point">&bull;</div>
                      <div className="date-and-time">
                        {this.props.dateAndTime}
                      </div>
                    </div>
                    <div className="top-arrow-container">
                      {verifiedSvg()}
                    </div>
                  </div>
                  <div className="text">This is the tweet text!</div>
                  <div className="bottom-row">
                    <div className="bottom-row-group">
                      <div>
                        <img
                          src={require('../img/comments.png')}
                          className="comments-img"
                        />
                      </div>
                      <div className="bottom-row-text">{this.props.commentCount}</div>
                    </div>
                    <div className="bottom-row-group">
                      <div>
                        <img
                          src={require('../img/retweets.png')}
                          className="retweets-img"
                        />
                      </div>
                      <div className="bottom-row-text">{this.props.retweetCount}</div>
                    </div>
                    <div className="bottom-row-group">
                      {heartSvg()}
                      <div className="bottom-row-text">{this.props.likeCount}</div>
                    </div>
                    <div className="bottom-row-group">
                      <div>
                        <img
                          src={require('../img/mail.png')}
                          className="mail-img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
