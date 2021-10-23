declare module 'smartquotes' {
  export default function _(context: any): any;
  export function string(context: string): string;
}

interface RehypeProbeImageSizeOptions {
  /**
   * For local images, you can specify the image directory.
   */
  staticDir?: string;
}

declare module 'rehype-probe-image-size' {
  export default function _(): Plugin<[RehypeProbeImageSizeOptions?]>;
}
