import { html } from 'lit-html';
import { repeat } from 'lit-html/lib/repeat';
import { Message } from 'twilio-chat/lib/message';

const ChatMessage = (author: string, body: string) => {
  return html`
    <div class="message">
      <p class="message-author">${author}</p>
      <p class="message-body">${body}</p>
    </div>
  `;
};

const ChatList = (messages: Message[]) => {
  return html`
    <div class="message-list">
      ${repeat(
        messages,
        msg => msg.sid,
        msg => ChatMessage(msg.author, msg.body)
      )}
    </div>
  `;
};

export default ChatList;
