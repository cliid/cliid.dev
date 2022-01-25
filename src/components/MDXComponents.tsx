import NextImage from 'next/image';

import Link from './Link';
import Pre from './Pre';

const MDXComponents = {
  img: (props: any) =>
    props.className === 'emoji' ? (
      // eslint-disable-next-line @next/next/no-img-element
      <img {...props} alt={props.alt} />
    ) : (
      // height and width are part of the props, so they get automatically passed here with {...props}
      <NextImage {...props} alt={props.alt} layout="responsive" priority={true} />
    ),
  a: Link,
  pre: Pre
};

export default MDXComponents;
