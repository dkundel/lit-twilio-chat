import Client from 'twilio-chat';
import { Message } from 'twilio-chat/lib/Message';
import { Channel } from 'twilio-chat/lib/channel';
import { html, render as renderLit } from 'lit-html/lib/lit-extended';
import ChatList from './chatView';

export class Chat {
  private messages: Message[] = [];
  private channel: Channel | null = null;

  constructor(
    private token: string,
    private channelName: string,
    private root: HTMLElement
  ) {
    this.messageSubmit = this.messageSubmit.bind(this);
  }

  private render() {
    const view = html`
    ${ChatList(this.messages)}
    <form on-submit="${this.messageSubmit}">
      <input type="text" name="message" placeholder="Type your message..." />
      <button type="submit">Send</button>
    </form>
  `;

    renderLit(view, this.root);
  }

  private messageSubmit(evt: Event) {
    evt.preventDefault();
    const form = evt.target as HTMLFormElement;
    const msg: string = form.message.value;
    if (this.channel) {
      this.channel.sendMessage(msg);
    }
    form.message.value = '';
  }

  private registerChannelListeners() {
    if (!this.channel) {
      return;
    }

    this.channel.on('messageAdded', (msg: Message) => {
      this.messages.push(msg);
      this.render();
    });
  }

  async init() {
    const client = await Client.create(this.token);

    try {
      this.channel = await client.getChannelByUniqueName(this.channelName);
    } catch {
      this.channel = await client.createChannel({
        uniqueName: this.channelName
      });
    }

    client.on('channelJoined', () => {
      this.registerChannelListeners();
    });

    await this.channel.join();
    this.messages = (await this.channel.getMessages()).items;
    this.render();
    return this;
  }
}
