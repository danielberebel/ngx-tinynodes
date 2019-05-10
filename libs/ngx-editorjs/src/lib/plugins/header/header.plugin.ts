import { Injectable } from '@angular/core';
import Header from '@editorjs/header';
import { ToolSettings } from '@editorjs/editorjs';
import { BasePlugin } from '../../types/plugins';

@Injectable()
export class PluginHeader implements BasePlugin {
  public plugin(): ToolSettings {
    return Header;
  }
}