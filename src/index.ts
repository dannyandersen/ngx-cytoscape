import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CytoscapeComponent} from './cytoscape';

export * from './cytoscape';

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
