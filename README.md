# lit-twilio-chat
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)

💬 A Twilio Chat example powered by lit-html with TypeScript

## Setup

1. Get a Twilio account - https://www.twilio.com/try-twilio
2. [Create a Chat Service in Twilio Chat](https://www.twilio.com/console/chat/services)
3. [Create a new Twilio Function to generate a Twilio Chat Access Token](https://www.twilio.com/console/runtime/functions/manage)
4. Clone repository:

```bash
git clone https://github.com/dkundel/lit-twilio-chat.git
cd lit-twilio-chat
npm install
```

5. Copy `src/config.example.ts` to `src/config.ts`
6. Add URL to Twilio Function

## Development

Run the following command to run the app in development mode:

```bash
npm start
```

## Build

Build the files for production by running:

```bash
npm run build
```

Afterwards copy the files in the `dist/` folder to your favorite website host.

## License

MIT

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars3.githubusercontent.com/u/1505101?v=4" width="100px;"/><br /><sub><b>Dominik Kundel</b></sub>](https://moin.world)<br />[💻](https://github.com/dkundel/lit-twilio-chat/commits?author=dkundel "Code") |
| :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->