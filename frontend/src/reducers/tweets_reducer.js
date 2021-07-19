import { RECEIVE_TWEETS, RECEIVE_USER_TWEETS, RECEIVE_NEW_TWEET } from '../action/tweet_actions';
  
  const TweetsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch(action.type) {
      case RECEIVE_TWEETS:
        // newState.all = action.tweets.data;
        // return newState;
        return action.tweets.data;
      case RECEIVE_USER_TWEETS:
        // newState.user = action.tweets.data;
        // return newState;
        return action.tweets.data;
      case RECEIVE_NEW_TWEET:
        newState.new = action.tweet.data
        return newState;
        // return action.tweet.data
      default:
        return state;
    }
  };
  
  export default TweetsReducer;