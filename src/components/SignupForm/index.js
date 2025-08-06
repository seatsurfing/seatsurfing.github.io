import { useState } from "react";
import Admonition from "@theme/Admonition";
import styles from "./styles.module.css";
import { translate } from "@docusaurus/Translate";
import Translate from "@docusaurus/Translate";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function SignupForm() {
  const { i18n } = useDocusaurusContext();

  const PLAN_FREE = "free";
  const PLAN_PAID = "paid";
  const APP_PREFIX = "https://app.seatsurfing.io";

  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [org, setOrg] = useState("");
  const [plan, setPlan] = useState(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.has("paid") ? PLAN_PAID : PLAN_FREE;
    }
    return PLAN_FREE;
  });
  const [domain, setDomain] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [terms, setTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [allowSubmit, setAllowSubmit] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showDomainInUse, setShowDomainInUse] = useState(false);
  let timerDomain = undefined;

  const onSubmit = (event) => {
    event.preventDefault();
    if (!allowSubmit) return;
    if (!(email && email.indexOf("@") > 0)) {
      return;
    }
    setLoading(true);
    setShowError(false);
    setShowSuccess(false);
    const data = {
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
    const headers = new Headers();
    if (data) {
      headers.append("Content-Type", "application/json");
    }
    const options = {
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

  const onDomainChange = (domain) => {
    window.clearTimeout(timerDomain);
    setLoading(true);
    setShowDomainInUse(false);
    let domain2 = domain.trim();
    if (domain2.length < 3) {
      setLoading(false);
      return;
    }
    timerDomain = window.setTimeout(function () {
      domain2 = domain2.toLowerCase() + ".seatsurfing.app";
      queryAjax("GET", APP_PREFIX + "/organization/domain/" + domain2, null)
        .then((res) => {
          if (res.status === 404) {
            setAllowSubmit(true);
          } else {
            setShowDomainInUse(true);
            setLoading(false);
            setAllowSubmit(false);
          }
          setLoading(false);
        })
        .catch(() => {
          setShowDomainInUse(true);
          setLoading(false);
          setAllowSubmit(false);
        });
    }, 500);
  };

  const setDomainFromOrg = (org) => {
    const valid = "abcdefghijklmnopqrstuvwxyz-_";
    const org2 = org.trim();
    let res = "";
    for (let i = 0; i < org2.length; i++) {
      const c = org2[i].toLowerCase();
      if (c === " ") {
        res += "-";
      } else if (valid.indexOf(c) > -1) {
        res += c;
      }
    }
    setDomain(res);
    onDomainChange(res);
  };

  return (
    <>
      <form id="signup" onSubmit={onSubmit} hidden={showSuccess}>
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
            <label htmlFor="organization">
              <Translate>Organization</Translate>
            </label>
          </div>
          <div className="col col--6">
            <input
              type="organization"
              className={styles.input}
              id="organization"
              placeholder={translate({ message: "Your company Ltd." })}
              minLength="3"
              autoFocus
              required={true}
              value={org}
              onChange={(e) => {
                setOrg(e.target.value);
                setDomainFromOrg(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col col--2">
            <label>Plan</label>
          </div>
          <div className="col col--6">
            <input
              type="radio"
              id="planFree"
              name="plan"
              value={PLAN_FREE}
              checked={plan === PLAN_FREE}
              onChange={(e) => {
                setPlan(e.target.value);
              }}
            />
            <label htmlFor="planFree">
              <Translate>
                Free – no cost, no commitment for up to 10 users
              </Translate>
            </label>
            <br />
            <input
              type="radio"
              id="planPaid"
              name="plan"
              value={PLAN_PAID}
              checked={plan === PLAN_PAID}
              onChange={(e) => {
                setPlan(e.target.value);
              }}
            />
            <label htmlFor="planPaid">
              <Translate>
                Professional (0.90€ / user) – enterprise features and no user
                limit
              </Translate>
            </label>
            <div>
              <small className="form-text text-muted">
                {plan === PLAN_FREE
                  ? translate({
                      message:
                        "You can always upgrade to our Professional plan after signing-up to unlock unlimited users and other enterprise features 🚀.",
                    })
                  : translate({
                      message:
                        "After signing up, you need to upgrade to the Professional plan in your administration interface to unlock all features 🚀.",
                    })}
              </small>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col col--2">
            <label htmlFor="domain">Domain</label>
          </div>
          <div className="col col--6">
            <div className="domain-input">
              <div className={styles.domainbox}>
                <input
                  type="text"
                  className={styles.subdomain}
                  id="domain"
                  aria-describedby="domain-invalid domain-help"
                  minLength="3"
                  required={true}
                  value={domain}
                  onChange={(e) => {
                    setDomain(e.target.value);
                    onDomainChange(e.target.value);
                  }}
                />
                <span className="input-group-text" id="domain-suffix">
                  &nbsp;.seatsurfing.app
                </span>
              </div>
            </div>
            <small id="domain-help" className="form-text text-muted">
              Add your custom domain later (requires Professional plan).
            </small>
            {showDomainInUse ? (
              <Admonition type="caution">Domain already in use.</Admonition>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="row">
          <div className="col col--2">
            <label htmlFor="ap-firstname">
              <Translate>Firstname</Translate>
            </label>
          </div>
          <div className="col col--6">
            <input
              type="text"
              className={styles.input}
              id="ap-firstname"
              required={true}
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col col--2">
            <label htmlFor="ap-lastname">
              <Translate>Lastname</Translate>
            </label>
          </div>
          <div className="col col--6">
            <input
              type="text"
              className={styles.input}
              id="ap-lastname"
              required={true}
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
        </div>
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
            <small id="emailHelp" className="form-text text-muted">
              <Translate>
                We treat your email address confidentially and will use it for
                the sign up process and sending product information.
              </Translate>
            </small>
          </div>
        </div>
        <div className="row">
          <div className="col col--2">
            <label htmlFor="password">
              <Translate>Password</Translate>
            </label>
          </div>
          <div className="col col--6">
            <input
              type="password"
              className={styles.input}
              id="password"
              required={true}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
              </Link>{" "}
              and the{" "}
              <Link target="_blank" to="/terms">
                <Translate>terms of use</Translate>
              </Link>
              .
            </label>
          </div>
        </div>
        <div className="row">
          <div className="col col--8">
            <button
              type="submit"
              className="button button--primary button--lg"
              disabled={!allowSubmit}
            >
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
              <Link target="_blank" to="/support">
                <Translate>contact us</Translate>
              </Link>
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
