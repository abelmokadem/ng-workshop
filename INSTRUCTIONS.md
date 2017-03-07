# Create repository 

**Step 1: Install Angular CLI** 
```
$ npm install -g @angular/cli
...
$ ng new workshop --skip-git --directory .
```

**Step 2: Using the CLI**
```
$ npm run start # ng serve (development server)
...
$ npm run test # ng test (unit tests)
...
$ npm run e2e # ng e2e (e2e tests)
```

Generating code
```
$ npm run ng -- generate service feature/videos/videos # ng generate
...
  create src/app/feature/videos/videos.service.spec.ts
  create src/app/feature/videos/videos.service.ts
  WARNING Service is generated but not provided, it must be provided to be used
...
$ npm run ng -- generate component feature/videos/videos # ng generate
...
  create src/app/feature/videos/videos/videos.component.css
  create src/app/feature/videos/videos/videos.component.html
  create src/app/feature/videos/videos/videos.component.spec.ts
  create src/app/feature/videos/videos/videos.component.ts
  update src/app/app.module.ts
...
```

For more information visit the [Angular CLI Wiki](https://github.com/angular/angular-cli/wiki)