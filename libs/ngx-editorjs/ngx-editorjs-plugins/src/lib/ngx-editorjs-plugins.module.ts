import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PluginCodeModule } from './plugins/code/code.module';
import { PluginDelimiterModule } from './plugins/delimiter/delimiter.module';
import { PluginEmbedModule } from './plugins/embed/embed.module';
import { PluginHeaderModule } from './plugins/header/header.module';
import { PluginImageModule } from './plugins/image/image.module';
import { PluginInlineCodeModule } from './plugins/inline-code/inline-code.module';
import { PluginLinkModule } from './plugins/link/link.module';
import { PluginListModule } from './plugins/list/list.module';
import { PluginMarkerModule } from './plugins/marker/marker.module';
import { PluginParagraphModule } from './plugins/paragraph/paragraph.module';
import { PluginPersonaltyModule } from './plugins/personalty/personalty.module';
import { PluginQuoteModule } from './plugins/quote/quote.module';
import { PluginSimpleImageModule } from './plugins/simple-image/simple-image.module';
import { PluginTableModule } from './plugins/table/table.module';
import { PluginUnderlineModule } from './plugins/underline/underline.module';
import { PluginWarningModule } from './plugins/warning/warning.module';
import { PluginNestedListModule } from './plugins/nested-list/nested-list.module';

import { NgxEditorJSPluginServiceModule } from './services/plugin-service.module';

/**
 * The `NgxEditorjsPluginsModule` provides several additional modules
 * that provide a way to easily plug in block and inline tools for EditorJS.
 *
 * Importing `NgxEditorjsPluginsModule` will include all modules, while it
 * is also possible to import each individual module as required.
 */
@NgModule({
  imports: [
    CommonModule,
    NgxEditorJSPluginServiceModule,
    PluginCodeModule,
    PluginHeaderModule,
    PluginImageModule,
    PluginLinkModule,
    PluginListModule,
    PluginMarkerModule,
    PluginParagraphModule,
    PluginSimpleImageModule,
    PluginInlineCodeModule,
    PluginWarningModule,
    PluginQuoteModule,
    PluginEmbedModule,

    PluginDelimiterModule,
    PluginUnderlineModule,
    PluginTableModule,
    PluginPersonaltyModule,
    PluginNestedListModule,
  ],
  exports: [
    NgxEditorJSPluginServiceModule,
    PluginCodeModule,
    PluginHeaderModule,
    PluginImageModule,
    PluginLinkModule,
    PluginListModule,
    PluginMarkerModule,
    PluginParagraphModule,
    PluginSimpleImageModule,
    PluginInlineCodeModule,
    PluginWarningModule,
    PluginQuoteModule,
    PluginEmbedModule,

    PluginDelimiterModule,
    PluginUnderlineModule,
    PluginTableModule,
    PluginPersonaltyModule,
    PluginNestedListModule,
  ],
})
export class NgxEditorjsPluginsModule {}
