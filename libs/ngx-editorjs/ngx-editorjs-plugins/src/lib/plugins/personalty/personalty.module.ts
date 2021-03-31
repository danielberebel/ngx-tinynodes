import { NgModule } from '@angular/core';
import { EDITOR_JS_TOOL_INJECTOR, PLUGIN_CONFIG, PluginTypes } from '../../types/plugins';

import Personalty from '@editorjs/personality';
// const Personalty = require('@editorjs/personality');

/**
 * A module that provides the default EditorJS `<p>` block tool.
 * See [the GitHub repo](https://github.com/editor-js/paragraph) for API details
 */
@NgModule({
  providers: [
    {
      provide: EDITOR_JS_TOOL_INJECTOR,
      useValue: Personalty,
      multi: true,
    },
    {
      provide: PLUGIN_CONFIG,
      useValue: {
        key: 'personalty',
        type: PluginTypes.Inline,
        pluginName: 'EditorJS Personalty',
        shortcut: 'CTRL+SHIFT+P',
      },
      multi: true,
    },
  ],
})
export class PluginPersonaltyModule {}
