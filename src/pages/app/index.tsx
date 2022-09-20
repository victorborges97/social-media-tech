import UnderlineLink from '@/components/links/UnderlineLink';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';
import { fetcher } from '@/lib/fetcher';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';
import { ImSpinner2 } from 'react-icons/im';
import useSWR from 'swr';

interface TenantIndex {
  id: string;
  image: string;
  name: string;
  slug: string;
}

const AppIndex: React.FC = () => {
  const { data: session } = useSession();
  const { data, error } = useSWR<TenantIndex[]>('/api/tenants', fetcher);

  return (
    <>
      <Seo />

      <main>
        <section className='bg-white'>
          <div className='layout flex min-h-screen flex-col items-center justify-center text-center'>
            <NextImage
              src={session?.user?.image ?? ''}
              useSkeleton={true}
              alt={session?.user?.name ?? ''}
              width={80}
              height={80}
              imgClassName='rounded-full'
              layout='fixed'
            />
            <h3>{session?.user?.name}</h3>

            <ul className='mt-5 text-lg'>
              {error && <div>failed to load</div>}
              {!data && <ImSpinner2 className='animate-spin' />}
              {data &&
                data.length >= 1 &&
                data.map((tenant) => (
                  <li key={tenant.id}>
                    <Link href={`/app/${tenant.id}`}>
                      <a>{tenant.name}</a>
                    </Link>
                  </li>
                ))}
            </ul>

            <footer className='absolute bottom-2 text-gray-700'>
              © {new Date().getFullYear()} By{' '}
              <UnderlineLink href='https://jvborges.dev.br'>
                João Victor Borges
              </UnderlineLink>
            </footer>
          </div>
        </section>
      </main>
    </>
  );
};

export default AppIndex;
