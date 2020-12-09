import { Plugin, OutputChunk, OutputAsset, OutputBundle } from 'rollup';

export interface RollupHtmlTemplateOptions {
  title: string;
  attributes: Record<string, any>;
  publicPath: string;
  meta: Record<string, any>[];
  bundle: OutputBundle;
  files: Record<string, (OutputChunk | OutputAsset)[]>;
  shouldHash: boolean;
  hashAlgorithm: string;
  additionalCspDirectives: Record<string, string[] | string>;
}

export interface RollupHtmlOptions {
  title?: string;
  attributes?: Record<string, any>;
  fileName?: string;
  meta?: Record<string, any>[];
  publicPath?: string;
  template?: (templateOptions: RollupHtmlTemplateOptions) => string;
  shouldHash?: boolean;
  hashAlgorithm?: string;
  additionalCspDirectives?: Record<string, string[] | string>;
}

export function makeHtmlAttributes(attributes: Record<string, string>): string;

/**
 * A Rollup plugin which creates HTML files to serve Rollup bundles.
 * @param options - Plugin options.
 * @returns Plugin instance.
 */
export default function html(options: RollupHtmlOptions): Plugin;
