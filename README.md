This is the Next.js frontend project for [Echo](https://echo-frontend-two.vercel.app), a blockchain-powered anonymous reporting platform.
Echo demonstrates how blockchain and smart contracts can enhance anonymity in reporting, encouraging individuals to share secrets they might otherwise keep hidden, all with 100% confidentiality. On Echo, all reports and evidence are encrypted, stored using IPFS technology, and uploaded to the blockchain via Stellar smart contracts, Soroban.

## Getting Started

Check out Echo live [here](https://echo-frontend-two.vercel.app). To run it locally, first clone and set up the backend repo built with Node.js (if you want to), or use the live backend API URL and insert it into your cloned Next.js environment as `NEXT_PUBLIC_API_URL`.

- Clone and Set Up Backend Repo: [https://github.com/JeffreyChix/echo-backend.git](https://github.com/JeffreyChix/echo-backend.git)
- Live Backend API URL: [https://echo-backend-production-b78d.up.railway.app](https://echo-backend-production-b78d.up.railway.app)

## Setting up the environment variables

Create a `.env` file in the root directory of your project and copy the values from the `.env-example` file. Besides the `NEXT_PUBLIC_API_URL`, there are three required environment variables:

- `NEXTAUTH_SECRET`: Generate this using `crypto.randomUUID`, `openssl`, or any random string.
- `GITHUB_CLIENT_ID`
- `GITHUB_CLIENT_SECRET`

To set up `GITHUB_CLIENT_ID` and `GITHUB_CLIENT_SECRET`, follow these steps to create a new OAuth App on GitHub:

1. Visit [this link](https://github.com/settings/developers) (make sure you're logged in to GitHub).
2. In the sidebar, click on `OAuth Apps`.
3. Click the `New OAuth App` button.
4. Enter "Echo" as the application name. Use `http://localhost:3000` as the Homepage URL and `http://localhost:3000/api/auth/callback/github` as the Authorization callback URL.
5. Copy your `Client ID`.
6. Generate a new client secret and copy that as well.
7. You're all set!

**Note: I integrated authentication with NextAuth and GitHub OAuth to protect the dashboard. The goal is to provide a secure area where authorities can log in and manage submitted reports. I plan to develop a more robust authentication system for the authorities, but the current setup serves as a basic form of protection.**

## Run the project

Install the dependencies eg: `npm install` and run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
