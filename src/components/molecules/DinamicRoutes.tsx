import React, { Fragment, useEffect, useState } from 'react';
import Typography from '../atoms/Typography';
import Divider from '../atoms/Divider';
import { UserProps } from '@/interfaces/global';
import Link from 'next/link';

const DinamicRoutes = () => {
  const [users, setUsers] = useState<Array<UserProps>>([]);

  useEffect(() => {
    fetch('/api/hello')
      .then((res) => res.json())
      .then((res) => setUsers([...res]));
  }, []);

  return (
    <Fragment>
      <Typography is="h4">Rutas dinámicas</Typography>
      <Divider />
      <div>
        {users.map((user) => (
          <Link key={user.id} href={`/routing/${user.id}`}>
            <Typography is="p" className="hover:opacity-75">
              — {user.last_name} {user.first_name}
            </Typography>
          </Link>
        ))}
      </div>
    </Fragment>
  );
};

export default DinamicRoutes;
