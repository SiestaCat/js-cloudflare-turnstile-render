const $ = require('jquery');

const script_url = 'https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onloadTurnstileCallback';

class CloudflareTurnstile
{
    constructor(sitekey, render_selector, token_callback = () => {})
    {
        this.sitekey = sitekey;
        this.render_selector = render_selector;
        this.token = null;
        this.token_callback = token_callback
    }

    getToken()
    {
        return this.token;
    }

    render(_this)
    {
        _this.token = null;
        if(document.querySelector(_this.render_selector) === null) return;
        turnstile.render(_this.render_selector, {
            sitekey: _this.sitekey,
            callback: (token) => {
                _this.token = token;
                _this.token_callback(token);
            }
        });
    }

    load()
    {
        let _this = this;
        window.onloadTurnstileCallback = () => {_this.render(_this)};

        $.getScript(script_url);

        return this;
    }
}

module.exports = CloudflareTurnstile;