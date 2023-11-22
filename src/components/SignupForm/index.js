import React from "react";
import Admonition from '@theme/Admonition';
import styles from './styles.module.css';

export default function SignupForm() {
    const onSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <form id="signup" onSubmit={onSubmit}>
            <div className={styles.firstname}>
                <label for="firstname">Firstname</label>
                <input type="firstname" class="form-control" id="firstname" />
            </div>
            <div className={styles.lastname}>
                <label for="lastname">Lastname</label>
                <input type="lastname" class="form-control" id="lastname" />
            </div>
            <div className='row'>
                <div className='col col--2'>
                    <label for="organization">Organization</label>
                </div>
                <div className='col col--6'>
                    <input type="organization" className={styles.input} id="organization" required="required"
                        placeholder="Your company Ltd." minlength="3" autofocus="autofocus" />
                </div>
            </div>
            <div className='row'>
                <div className='col col--2'>
                    <label for="domain">Domain</label>
                </div>
                <div className='col col--6'>
                    <div class="domain-input">
                        <div className={styles.domainbox}>
                            <input type="text" className={styles.subdomain} id="domain" aria-describedby="domain-invalid domain-help"
                                required="required" minlength="3" />
                            <span class="input-group-text" id="domain-suffix">.on.seatsurfing.app</span>
                        </div>
                    </div>
                    <small id="domain-help" class="form-text text-muted">You can add your company's domain later.</small>
                    <Admonition type='caution'>Domain already in use.</Admonition>
                </div>
            </div>
            <div className='row'>
                <div className='col col--2'>
                    <label for="country">Country</label>
                </div>
                <div className='col col--6'>
                    <select className={styles.input} id="country">
                        <option value="BE">Belgium</option>
                        <option value="BG">Bulgary</option>
                        <option value="DK">Denmark</option>
                        <option value="DE" selected="selected">Germany</option>
                        <option value="EE">Estonia</option>
                        <option value="FJ">Finland</option>
                        <option value="FR">France</option>
                        <option value="GR">Greece</option>
                        <option value="IE">Ireland</option>
                        <option value="IT">Italy</option>
                        <option value="HR">Croatia</option>
                        <option value="LV">Latvia</option>
                        <option value="LT">Lithunia</option>
                        <option value="LU">Luxembourg</option>
                        <option value="MT">Malta</option>
                        <option value="NL">Netherlands</option>
                        <option value="AT">Austria</option>
                        <option value="PL">Poland</option>
                        <option value="PT">Portugal</option>
                        <option value="RO">Rumania</option>
                        <option value="SE">Sweden</option>
                        <option value="SK">Slovakia</option>
                        <option value="SI">Slovenia</option>
                        <option value="ES">Spain</option>
                        <option value="CY">Czechia</option>
                        <option value="CZ">Hungary</option>
                        <option value="HU">Cyprus</option>
                    </select>
                </div>
            </div>
            <div className='row'>
                <div className='col col--2'>
                    <label for="ap-firstname">Firstname</label>
                </div>
                <div className='col col--6'>
                    <input type="text" className={styles.input} id="ap-firstname" placeholder="Firstname" />
                </div>
            </div>
            <div className='row'>
                <div className='col col--2'>
                    <label for="ap-lastname">Lastname</label>
                </div>
                <div className='col col--6'>
                    <input type="text" className={styles.input} id="ap-lastname" placeholder="Lastname" />
                </div>
            </div>
            <div className='row'>
                <div className='col col--2'>
                    <label for="email">Email address</label>
                </div>
                <div className='col col--6'>
                    <input type="email" className={styles.input} id="email" aria-describedby="emailHelp" />
                    <small id="emailHelp" class="form-text text-muted">We'll only use your email address for the purpose of
                        signing up and handle it confidentially.</small>
                </div>
            </div>
            <div className='row'>
                <div className='col col--2'>
                    <label for="password">Password</label>
                </div>
                <div className='col col--6'>
                    <input type="password" className={styles.input} id="password" />
                </div>
            </div>
            <div className='row'>
                <div className='col col--8'>
                    <input type="checkbox" class="custom-control-input" id="accept-terms" />
                    <label class="inline-label" for="accept-terms">I accept the <a href="/privacy-policy/" target="_blank">privacy
                        policy</a> and the <a href="/terms/" target="_blank">terms of
                            use</a>.</label>
                </div>
            </div>
            <div className='row'>
                <div className='col col--8'>
                    <button type="submit" class="button button--primary button--lg">
                        <div class="loader" id="signup-loading">Loading...</div>
                        <div>Next &#10217;</div>
                    </button>
                </div>
            </div>
            <div className='row'>
                <div className='col col--8'>
                    <Admonition type='info'>
                        <b>Thank you!</b> Please check your emails and complete your registration.
                    </Admonition>
                    <Admonition type='caution'>
                        <b>That didn't work!</b> Please try again later.
                    </Admonition>
                </div>
            </div>
        </form >
    );
}