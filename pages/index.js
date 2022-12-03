import Head from "next/head";
import React from "react";
import classes from "../styles/home.module.scss";

function HomePage() {
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

          <form>
            <input type="email" placeholder="Email..." required />
            <button>Join Waiting List</button>
          </form>
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
