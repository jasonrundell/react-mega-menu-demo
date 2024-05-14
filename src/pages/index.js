import Menu from "@jasonrundell/react-mega-menu";
import Head from "next/head";

import styles from "@/styles/Home.module.css";

import SkipToMain from "../components/SkipToMain";

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
        label: "Settings",
        type: "mega",
        url: "/?settings",
        items: [
          {
            label: "Profile",
            type: "link",
            url: "/?profile",
            description: "Single line description that accompanies link",
          },
          {
            label: "Billing",
            type: "link",
            url: "/?billing",
            description: "Single line description that accompanies link",
          },
          {
            label: "Theme",
            type: "sub",
            url: "/?theme",
            description: "Change the React Mega Menu theme",
            items: [
              {
                label: "Light",
                type: "link",
                url: "/?theme=light",
              },
              {
                label: "Dark",
                type: "link",
                url: "/?theme=dark",
              },
              {
                label: "Monokai",
                type: "link",
                url: "/?theme=monokai",
              },
            ],
          },
          {
            label: "Logout",
            type: "link",
            url: "/?logout",
            description: "Single line description that accompanies link",
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
  /**
   * This is a simple example of how to change the theme of the React Mega Menu.
   * You can create an implementation of switching themes that works best for your project.
   * Be sure to consider how to save the theme preference for the user.
   */

  // change theme when href contains ?theme= and use the param value for the theme to change to
  if (typeof window !== "undefined") {
    const urlParams = new URLSearchParams(window.location.search);
    const theme = urlParams.get("theme");
    if (theme) {
      document
        .getElementById("rmm__menu")
        .classList.remove("rmm__theme--light");
      document.getElementById("rmm__menu").classList.remove("rmm__theme--dark");
      document
        .getElementById("rmm__menu")
        .classList.remove("rmm__theme--monokai");
      document
        .getElementById("rmm__menu")
        .classList.add(`rmm__theme--${theme}`);
    }
  }

  return (
    <>
      <SkipToMain>Skip to main content</SkipToMain>
      <Menu menuConfig={menuConfig} className="rmm__theme--light" />
      <Head>
        <title>React Mega Menu Demo</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Themes</h1>
        <ul>
          <li>
            <button
              onClick={() => {
                document
                  .getElementById("rmm__menu")
                  .classList.remove("rmm__theme--dark");
                document
                  .getElementById("rmm__menu")
                  .classList.remove("rmm__theme--monokai");
                document
                  .getElementById("rmm__menu")
                  .classList.add("rmm__theme--light");
              }}
            >
              Light
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                document
                  .getElementById("rmm__menu")
                  .classList.remove("rmm__theme--light");
                document
                  .getElementById("rmm__menu")
                  .classList.remove("rmm__theme--monokai");
                document
                  .getElementById("rmm__menu")
                  .classList.add("rmm__theme--dark");
              }}
            >
              Dark
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                document
                  .getElementById("rmm__menu")
                  .classList.remove("rmm__theme--light");
                document
                  .getElementById("rmm__menu")
                  .classList.remove("rmm__theme--dark");
                document
                  .getElementById("rmm__menu")
                  .classList.add("rmm__theme--monokai");
              }}
            >
              Monokai
            </button>
          </li>
        </ul>
      </main>
    </>
  );
}
