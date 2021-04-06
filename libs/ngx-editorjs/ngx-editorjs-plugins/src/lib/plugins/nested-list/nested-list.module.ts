import { NgModule } from '@angular/core';
import NestedList from '@editorjs/nested-list';
// const NestedList = require('@editorjs/nested-list');

import { EDITOR_JS_TOOL_INJECTOR } from '../../types/plugins';

/**
 * A module that provides the NestedList EditorJS block tool.
 * See [the GitHub repo](https://github.com/editor-js/nested-list) for API details
 */
@NgModule({
  providers: [
    {
      provide: EDITOR_JS_TOOL_INJECTOR,
      useValue: NestedList,
      multi: true,
    },
  ],
})
export class PluginNestedListModule {}
