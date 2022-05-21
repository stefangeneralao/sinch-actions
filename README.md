# Sinch Conversation API Actions
Send an conversation API message from GitHub Actions.

## Prerequisites
- Sinch dashboard account
- Conversation API app

## Usage
For listening to PR with a label called "urgent", add the following to the workflow:
```
- name: Urgent PR was created
    if: contains(github.event.pull_request.labels.*.name, 'urgent')
    uses: stefangeneralao/sinch-actions@main
    with:
        clientId: ${{secrets.CLIENT_ID}}
        clientSecret: ${{secrets.CLIENT_SECRET}}
        projectId: ${{secrets.PROJECT_ID}}
        appId: ${{secrets.APP_ID}}
        message: >-
            {
              "card_message": {
                "title": "🚨🚨🚨 An urgent PR was created by ${{ github.actor }} 🚨🚨🚨",
                "description": "${{ github.event.pull_request.html_url }}"
              }
            }
```

## Inputs
- `clientId`: Sinch client id.
- `clientSecret`: Sinch client secret key.
- `projectId`: Id of your Conversation API project.
- `appId`: Id of your Conversation API app.
- `message`: The message you want to send.

## Further documentation
Conversation API documentation: [https://developers.sinch.com/docs/conversation](https://developers.sinch.com/docs/conversation)

## Contributing
[Damian Ceglarz](https://github.com/damianceglarz)

[Joakim Ysing](https://github.com/joaysi)

[Stefan Generalao](https://github.com/stefangeneralao)
