# ngx-cytoscape

NGX-Cytoscape is an Angular 5+ wrapper around the CytoscapeJS module based on original work from Michael Knoch.

This library enables you to add Cytoscape-based graph visualizations into your Angular application, with values
supplied by instance variables.

This fork adds support for the Angular 5 library formats using RollupJS, supporting UMD and CommonJS formats.

http://js.cytoscape.org

https://github.com/michaelknoch/ng2-cytoscape


## Installation

For the moment, to install this library, run:

```bash
$ npm install git://github.com/calvinvette/ngx-cytoscape#master 
```

## Consuming your library

Once the library is published to npm, you can import it in any Angular application by running:

```bash
$ npm install ngx-cytoscape
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { CytoscapeModule } from 'ngx-cytoscape';
import { CytoscapeModule } from "ngx-cytoscape/dist";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CytoscapeModule // <= Add this
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```


## Example Usage

### In the component you want to use Cytoscape
```typescript
import {Component} from '@angular/core';

@Component({
    selector: 'graph',
    template: '<ngx-cytoscape [elements]="graphData"></ngx-cytoscape>',
    styles: [`
      ngx-cytoscape {
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


## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```







## License

MIT ©2018 [Calvin Vette]
