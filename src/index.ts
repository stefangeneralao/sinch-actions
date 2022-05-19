import core from '@actions/core';

const clientId = core.getInput('clientId');
const clientSecret = core.getInput('clientSecret');

console.log('This MESSAGE is from Sinch Actions. Not the PoC:', {
  clientId,
  clientSecret,
});
