declare module 'html-to-react' {
  export class Parser {
    constructor(options?: any);
    parse(html: string): JSX.Element;
    parseWithInstructions(
      html: string,
      isValidNode: any,
      processingInstructions?: any,
      preprocessingInstructions?: any
    ): JSX.Element;
  }

  export class ProcessNodeDefinitions {
    processDefaultNode(node: any, children: JSX.Element, index: any): JSX.Element;
  }

  export interface INode {
    name: string;
    data: string;
    parent: { attribs: any };
    attribs: any;
  }

  export type TProcessingInstruction = {
    shouldProcessNode: (node: INode) => boolean;
    processNode: (node: INode, children: JSX.Element, index: string) => JSX.Element;
  };
}
