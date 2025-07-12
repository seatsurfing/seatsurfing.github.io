import { useState } from "react";
import Admonition from "@theme/Admonition";
import styles from "./styles.module.css";

export default function SignupForm() {
  const PLAN_FREE = "free";
  const PLAN_PAID = "paid";
  const APP_PREFIX = "https://app.seatsurfing.io";

  const urlParams = new URLSearchParams(window.location.search);

  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [org, setOrg] = useState("");
  const [plan, setPlan] = useState(
    urlParams.has("paid") ? PLAN_PAID : PLAN_FREE
  );
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
    let data = {
      firstname: name1,
      lastname: name2,
      email: email,
      organization: org,
      language: "en",
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
    let org2 = org.trim();
    let res = "";
    for (let i = 0; i < org2.length; i++) {
      let c = org2[i].toLowerCase();
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
            class="form-control"
            id="firstname"
            value={name1}
            onChange={(e) => setName1(e.target.value)}
          />
        </div>
        <div className={styles.lastname}>
          <label htmlFor="lastname">Lastname</label>
          <input
            type="lastname"
            class="form-control"
            id="lastname"
            value={name2}
            onChange={(e) => setName2(e.target.value)}
          />
        </div>
        <div className="row">
          <div className="col col--2">
            <label htmlFor="organization">Organization</label>
          </div>
          <div className="col col--6">
            <input
              type="organization"
              className={styles.input}
              id="organization"
              placeholder="Your company Ltd."
              minlength="3"
              autofocus="autofocus"
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
              Free &ndash; no cost, no commitment for up to 10 users
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
              Paid (0.90€ / user) &ndash; enterprise features and no user limit
            </label>
            <div>
              <small className="form-text text-muted">
                {plan === PLAN_FREE
                  ? "You can always upgrade to our Paid Plan after signing-up to unlock unlimited users and other enterprise features 🚀."
                  : "After signing up, you need to upgrade to the Paid Plan in your administration interface to unlock all features 🚀."}
              </small>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col col--2">
            <label htmlFor="domain">Domain</label>
          </div>
          <div className="col col--6">
            <div class="domain-input">
              <div className={styles.domainbox}>
                <input
                  type="text"
                  className={styles.subdomain}
                  id="domain"
                  aria-describedby="domain-invalid domain-help"
                  minlength="3"
                  required={true}
                  value={domain}
                  onChange={(e) => {
                    setDomain(e.target.value);
                    onDomainChange(e.target.value);
                  }}
                />
                <span class="input-group-text" id="domain-suffix">
                  &nbsp;.seatsurfing.app
                </span>
              </div>
            </div>
            <small id="domain-help" class="form-text text-muted">
              Add your custom domain later (requires Paid Plan).
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
            <label htmlFor="ap-firstname">Firstname</label>
          </div>
          <div className="col col--6">
            <input
              type="text"
              className={styles.input}
              id="ap-firstname"
              placeholder="Firstname"
              required={true}
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col col--2">
            <label htmlFor="ap-lastname">Lastname</label>
          </div>
          <div className="col col--6">
            <input
              type="text"
              className={styles.input}
              id="ap-lastname"
              placeholder="Lastname"
              required={true}
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col col--2">
            <label htmlFor="email">Email address</label>
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
            <small id="emailHelp" class="form-text text-muted">
              We treat your email address confidentially and will use it for the
              sign up process and sending product information.
            </small>
          </div>
        </div>
        <div className="row">
          <div className="col col--2">
            <label htmlFor="password">Password</label>
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
              class="custom-control-input"
              id="accept-terms"
              required={true}
              checked={terms}
              onChange={(e) => setTerms(e.target.checked)}
            />
            <label class="inline-label" htmlFor="accept-terms">
              &nbsp;I accept the{" "}
              <a href="/privacy-policy/" target="_blank">
                privacy policy
              </a>{" "}
              and the{" "}
              <a href="/terms/" target="_blank">
                terms of use
              </a>
              .
            </label>
          </div>
        </div>
        <div className="row">
          <div className="col col--8">
            <button
              type="submit"
              class="button button--primary button--lg"
              disabled={!allowSubmit}
            >
              {loading ? (
                <div class="loader" id="signup-loading">
                  Loading...
                </div>
              ) : (
                <div>Next &#10217;</div>
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
