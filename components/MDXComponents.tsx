import Image from 'next/image';

import CustomLink from './CustomLink';
import Pre from './Pre';

const MDXComponents = {
  img: (props: any) =>
    props.className === 'emoji' ? (
      // eslint-disable-next-line @next/next/no-img-element
      <img {...props} alt={props.alt} />
    ) : (
      // height and width are part of the props, so they get automatically passed here with {...props}
      <Image {...props} alt={props.alt} layout="responsive" priority={true} />
    ),
  a: CustomLink,
  pre: Pre
};

export default MDXComponents;
