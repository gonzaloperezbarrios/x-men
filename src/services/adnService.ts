import dynamodb, { DocumentClient } from 'aws-sdk/clients/dynamodb';

import AdnModel from '../model/adn';

export default class AdnServerice {

    private Tablename = 'AdnTable';

    constructor(private docClient: DocumentClient) { }

    async getAll(): Promise<AdnModel[]> {
        const adns = await this.docClient.scan({
            TableName: this.Tablename,
        }).promise();
        return adns.Items as AdnModel[];
    }

    async create(adn: AdnModel): Promise<AdnModel> {
        await this.docClient.put({
            TableName: this.Tablename,
            Item: adn
        }).promise();
        return adn as AdnModel;
    }

    async get(id: string): Promise<any> {
        const adn = await this.docClient.get({
            TableName: this.Tablename,
            Key: {
                adnId: id
            }
        }).promise();
        if (!adn.Item) {
            throw new Error('Id does not exit');
        }
        return adn.Item as AdnModel;
    }

    async update(id: string, adn: Partial<AdnModel>): Promise<AdnModel> {
        const updated = await this.docClient
            .update({
                TableName: this.Tablename,
                Key: { adnId: id },
                UpdateExpression:
                    'set #status = :status',
                ExpressionAttributeNames: {
                    '#status': 'status',
                },
                ExpressionAttributeValues: {
                    ':status': adn.status,
                },
                ReturnValues: 'ALL_NEW',
            })
            .promise();
        return updated.Attributes as AdnModel;
    }

    async delete(id: string): Promise<any> {
        return await this.docClient.delete({
            TableName: this.Tablename,
            Key: {
                adnId: id
            }
        }).promise();
    }
}
