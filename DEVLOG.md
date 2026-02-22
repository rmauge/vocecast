# Fixes
### OAuth State cookies not persisted (02/22/2025)

```
[Better Auth]: Failed to parse state [Error [BetterAuthError]: State mismatch: State not persisted correctly] {
  code: 'state_security_mismatch',
  details: [Object]
}
```

[NextJS cookes plugin](https://www.better-auth.com/docs/integrations/next#cookie-based-checks-recommended-for-all-versions)

>Server Action Cookies
When you call a function that needs to set cookies, like signInEmail or signUpEmail in a server action, cookies won’t be set. This is because server actions need to use the cookies helper from Next.js to set cookies.
To simplify this, you can use the nextCookies plugin, which will automatically set cookies for you whenever a Set-Cookie header is present in the response.