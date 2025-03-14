import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Typography from '@/components/atoms/Typography';
import { AppTitle, links } from '@/utils/constants';
import CheckIcon from '@/components/icons/CheckIcon';
import { classNames, storage } from '@/utils/functions';
import DoubleCheckIcon from '@/components/icons/DoubleCheckIcon';
import Layout from '@/components/templates/Layout';
import { LinksProps } from '@/interfaces/global';

const HomePage = () => {
  const router = useRouter();
  const [list, setList] = useState<LinksProps>([]);

  useEffect(() => {
    setList([...links]);

    const savedData = storage.get();
    if (savedData) {
      setList([...savedData]);
    } else {
      storage.set(links);
      setList([...links]);
    }
  }, []);

  const handleOpen = (iOne: number, iTwo: number, external?: boolean) => {
    const cat = list[iOne];
    const item = cat.items[iTwo];

    if (!item.seen) item.seen = true;

    storage.set(list);

    const url = `${cat.path}?part=${item.id}`;

    if (external) {
      window.open(url, '_blank');
      return;
    }

    router.push(url);
  };

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center gap-20 pt-10 pb-20">
        <Typography is="h3" className="text-center max-w-xl">
          {AppTitle}
        </Typography>

        <div className="flex flex-col gap-5">
          {list.map((item, iOne) => {
            const finished = item.items.every((row) => row.seen);
            return (
              <div key={item.path}>
                <Typography is="h4" className={classNames(finished && 'text-primary')}>
                  {item.label}
                </Typography>

                {item.items.map((record, iTwo) => (
                  <Typography
                    key={record.label}
                    is="p"
                    className={classNames(
                      'pl-2 flex items-center gap-2 cursor-pointer transition-all hover:scale-105',
                      record.seen && 'text-primary',
                      iTwo === 0 && 'mt-1'
                    )}
                    onClick={() => handleOpen(iOne, iTwo)}
                    onAuxClick={() => handleOpen(iOne, iTwo, true)}
                  >
                    {record.seen ? <DoubleCheckIcon /> : <CheckIcon />}
                    {record.label}
                  </Typography>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
