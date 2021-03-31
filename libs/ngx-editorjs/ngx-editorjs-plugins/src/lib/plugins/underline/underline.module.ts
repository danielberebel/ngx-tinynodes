import { NgModule } from '@angular/core';
import { EDITOR_JS_TOOL_INJECTOR, PLUGIN_CONFIG, PluginTypes } from '../../types/plugins';

import Underline from '@editorjs/underline';
// const Underline = require('@editorjs/underline');

/**
 * A module that provides the default EditorJS `<p>` block tool.
 * See [the GitHub repo](https://github.com/editor-js/paragraph) for API details
 */
@NgModule({
  providers: [
    {
      provide: EDITOR_JS_TOOL_INJECTOR,
      useValue: Underline,
      multi: true,
    },
    {
      provide: PLUGIN_CONFIG,
      useValue: {
        key: 'underline',
        type: PluginTypes.Inline,
        pluginName: 'EditorJS Underline',
        shortcut: 'CTRL+SHIFT+U',
      },
      multi: true,
    },
  ],
})
export class PluginUnderlineModule {}
