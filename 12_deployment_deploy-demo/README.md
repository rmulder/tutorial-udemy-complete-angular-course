
# DeployDemo
```
npm install
ng serve
```

## Only for DEMONSTRATION purposes
```
# node compiler (new ngstyle ngfactory css or ts files)
node_modules\.bin\ngc
# done at runtime... DEMONSTRATION
```

```
# ng build
# bundle js stays big, no minification, uglification... No ahead of time compilation

# now deployable version of app
ng build --prod
```

## Linting
```
ng lint --fix
```

Or TSLint for VSCode extension (source)[https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin].

## DEPLOYMENT OPTIONS

### 1) GitHub Pages:
- simplest
- no backend

```
sudo npm i -g angular-cli-ghpages

ng build --prod --base-href="https://username.github.io/repository/"
# root of website on github pages

# angular-cli-ghpages

# ngh --no-silent

sudo ngh

```

In `package.json`, new script "deploy:gh" with script:
"ng build --prod --base-href=... && sudo ngh"

and `npm run deploy:gh`.

### 2) Firebase
- Platform provided by Google
- firebase as a backend
- fast, time-saver
- stable

```
sudo npm i -g firebase-tools

firebase login

firebase init
```

Edit firebase.json: hosting public folder:
```
{
    "hosting":{
        "public":"dist",
        "rewrites":[
            {
                'source':"**",
                "destination":"index.html"
            }
        ]
    }
}
```


```
ng build --prod

firebase deploy
```
Script = "deploy:firebase": "ng build --prod && firebase deploy"

### 3) Heroku
- Custom backend
- clean
- elegant
(Azure is more complicated)

Cloud platform as a service (PaaS) that lets you build, monitor and scale your apps.

Suitable to build your backend yourself.

`server.js`: supersimple node application

- Sign up at heroku.com
- Install heroku CLI

```
heroku --version
heroku login
heroku create
```

See (here)[https://www.udemy.com/the-complete-angular-master-class/learn/lecture/7613433#overview]:
Copy from `devDependencies` to `dependencies` in `package.json`:
```
    "@angular/cli": "1.2.4",
    "@angular/compiler-cli": "^4.0.0",
    "typescript": "~2.3.3"
```

In scripts: "postinstall": "ng build --prod"

Install express framework (see server.js):
`npm i express --save`

In `scripts.start`, "node server.js"


#### ENGINES
To avoid version problems on heroku, in package.json:
```
"engines":{
    "node": //node --version
    "npm": // npm --version
}
```