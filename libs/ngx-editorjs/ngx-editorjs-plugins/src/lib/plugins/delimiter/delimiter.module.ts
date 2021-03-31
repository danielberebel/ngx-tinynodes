import { NgModule } from '@angular/core';
import { EDITOR_JS_TOOL_INJECTOR, PLUGIN_CONFIG, PluginTypes } from '../../types/plugins';

import Delimiter from '@editorjs/delimiter';
// const  Delimiter = require('@editorjs/delimiter');

/**
 * A module that provides the default EditorJS delimiter block tool.
 * See [the GitHub repo](https://github.com/editor-js/delimiter) for API details
 */
@NgModule({
  providers: [
    {
      provide: EDITOR_JS_TOOL_INJECTOR,
      useValue: Delimiter,
      multi: true,
    },
    {
      provide: PLUGIN_CONFIG,
      useValue: {
        key: 'delimiter',
        type: PluginTypes.Block,
        pluginName: 'EditorJS Delimiter',
      },
      multi: true,
    },
  ],
})
export class PluginDelimiterModule {}
