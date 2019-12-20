
## Deploying a React App to `Netlify`

After making our apps look amazing we want to show it off to the world!

Lets host our React App using Netlify. 

Follow these steps:

1. First go to [https://www.netlify.com/](https://www.netlify.com/) and create an account using Github. 
2. Next go to your React App folder in the command line and run the command `npm run build`. This will do all the work necessary to have your app ready for deployment. 
3. In your package.json add a field name with value
```javascript
"homepage":"."
```
4. Install the netlify CLI using `npm install netlify-cli -g`.
5. Now type `netlify deploy` and visit the link it provides to verify your account. 
6. Once you are done verifying, it should give you some options, select `+  Create & configure a new site `.
7. Select a team, this would usually be the same as your Netlify-ID.
8. Then give your website some unique name. 
9. In the deploy path option type `build`. 
10. Your draft should be live on the `Live Draft URL:`. Visit the lin kand make sure your application is working correctly.
11. If you application is working, type `netlify deploy --prod` to deploy the application. The deploy path should be `build`.
12. Visit the live URL to see your website live on the Internet for anyone to visit.
13. If you have `react-router-dom` installed, then you need to do an additional step of setting `redirects` on netlify
14. In your build folder, create `_redirects` file.
15. Add the following to the `_redirects` file
```
/* /index.html 200
```

Alternatively you can run `npm build` and deploy the optimised build folder to your domain

