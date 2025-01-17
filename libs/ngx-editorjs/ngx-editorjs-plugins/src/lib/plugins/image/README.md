# EditorJS Image Module Plugin

This plugin provides a default `<img>` block tool for EditorJS.

See [`@editorjs/image`](https://github.com/editor-js/image) for API details

## Usage

You first need to run `npm install @editorjs/image` to add as a dependency of your Angular project. You can then include the plugin in your application or feature module.

```ts
import { NgModule } from '@angular/core';
import { EditorjsModule, UserPlugins } from '@wpw/libs/editorjs';
import {
  PluginImageModule,
  PluginImage,
} from '@wpw/libs/editorjs-plugins';

export function createPlugins() {
  return { image: new PluginImage() }
}

@NgModule({
  imports: [
    EditorjsModule,
    PluginImageModule,
    ...
  ],
  providers: [
    {
      provide: UserPlugins,
      useFactory: createPlugins
    },
    ...
  ],
})
export class MyModule {}
```
