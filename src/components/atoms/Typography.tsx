import React, { cloneElement, HTMLAttributes } from 'react';
import { classNames } from '@/utils/functions';

interface LabelProps extends HTMLAttributes<HTMLHeadingElement> {
  is: keyof typeof labels;
}

const labels = {
  h1: <h1 className="text-5xl font-semibold"></h1>,
  h2: <h2 className="text-4xl font-semibold"></h2>,
  h3: <h3 className="text-3xl font-semibold"></h3>,
  h4: <h4 className="text-2xl font-semibold"></h4>,
  h5: <h5 className="text-xl font-semibold"></h5>,
  h6: <h6 className="text-lg font-semibold"></h6>,
  p: <p className="text-base"></p>,
};

const Typography = ({ is, className, ...rest }: LabelProps) => {
  const component = labels[is];
  return cloneElement(component, { className: classNames(component.props.className, className), ...rest });
};

export default Typography;
