import Head from "next/head";
import React, { useState } from "react";
import classes from "../styles/home.module.scss";
import MailchimpSubscribe from "react-mailchimp-subscribe";

function HomePage() {
  const [email, setEmail] = useState("");

  const changeEmail = (e) => setEmail(e.target.value);

  return (
    <>
      <Head>
        <title>Simplistic Notes - Write Anything, Write Securely</title>
        <meta
          name="description"
          content="Simplistic Notes is a private, secure, and simple way to take notes.
            Write anything to help you remember later without the worry of
            someone else reading your notes."
        />
      </Head>

      <section className={classes.topContainer}>
        <header>
          <img src="/logo.svg" alt="Simplistic Notes Logo" />
          <p>
            <span>S</span>implistic Notes
          </p>
        </header>

        <section className={classes.hero}>
          <h1>Write anything. Write securely.</h1>
          <p>
            Simplistic Notes is a private, secure, and simple way to take notes.
            Write anything to help you remember later without the worry of
            someone else reading your notes.
          </p>

          <MailchimpSubscribe
            url="https://simplisticnotes.us11.list-manage.com/subscribe/post?u=12988138a20760393aa24795b&amp;id=071352879e&amp;f_id=008799e0f0"
            render={({ subscribe, status, message }) => (
              <>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    subscribe({ EMAIL: email });
                  }}
                >
                  <input
                    type="email"
                    value={email}
                    onChange={changeEmail}
                    placeholder="Email..."
                    required
                  />
                  <button>Join Waiting List</button>
                </form>
                {status === "sending" && (
                  <p className={classes.formCaption}>Subscribing...</p>
                )}
                {status === "success" && (
                  <p className={classes.formCaption}>Subscribed Successfully</p>
                )}
                {status === "error" && (
                  <p className={classes.formCaption}>{message}</p>
                )}
              </>
            )}
          />
          <p className={classes.formCaption}>Get early access</p>
        </section>
      </section>

      <section className={classes.featuresContainer}>
        <h2>Features</h2>

        <section className={classes.features}>
          <div>
            <img src="/lock.svg" alt="End-to-End Encryption Icon" />
            <p>End-to-end Encryption</p>
          </div>

          <div>
            <img src="/notebook.svg" alt="Rich Text, Todos and Markdown Icon" />
            <p>Rich Text, Todos, Markdown</p>
          </div>

          <div>
            <img src="/folder.svg" alt="Organize Notes in Folders Icon" />
            <p>Organize in Folders and Subfolders</p>
          </div>
        </section>
      </section>
    </>
  );
}

export default HomePage;
