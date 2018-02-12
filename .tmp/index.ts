import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CytoscapeComponent} from './ngx-cytoscape';

export * from './ngx-cytoscape';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        CytoscapeComponent
    ],
    exports: [
        CytoscapeComponent
    ]
})
export class CytoscapeModule {
}
