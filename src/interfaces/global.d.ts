export type Repo = {
  name: string;
  stargazers_count: number;
};

export type LinksProps = Array<{
  label: string;
  path: string;
  items: Array<{ label: string; seen: boolean; id: number }>;
}>;

export interface UserProps {
  id: number;
  avatar: string;
  email: string;
  first_name: string;
  last_name: string;
}
