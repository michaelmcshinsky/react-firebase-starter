import React from "react";
import { Container, Row, Col } from "reactstrap";

export function Home() {
  return (
    <>
      <section id="home-banner" className="bg-primary text-white py-5">
        <Container className="text-center py-5">
          <h1>
            <span role="img" aria-label="react">
              ⚛️
            </span>
            <span className="px-2">React Firebase Starter</span>
            <span role="img" aria-label="firebase">
              🔥
            </span>
          </h1>
          <p className="lead">
            A starter kit built to get your projects off the ground quickly
          </p>
        </Container>
      </section>
      <section className="py-5">
        <Container>
          <h2>Getting Started</h2>
          <pre>
            <code>
              git clone
              https://github.com/michaelmcshinsky/react-firebase-starter.git
              <br />
              cd react-firebase-starter
              <br />
              yarn install
            </code>
          </pre>
          <hr/>
          <h2>Toolkit</h2>
          <p>
            Provided is a base set of packages to get you started fast. These
            can be fairly easily stripped down to the tools of your choice if so
            desired.
          </p>
          <ul>
            <li>React</li>
            <ul>
              <li>Authentication</li>
              <li>Routing (Public / Private)</li>
            </ul>
            <li>Firebase</li>
            <ul>
              <li>Functions (Seeds)</li>
              <li>Firestore rules</li>
              <li>.firebaserc</li>
            </ul>
            <li>Reactstrap</li>
            <li>Formik</li>
            <li>And More!</li>
          </ul>
          <hr/>
          <h2>How To Use</h2>
          <p>
            React Firebase Starter (FBS) comes with development and deployment
            scripts ready for your convenience.
          </p>
          <p>
            Development: <code>yarn start</code>
          </p>
          <p>
            Deploy Hosting: <code>yarn deploy:hosting</code>
          </p>
          <p>
            Deploy Firestore: <code>yarn deploy:firestore</code>
          </p>
          <p>
            Deploy Functions: <code>yarn deploy:functions (WIP)</code>
          </p>
        </Container>
      </section>
    </>
  );
}

export default Home;
