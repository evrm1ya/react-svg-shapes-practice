import { Map } from 'immutable';

const setCommonPropsInImmutableMap = (callback) => (immutableMap) => {
  return Map(immutableMap.toSeq().map(callback));
};

export default setCommonPropsInImmutableMap;
