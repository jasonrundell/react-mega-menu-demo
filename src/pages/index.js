import Menu from "@jasonrundell/react-mega-menu";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

import SkipToMain from "../components/SkipToMain";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

/**
 * Here's an example of a menu configuration object.
 * This is the object that is currently used for the default values in the
 * React Mega Menu project.
 */
const menuConfig = {
  topbar: {
    id: "topbar",
    logo: {
      src: "https://via.placeholder.com/150x50",
      alt: "Placeholder Logo",
      rel: "home",
    },
    title: "Your Site Title",
  },
  menu: {
    items: [
      {
        label: "Home",
        type: "main",
        url: "/",
      },
      {
        label: "About",
        type: "main",
        url: "/?about",
      },
      {
        label: "Store",
        type: "mega",
        url: "/?store",
        items: [
          {
            label: "Deals",
            type: "link",
            url: "/?deals",
            description:
              "Three lined small description that accompanies link in the React Mega Menu project. This maybe too much text? Who's to say, really. We'll leave it to fate to decide.",
          },
          {
            label: "Kitchen",
            type: "link",
            url: "/?kitchen",
            description:
              "Three lined small description that accompanies link in the React Mega Menu project. This maybe too much text? Who's to say, really. We'll leave it to fate to decide.",
          },
          {
            label: "Outdoors",
            type: "sub",
            url: "/?outdoors",
            description:
              "Three lined small description that accompanies link in the React Mega Menu project. This maybe too much text? Who's to say, really. We'll leave it to fate to decide.",
            items: [
              {
                label: "Tools",
                type: "link",
                url: "/?tools",
                description: "Single line description that accompanies link",
              },
              {
                label: "Plants",
                type: "link",
                url: "/?plants",
                description: "Single line description that accompanies link",
              },
              {
                label: "Patio",
                type: "link",
                url: "/?patio",
                description: "Single line description that accompanies link",
              },
              {
                label: "Decking",
                type: "link",
                url: "/?decking",
                description: "Single line description that accompanies link",
              },
            ],
          },
          {
            label: "Bedroom",
            type: "sub",
            url: "/?bedroom",
            description:
              "Three lined small description that accompanies link in the React Mega Menu project. This maybe too much text? Who's to say, really. We'll leave it to fate to decide.",
            items: [
              {
                label: "Beds",
                type: "link",
                url: "/?beds",
                description: "Single line description that accompanies link",
              },
              {
                label: "Dressers",
                type: "link",
                url: "/?dressers",
                description:
                  "Double lined small description that accompanies link in the React Mega Menu project",
              },
              {
                label: "Nightstands",
                type: "link",
                url: "/?nightstands",
                description:
                  "Double lined small description that accompanies link in the React Mega Menu project",
              },
              {
                label: "Benches",
                type: "link",
                url: "/?benches",
                description:
                  "Double lined small description that accompanies link in the React Mega Menu project",
              },
            ],
          },
        ],
      },
      {
        label: "Blog",
        type: "mega",
        url: "/?blog",
        items: [
          {
            label: "Latest Post Title",
            type: "link",
            url: "/?latest-post-title",
            description:
              "Double lined small description that accompanies link in the React Mega Menu project",
          },
          {
            label: "Categories",
            type: "sub",
            url: "/?categories",
            items: [
              {
                label: "News",
                type: "link",
                url: "/?news",
              },
              {
                label: "Recipes",
                type: "link",
                url: "/?recipes",
              },
              {
                label: "Health",
                type: "link",
                url: "/?health",
              },
              {
                label: "Diet",
                type: "link",
                url: "/?diet",
              },
            ],
          },
        ],
      },
      {
        label: "Help",
        type: "mega",
        url: "/?help",
        items: [
          {
            label: "FAQ",
            type: "link",
            url: "/?faq",
            description: "Single line description that accompanies link",
          },
          {
            label: "Knowledge Base",
            type: "link",
            url: "/?knowledge-base",
            description:
              "Double lined small description that accompanies link in the React Mega Menu project",
          },
        ],
      },
      {
        label: "Contact",
        type: "main",
        url: "/?contact",
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <SkipToMain>Skip to main content</SkipToMain>
      <Menu menuConfig={menuConfig} />
      <Head>
        <title>React Mega Menu Demo</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>src/pages/index.js</code>
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{" "}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>

        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Docs <span>-&gt;</span>
            </h2>
            <p>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Learn <span>-&gt;</span>
            </h2>
            <p>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Templates <span>-&gt;</span>
            </h2>
            <p>
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Deploy <span>-&gt;</span>
            </h2>
            <p>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
