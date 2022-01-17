import { createElement, ReactElement } from 'react';
import { deepMap } from 'react-children-utilities';

export default function substitute(
  tree: ReactElement,
  components: Record<string, (props: any) => ReactElement>
) {
  const original = tree;
  const substituted = deepMap(original, (child) => {
    if (child && components[(child as ReactElement).type as string]) {
      return createElement(
        components[(child as ReactElement).type as string],
        (child as ReactElement).props
      );
    }
    return child;
  });

  return substituted;
}
