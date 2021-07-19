import { connect } from 'react-redux';
import { fetchTweets } from '../../action/tweet_actions';
import Tweets from './tweets';
// import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
  return {
    tweets: Object.values(state.tweets)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTweets: () => dispatch(fetchTweets())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tweets);