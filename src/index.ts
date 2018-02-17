import { TokenEndpointUrl } from './config';

console.log('Hello');

const btn = document.querySelector('button') as HTMLButtonElement;
const input = document.querySelector('#username') as HTMLInputElement;
const root = document.querySelector('#root') as HTMLElement;

btn.addEventListener('click', async () => {
  const username = input.value;
  const tokenUrl = `${TokenEndpointUrl}?username=${username}`;
  const { Chat } = await import('./chat');
  const resp = await fetch(tokenUrl);

  if (!resp.ok) {
    console.error('Failed to request token');
    return;
  }

  const { token } = await resp.json();
  const chat = await new Chat(token, 'something', root).init();
});
