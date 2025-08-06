import { useState } from "react";
import Admonition from "@theme/Admonition";
import styles from "./styles.module.css";
import { translate } from "@docusaurus/Translate";
import Translate from "@docusaurus/Translate";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function SignupForm() {
  const { i18n } = useDocusaurusContext();

  const APP_PREFIX = "https://app.seatsurfing.io";

  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [terms, setTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    if (!(email && email.indexOf("@") > 0)) {
      return;
    }

    setLoading(true);
    setShowError(false);
    setShowSuccess(false);
    let data = {
      firstname: name1,
      lastname: name2,
      email: email,
      organization: org,
      language: ["en", "de"].includes(i18n.currentLocale)
        ? i18n.currentLocale
        : "en",
      domain: domain,
      contactFirstname: firstname,
      contactLastname: lastname,
      password: password,
      acceptTerms: terms,
      plan,
    };
    queryAjax("POST", APP_PREFIX + "/signup/", data)
      .then((res) => {
        if (res.status >= 200 && res.status <= 299) {
          setShowSuccess(true);
        } else {
          setShowError(true);
          setLoading(false);
        }
      })
      .catch((e) => {
        console.log(e);
        setShowError(true);
        setLoading(false);
      });
  };

  const queryAjax = (method, url, data) => {
    let headers = new Headers();
    if (data) {
      headers.append("Content-Type", "application/json");
    }
    let options = {
      method: method,
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: headers,
    };
    if (data) {
      options.body = JSON.stringify(data);
    }
    return window.fetch(url, options);
  };

  return (
    <>
      <form id="contact" onSubmit={onSubmit} hidden={showSuccess}>
        <div className="row">
          <div className="col col--2">
            <label htmlFor="email">
              <Translate>Email address</Translate>
            </label>
          </div>
          <div className="col col--6">
            <input
              type="email"
              className={styles.input}
              id="email"
              aria-describedby="emailHelp"
              required={true}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.firstname}>
          <label htmlFor="firstname">Firstname</label>
          <input
            type="firstname"
            className="form-control"
            id="firstname"
            value={name1}
            onChange={(e) => setName1(e.target.value)}
          />
        </div>
        <div className={styles.lastname}>
          <label htmlFor="lastname">Lastname</label>
          <input
            type="lastname"
            className="form-control"
            id="lastname"
            value={name2}
            onChange={(e) => setName2(e.target.value)}
          />
        </div>
        <div className="row">
          <div className="col col--2">
            <label htmlFor="message">
              <Translate>Message</Translate>
            </label>
          </div>
          <div className="col col--6">
            <textarea
              className={styles.input}
              id="message"
              placeholder={translate({ message: "Your message" })}
              autoFocus
              required={true}
              value={message}
            />
          </div>
        </div>
        <div className="row">
          <div className="col col--8">
            <input
              type="checkbox"
              className="custom-control-input"
              id="accept-terms"
              required={true}
              checked={terms}
              onChange={(e) => setTerms(e.target.checked)}
            />
            <label className="inline-label" htmlFor="accept-terms">
              &nbsp;<Translate>I accept the</Translate>{" "}
              <Link target="_blank" to="/privacy-policy">
                <Translate>privacy policy</Translate>
              </Link>
              .
            </label>
          </div>
        </div>
        <div className="row">
          <div className="col col--8">
            <button type="submit" className="button button--primary button--lg">
              {loading ? (
                <div className="loader" id="signup-loading">
                  Loading...
                </div>
              ) : (
                <div>
                  <Translate>Sign up</Translate>
                </div>
              )}
            </button>
          </div>
        </div>
      </form>
      <div className="row">
        <div className="col col--8">
          {showSuccess ? (
            <Admonition type="info">
              <b>Thank you!</b> Please check your emails and complete your
              registration.
            </Admonition>
          ) : (
            <></>
          )}
          {showError ? (
            <Admonition type="caution">
              <b>That didn't work!</b> Please try again later or{" "}
              <a href="/support" target="_blank">
                contact us
              </a>
              .
            </Admonition>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}
