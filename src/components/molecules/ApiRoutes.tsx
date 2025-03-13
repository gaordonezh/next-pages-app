import React, { Fragment } from 'react';
import Typography from '../atoms/Typography';
import Divider from '../atoms/Divider';
import Image from 'next/image';

const ApiRoutes = () => {
  return (
    <Fragment>
      <Typography is="h4">Rutas API</Typography>
      <Divider />
      <Image
        src="/images/apiRoutes.avif"
        alt="Pages structure"
        width={1600}
        height={444}
        layout="responsive"
        priority
      />
    </Fragment>
  );
};

export default ApiRoutes;
