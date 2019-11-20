import * as _ from 'lodash';
import * as mongoose from 'mongoose';

(<any>mongoose).Promise = global.Promise;

/**
 * Connect to the database
 *
 * @param  {Function} config
 */
export default function connectToDb(config: any) {
  const dbName = config('dbConfig.name');
  try {
    if (!_.isNull(config('dbConfig.connectionString'))) {
      mongoose.connect(config('dbConfig.connectionString'), { useNewUrlParser: true, useUnifiedTopology: true });
    } else {
      console.log(dbName)
      mongoose.connect(`mongodb://chatroomdb/${dbName}`, { useNewUrlParser: true });
    }
  } catch (e) {
    // tslint:disable-next-line
    console.log(`Error connecting to db: ${e}`);
  }
}