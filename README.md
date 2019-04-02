# els-test-app

An app to quickly test out some ember-language-server features to ensure we're on the right track.

## Installation

* `git clone <repository-url>` this repository
* `cd els-test-app`
* `npm install`

## Tests to execute

### Route completion in transitionTo

Open up app/routes/index.js, go to the `this.transitionTo('foo');`
statement and ask for completions on `'fo'` or `'foo'`.  This should yield
a few options like `'foo.baz'` and `'foo.baz.baloo'`.

### Model completion in findRecord

Open up app/routes/index.js, uncomment one of the lines containing
`this.store.findRecord(...);`.  Completions of the string supplied to
findRecord should include glass, bottle, barrel, crate and truck.

### Goto definition from template to component

Open up `app/templates/foo.hbs` and ask to go to the definition of `{{els-tryout}}`.

## Testing the running app

    npm install -g ember-cli
    ember serve
    
and visit http://localhost:4200 . This should redirect you to http://localhost:4200/foo 
