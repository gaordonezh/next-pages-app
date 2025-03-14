import React, { Fragment } from 'react';
import Typography from '../atoms/Typography';
import Divider from '../atoms/Divider';
import Image from 'next/image';

const PagesAndNavigation = () => {
  return (
    <Fragment>
      <Typography is="h4">Páginas y Navegación</Typography>
      <Divider />
      <Image
        src="/images/nextPages.webp"
        alt="Pages structure"
        width={1416}
        height={916}
        priority
        className="h-auto w-auto sm:h-96"
      />
    </Fragment>
  );
};

export default PagesAndNavigation;
