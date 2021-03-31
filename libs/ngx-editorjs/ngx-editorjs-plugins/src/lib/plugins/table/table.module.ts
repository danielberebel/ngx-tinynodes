import { NgModule } from '@angular/core';
import { EDITOR_JS_TOOL_INJECTOR, PLUGIN_CONFIG, PluginTypes } from '../../types/plugins';

import Table from '@editorjs/table';
// const Table = require('@editorjs/table');

/**
 * A module that provides the default EditorJS delimiter block tool.
 * See [the GitHub repo](https://github.com/editor-js/table) for API details
 */
@NgModule({
  providers: [
    {
      provide: EDITOR_JS_TOOL_INJECTOR,
      useValue: Table,
      multi: true,
    },
    {
      provide: PLUGIN_CONFIG,
      useValue: {
        key: 'table',
        type: PluginTypes.Block,
        pluginName: 'EditorJS Table',
      },
      multi: true,
    },
  ],
})
export class PluginTableModule {}
