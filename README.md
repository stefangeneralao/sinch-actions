# sinch-actions
Send an conversation API message from GitHub Actions.

# Prerequisites
- Sinch dashboard account
- Conversation API app


# Usage
1. Create a conversation API with app setup with channels to use. Currently only Telegram can be used.

2. For listening to to PL with certain label add the following to the workflow
```
- name: Urgent PR was created
if: contains(github.event.pull_request.labels.*.name, 'urgent')
uses: stefangeneralao/sinch-actions@main
with:
    clientId: ${{secrets.CLIENT_ID}}
    clientSecret: ${{secrets.CLIENT_SECRET}}
    projectId: ${{secrets.PROJECT_ID}}
    appId: ${{secrets.APP_ID}}
    message: '{ "card_message": { "title": "🚨🚨🚨 An urgent PR was created by ${{ github.actor }} 🚨🚨🚨", "description": "${{ github.event.pull_request.html_url }}" } }'
    meta: ${{ toJSON(github) }}
```

3. 
```
- name: Send message if the pipeline failed
uses: stefangeneralao/sinch-actions@main
with:
    clientId: ${{secrets.CLIENT_ID}}
    clientSecret: ${{secrets.CLIENT_SECRET}}
    projectId: ${{secrets.PROJECT_ID}}
    appId: ${{secrets.APP_ID}}
    message: '{"card_message":{"title":"Pipeline failed. (Branch: ${{ steps.branch-name.outputs.current_branch }})","description":"(${{ github.server_url }}/${{ github.repository }}/actions/runs/${{ github.run_id }})","media_message":{"url":"https://composer-media-store.s3-eu-west-1.amazonaws.com/b127d2cc-2b11-4bb8-a7d3-6e2c84eb8104/a5950105-6aa2-46f3-babf-2134345abf64.jpeg"},"choices":[]}}'
```


# Inputs
- clientId: Sinch client id.
- clientSecret: Sinch client secret key.
- projectId: Id to your conversation API project.
- appId: Id to your conversation API app.
- message: The message you want to send.
