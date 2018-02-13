# ngx-cytoscape

NGX-Cytoscape is an Angular 5+ wrapper around the CytoscapeJS module based on original work from Michael Knoch.

This library enables you to add Cytoscape-based graph visualizations into your Angular application, with values
supplied by instance variables.

This fork adds support for the Angular 5 library formats using RollupJS, supporting UMD and CommonJS formats.

http://js.cytoscape.org

https://github.com/michaelknoch/ng2-cytoscape


## Installation

To install this library, run:

```bash
$ npm install ngx-cytoscape --save
```

## Consuming your library

Once you have published your library to npm, you can import your library in any Angular application by running:

```bash
$ npm install ngx-cytoscape
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { SampleModule } from 'ngx-cytoscape';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify your library as an import
    LibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once your library is imported, you can use its components, directives and pipes in your Angular application:

```xml
<!-- You can now use your library component in app.component.html -->
<h1>
  {{title}}
</h1>
<sampleComponent></sampleComponent>
```

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```


## Example Usage

### In your `app.module.ts`
Add the import clause to import the module `NgCytoscapeModule`

```typescript
import {NgCytoscapeModule} from "ng2-cytoscape/dist";
```

Add the `NgCytoscapeModule` to the imports array of the `NgModule`.

```typescript
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgCytoscapeModule // <= Add this
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### In the component you want to use NgCytoscape
```typescript
import {Component} from '@angular/core';

@Component({
    selector: 'graph',
    template: '<ng2-cytoscape [elements]="graphData"></ng2-cytoscape>',
    styles: [`
      ng2-cytoscape {
        height: 100vh;
        float: left;
        width: 100%;
        position: relative;
    }`],
})
export class Graph {

    graphData = {
        nodes: [
            {data: {id: 'j', name: 'Jerry', faveColor: '#6FB1FC', faveShape: 'triangle'}},
            {data: {id: 'e', name: 'Elaine', faveColor: '#EDA1ED', faveShape: 'ellipse'}},
            {data: {id: 'k', name: 'Kramer', faveColor: '#86B342', faveShape: 'octagon'}},
            {data: {id: 'g', name: 'George', faveColor: '#F5A45D', faveShape: 'rectangle'}}
        ],
        edges: [
            {data: {source: 'j', target: 'e', faveColor: '#6FB1FC'}},
            {data: {source: 'j', target: 'k', faveColor: '#6FB1FC'}},
            {data: {source: 'j', target: 'g', faveColor: '#6FB1FC'}},

            {data: {source: 'e', target: 'j', faveColor: '#EDA1ED'}},
            {data: {source: 'e', target: 'k', faveColor: '#EDA1ED'}},

            {data: {source: 'k', target: 'j', faveColor: '#86B342'}},
            {data: {source: 'k', target: 'e', faveColor: '#86B342'}},
            {data: {source: 'k', target: 'g', faveColor: '#86B342'}},

            {data: {source: 'g', target: 'j', faveColor: '#F5A45D'}}
        ]
    };

    constructor() {
    }

}

```



## License

MIT ©2018 [Calvin Vette]
