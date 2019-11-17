import* as  _ from 'lodash';
import * as ConfigValues from './config';

const env = process.env.NODE_ENV || 'production';

/**
 * Returns a value for a given config key
 *
 * @param  {String} key
 * @return {String}
 */
export default function config(key: string): string {
  if (!key) {
    throw new Error('No key given');
  }

  if (_.isNull(ConfigValues) || !_.isObject(ConfigValues)) {
    throw new Error(`No config exists for this environment (${env})`);
  }

  if (!_.has(ConfigValues, key)) {
    throw new Error(`Config has no key named ${key}`);
  }

  return _.get(ConfigValues, key);
}