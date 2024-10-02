# Raised by Humanity

_Raised by Humanity_ is an innovative platform designed to give everyone a voice in shaping the future of AI. By democratizing AI governance, we aim to ensure that the development and deployment of AI technologies align with the needs and values of humanity as a whole.

## How it Works:

1. **Proof of Personhood:** To participate in our governance process, users must complete a facial scanning, ensuring that every voter is a real and unique human. This step guarantees the integrity of our democratic system.

2. **Voter ID Creation:** After successfully verifying your identity, you'll receive your voter ID, allowing you to participate in governance decisions.

3. **Governance Space on Snapshot:** With your voter ID, you can access our governance space hosted on [Snapshot](https://snapshot.org/#/). Here, you can view, discuss, and vote on key proposals regarding AI and its global impact.

By empowering individuals worldwide to engage in decision-making, _Raised by Humanity_ strives to ensure that AI serves the collective good of humanity. Join us in shaping the future of AI—by humanity, for humanity.

## Philosophy

[World Association](https://www.worldassociation.org/) applications are built on the principles of openness, individual freedom, and the right to fork. All core software and tools needed to run these applications are freely available and easy to use. This ensures that if the World Association or any of its platforms is ever compromised, the community can fork the system and create a new version that better serves the collective interests of humanity.

## Technology Stack

- Framework: [Next.js (App Router)](https://nextjs.org)
- Language: [TypeScript](https://typescriptlang.org)
- Styling: [Tailwind CSS](https://tailwindcss.com)
- Components: [Shadcn UI](https://ui.shadcn.com)
- Onchain components: [OnchainKit](https://onchainkit.xyz/)
- Backend: [Base](https://base.org) and [thirdweb Engine](https://thirdweb.com/engine)
- Auth: [zkMe](https://zk.me)
- Deployment: [Vercel](https://vercel.com)

## Getting Started

### Environment Setup

1. Copy the `.env.example` file and rename it to `.env`:
   ```bash
   cp .env.example .env
   ```
2. Open the `.env` file and replace the placeholder values with your actual API keys and configurations:
   - Coinbase Developer Platform: Get this from https://portal.cdp.coinbase.com/products/onchainkit
   - WalletConnect: Get this from https://www.walletconnect.com/
   - zKMe: Obtain from https://dashboard.zk.me/
   - thirdweb: Set up at https://thirdweb.com/dashboard/engine or deploy your own following [this guide](https://support.thirdweb.com/engine/eRgkLPBdL1WJJLzAbuWrPZ/how-to-deploy-your-self-hosted-thirdweb-engine-on-the-railway/d97FnFt8e926FqniTaYxfD)
3. Make sure not to commit your actual `.env` file to version control.

### Running the Development Server

To run the development server:

```bash
pnpm install
pnpm dev
```

The application will be available at http://localhost:3000.

## Contributing

We welcome contributions from the community. Please read our [Contributing Guidelines](CONTRIBUTING.md) for more information on how to get involved.

## License

This project is open-source and available under the [MIT License](LICENSE).
