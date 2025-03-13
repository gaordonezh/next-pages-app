import React from 'react';
import Typography from '../atoms/Typography';
import Divider from '../atoms/Divider';
import Link from 'next/link';
import { renderingList } from '@/utils/constants';

const ServerSideRendering = () => {
  return (
    <div className="flex flex-col gap-2">
      <Typography is="h4">Server-side Rendering</Typography>
      <Divider />
      <div className="flex flex-col md:flex-row gap-2 mt-1">
        {renderingList.map((item) => (
          <Link href={item.path} key={item.title} className="relative p-4 overflow-hidden bg-white rounded-lg flex-1/3">
            <span className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>
            <h5 className="text-xl font-bold text-slate-900">{item.title}</h5>
            <p className="text-sm text-slate-500 mt-4">{item.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServerSideRendering;
