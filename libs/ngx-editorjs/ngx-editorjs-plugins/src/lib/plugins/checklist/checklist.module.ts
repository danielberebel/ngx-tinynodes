import { NgModule } from '@angular/core';
import Checklist from '@editorjs/checklist';
// const Checklist = require('@editorjs/checklist');

import { EDITOR_JS_TOOL_INJECTOR, PLUGIN_CONFIG, PluginTypes } from '../../types/plugins';


/**
 * A module that provides the checklist EditorJS `<p>` block tool.
 * See [the GitHub repo](https://github.com/editor-js/checklist) for API details
 */
@NgModule({
  providers: [
    {
      provide: EDITOR_JS_TOOL_INJECTOR,
      useValue: Checklist,
      multi: true,
    },
    {
      provide: PLUGIN_CONFIG,
      useValue: {
        key: 'checklist',
        type: PluginTypes.Inline,
        pluginName: 'EditorJS Checklist',
        shortcut: 'CTRL+SHIFT+C',
      },
      multi: true,
    },
  ],
})
export class PluginChecklistModule {}
