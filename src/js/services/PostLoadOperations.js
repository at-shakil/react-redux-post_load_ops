import { PostLoadOperationType } from '../constants/Enums';
import { setPostLoadMessage } from '../actions/Home';

export default dispatch => {
  const operations = JSON.parse(sessionStorage.getItem("postLoadOperations"));

  return {
    push(type, data) {
      sessionStorage.setItem("postLoadOperations", JSON.stringify(operations ?
        operations.concat({type, data}) : [{type, data}]));
    },
    run() {
      if(operations) {
        operations.forEach(operation => {
          switch(operation.type) {
            case PostLoadOperationType.MESSAGE:
              dispatch(setPostLoadMessage(operation.data));
              break;
            default:
              return;
          }
        });
        sessionStorage.removeItem("postLoadOperations");
      }
    }
  };
};
