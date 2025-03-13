import React, { Fragment, useEffect, useState } from 'react';
import Typography from '../atoms/Typography';
import Divider from '../atoms/Divider';
import { UserProps } from '@/interfaces/global';
import Link from 'next/link';
import Button from '../atoms/Button';

interface DinamicRoutesProps {
  title: string;
}

const DinamicRoutes = ({ title }: DinamicRoutesProps) => {
  const [users, setUsers] = useState<Array<UserProps>>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    obtainUsers();
  }, [currentPage]);

  const obtainUsers = async () => {
    setLoading(true);
    fetch(`/api/users?page=${currentPage}`)
      .then((res) => res.json())
      .then((res) => setUsers((prev) => prev.concat(...res)))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  return (
    <Fragment>
      <Typography is="h4">{title}</Typography>
      <Divider />
      <div>
        {users.map((user) => (
          <Link key={user.id} href={`/routing/${user.id}`}>
            <Typography is="p" className="hover:opacity-75">
              — {user.last_name} {user.first_name}
            </Typography>
          </Link>
        ))}

        {loading ? (
          <Typography is="p" className="text-primary mt-3">
            Obteniendo información...
          </Typography>
        ) : null}

        {users.length ? (
          <Button variant="outlined" className="!px-5 !py-1 mt-5" onClick={() => setCurrentPage(currentPage + 1)}>
            Cargar más
          </Button>
        ) : null}
      </div>
    </Fragment>
  );
};

export default DinamicRoutes;
