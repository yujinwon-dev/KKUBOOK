import _ from 'lodash';

const formatKey = obj => {
  return _.mapKeys(obj, (value, key) => _.camelCase(key));
};

export default formatKey;
