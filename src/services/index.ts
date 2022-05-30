import dynamoDBClient from '../model';
import AdnServerice from './adnService';

const adnService = new AdnServerice(dynamoDBClient());

export default adnService;
