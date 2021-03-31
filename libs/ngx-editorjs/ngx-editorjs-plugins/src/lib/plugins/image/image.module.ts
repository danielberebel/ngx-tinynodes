import { ModuleWithProviders, NgModule, Optional } from '@angular/core';
import { EDITOR_JS_TOOL_INJECTOR, PLUGIN_CONFIG, PluginTypes } from '../../types/plugins';

import Image from '@editorjs/image';
// const Image = require('@editorjs/image');

class CustomUploader {
  uploadSelectedFile() {}
  uploadByUrl() {}
  uploadByFile() {}
}

/**
 *
 *
 * A module that provides the default EditorJS `<img>` block tool.
 * See [the GitHub repo](https://github.com/editor-js/image) for API details
 */
@NgModule({
  providers: [
    {
      provide: EDITOR_JS_TOOL_INJECTOR,
      useValue: Image,
      multi: true,
    },
  ],
})
export class PluginImageModule {
  /**
   * Use this method in the root of the application.  You can pass an optional configuration
   * which sets some defaults, or use the provided defaults.
   * @param config The optional configuration to pass
   */
  static forRoot(
    @Optional() config?: { apiUrl: string; site: number; token: string }
  ): ModuleWithProviders {
    return {
      ngModule: PluginImageModule,
      providers: [
        {
          provide: PLUGIN_CONFIG,
          useValue: {
            key: 'image',
            type: PluginTypes.Block,
            pluginName: 'EditorJS Image',
            config: {
              uploader: CustomUploader,
            },
          },
          multi: true,
        },
      ],
    };
  }
}
