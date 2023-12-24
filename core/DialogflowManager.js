const dialogflow = require('dialogflow');

class DialogflowManager {
    constructor({ project_id, private_key, client_email }) {
        this.sessionClient = new dialogflow.SessionsClient({
            projectId: project_id,
            credentials: { private_key, client_email }
        });
    }

    async sendMessage(chatId, message) {
        const sessionPath = this.sessionClient.sessionPath(configs.project_id, chatId);
        const request = this.buildRequest(message);
        const responses = await this.sessionClient.detectIntent(request);
        return this.processResponse(responses);
    }

    buildRequest(message) {
        const sessionPath = this.sessionClient.sessionPath(configs.project_id, chatId);
        const request = { session: sessionPath, queryInput: {} };
        const textQueryInput = { text: { text: message, languageCode: 'pt-BR' } };
        const eventQueryInput = { event: { name: 'start', languageCode: 'pt-BR' } };
        request.queryInput = message === '/start' ? eventQueryInput : textQueryInput;
        return request;
    }

    processResponse(responses) {
        const result = responses[0].queryResult;
        return { text: result.fulfillmentText, intent: result.intent.displayName, fields: result.parameters.fields };
    }
}

module.exports = new DialogflowManager();
