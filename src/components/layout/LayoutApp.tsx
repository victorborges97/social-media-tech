import { IconConfig, IconConta, IconHome, IconLinks } from '@/components/icons';
import Seo from '@/components/Seo';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

const LayoutApp: React.FC<Props> = ({ children }) => {
  const router = useRouter();
  const { data: session } = useSession();
  return (
    <main className='relative h-screen overflow-hidden bg-gray-100 dark:bg-gray-800'>
      <Seo
        templateTitle='Admin'
        description='Administrativo Social Media Tech'
      />
      <div className='flex items-start justify-between'>
        <div className='relative hidden h-screen w-80 shadow-lg lg:block'>
          <div className='h-full bg-white dark:bg-gray-700'>
            <div className='ml-8 flex items-center justify-start pt-6'>
              <p className='text-xl font-bold dark:text-white'>
                Social Media Tech
              </p>
            </div>
            <nav className='mt-6'>
              <div>
                <LinksSideBar
                  icon={<IconHome />}
                  link={`/app/${router.query.tenantId}`}
                  nome='Home'
                />

                <LinksSideBar
                  icon={<IconConta />}
                  link={`/app/${router.query.tenantId}/account`}
                  nome={
                    <span className='mx-2 text-sm font-normal'>
                      Conta: borges
                      <span className='ml-4 h-2 w-4 rounded-lg bg-gray-200 p-1 text-xs text-gray-400'>
                        0
                      </span>
                    </span>
                  }
                />

                <LinksSideBar
                  icon={<IconLinks />}
                  link={`/app/${router.query.tenantId}/links`}
                  nome='Links'
                />

                <LinksSideBar
                  icon={<IconConfig />}
                  link={`/app/${router.query.tenantId}/settings`}
                  nome='Configurações'
                />
              </div>
            </nav>
          </div>
        </div>
        <div className='flex w-full flex-col md:space-y-4'>
          <header className='z-40 flex h-16 w-full items-center justify-between'>
            <div className='ml-6 block lg:hidden'>
              <button className='text-md flex items-center rounded-full bg-white p-2 text-gray-500 shadow'>
                <svg
                  width='20'
                  height='20'
                  className='text-gray-400'
                  fill='currentColor'
                  viewBox='0 0 1792 1792'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z'></path>
                </svg>
              </button>
            </div>
            <div className='relative z-20 flex h-full flex-col justify-end px-3 md:w-full'>
              <div className='relative flex w-full items-center justify-end space-x-4 p-1'>
                <button className='text-md flex items-center rounded-full bg-white p-2 text-gray-400 shadow hover:text-gray-700'>
                  <svg
                    width='20'
                    height='20'
                    className=''
                    fill='currentColor'
                    viewBox='0 0 1792 1792'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M1520 1216q0-40-28-68l-208-208q-28-28-68-28-42 0-72 32 3 3 19 18.5t21.5 21.5 15 19 13 25.5 3.5 27.5q0 40-28 68t-68 28q-15 0-27.5-3.5t-25.5-13-19-15-21.5-21.5-18.5-19q-33 31-33 73 0 40 28 68l206 207q27 27 68 27 40 0 68-26l147-146q28-28 28-67zm-703-705q0-40-28-68l-206-207q-28-28-68-28-39 0-68 27l-147 146q-28 28-28 67 0 40 28 68l208 208q27 27 68 27 42 0 72-31-3-3-19-18.5t-21.5-21.5-15-19-13-25.5-3.5-27.5q0-40 28-68t68-28q15 0 27.5 3.5t25.5 13 19 15 21.5 21.5 18.5 19q33-31 33-73zm895 705q0 120-85 203l-147 146q-83 83-203 83-121 0-204-85l-206-207q-83-83-83-203 0-123 88-209l-88-88q-86 88-208 88-120 0-204-84l-208-208q-84-84-84-204t85-203l147-146q83-83 203-83 121 0 204 85l206 207q83 83 83 203 0 123-88 209l88 88q86-88 208-88 120 0 204 84l208 208q84 84 84 204z'></path>
                  </svg>
                </button>
                <button className='text-md flex items-center rounded-full bg-white p-2 text-gray-400 shadow hover:text-gray-700'>
                  <svg
                    width='20'
                    height='20'
                    className='text-gray-400'
                    fill='currentColor'
                    viewBox='0 0 1792 1792'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M912 1696q0-16-16-16-59 0-101.5-42.5t-42.5-101.5q0-16-16-16t-16 16q0 73 51.5 124.5t124.5 51.5q16 0 16-16zm816-288q0 52-38 90t-90 38h-448q0 106-75 181t-181 75-181-75-75-181h-448q-52 0-90-38t-38-90q50-42 91-88t85-119.5 74.5-158.5 50-206 19.5-260q0-152 117-282.5t307-158.5q-8-19-8-39 0-40 28-68t68-28 68 28 28 68q0 20-8 39 190 28 307 158.5t117 282.5q0 139 19.5 260t50 206 74.5 158.5 85 119.5 91 88z'></path>
                  </svg>
                </button>
                <span className='h-8 w-1 rounded-lg bg-gray-200'></span>
                <div className='relative block'>
                  <img
                    alt={session?.user?.name ?? ''}
                    src={session?.user?.image ?? ''}
                    className='mx-auto h-10 w-10 rounded-full object-cover '
                  />
                </div>
                <button
                  className='text-md flex items-center text-gray-500 dark:text-white'
                  onClick={() => signOut({ callbackUrl: '/' })}
                >
                  {session?.user?.name}
                  <svg
                    width='20'
                    height='20'
                    className='ml-2 text-gray-400'
                    fill='currentColor'
                    viewBox='0 0 1792 1792'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z'></path>
                  </svg>
                </button>
              </div>
            </div>
          </header>
          <div className='h-screen overflow-auto px-4 pb-24 md:px-6'>
            {children}
          </div>
        </div>
      </div>
    </main>
  );
};

export default LayoutApp;

interface PropsLink {
  nome: string | React.ReactNode;
  link: string;
  icon: React.ReactNode;
}

const LinksSideBar = ({ nome, link, icon }: PropsLink) => {
  const router = useRouter();
  return (
    <Link href={link}>
      <a
        className={`my-2 flex w-full items-center justify-start p-2 pl-6 text-gray-800 transition-colors duration-200 dark:text-white ${
          router.asPath == link ? 'border-l-4 border-purple-500' : ''
        }`}
      >
        <span className='text-left'>{icon}</span>
        <span className='mx-2 text-sm font-normal'>{nome}</span>
      </a>
    </Link>
  );
};
