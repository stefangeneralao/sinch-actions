# Sinch Conversation API Actions
Send an conversation API message from GitHub Actions.

## Prerequisites
- Sinch dashboard account
- Conversation API app


## Usage
1. Create a conversation API with app setup with channels to use.

2. For listening to PR with certain label, in example listen PL with "urgent" label, add the following to the workflow
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
                "description": "${{ github.event.pull_request.html_url }}",
                "media_message": {
                  "url": "https://c.tenor.com/ScqOR78g6KgAAAAC/merge-wreck.gif"
                }
              }
            }
```

3. For listening to pipline failures
```
- name: Send message if the pipeline failed
    uses: stefangeneralao/sinch-actions@main
    with:
        clientId: ${{secrets.CLIENT_ID}}
        clientSecret: ${{secrets.CLIENT_SECRET}}
        projectId: ${{secrets.PROJECT_ID}}
        appId: ${{secrets.APP_ID}}
        message: >-
            {
              "card_message": {
                "title": "Pipeline failed. Branch: ${{ steps.branch-name.outputs.current_branch }}",
                "description": "${{ github.event.workflow_run.html_url }}",
                "media_message": {
                  "url": "https://c.tenor.com/mZuCRpWtld4AAAAC/be-doo-be-doo-minion.gif"
                },
                "choices":[]
              }
            }
```


## Inputs
- `clientId`: Sinch client id.
- `clientSecret`: Sinch client secret key.
- `projectId`: Id to your conversation API project.
- `appId`: Id to your conversation API app.
- `message`: The message you want to send.

## Contributing
[Damian Ceglarz](https://github.com/damianceglarz)

[Joakim Ysing](https://github.com/joaysi)

[Stefan Generalao](https://github.com/stefangeneralao)
