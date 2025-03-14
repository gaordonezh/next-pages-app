import React, { Fragment, lazy, Suspense, useState } from 'react';
import dynamic from 'next/dynamic';
import Typography from '../atoms/Typography';
import Button from '../atoms/Button';

const LazyLoadNext = dynamic(() => import('./LazyComponentData'), {
  loading: () => <LoadingComponent />,
  ssr: false,
});
const LazyLoadReact = lazy(() => import('./LazyComponentData'));

const LazyComponent = () => {
  const [open, setOpen] = useState<number>(0);

  const handleOpen = (param: number) => {
    param = open === param ? 0 : param;
    setOpen(param);
  };

  return (
    <Fragment>
      <div className="flex flex-col gap-4 max-w-xl sm:flex-row">
        <Button variant="contained" onClick={() => handleOpen(1)}>
          Con dynamic
        </Button>
        <Button variant="contained" onClick={() => handleOpen(2)}>
          Con lazy y suspense
        </Button>
      </div>

      {open === 1 && <LazyLoadNext />}

      {open === 2 && (
        <Suspense fallback={<LoadingComponent />}>
          <LazyLoadReact />
        </Suspense>
      )}
    </Fragment>
  );
};

export default LazyComponent;

const LoadingComponent = () => <Typography is="p">..:: Cargando ::..</Typography>;
