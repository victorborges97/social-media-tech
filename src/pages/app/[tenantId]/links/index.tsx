import Button from '@/components/buttons/Button';
import Heading from '@/components/Heading';
import { fetcher } from '@/lib/fetcher';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { ImSpinner2 } from 'react-icons/im';
import useSWR from 'swr';

export interface Link {
  name: string;
  publicName: string;
  slug: string;
  destination: string;
  appLink: string;
}

interface Data {
  result: Link[];
}

const Links: React.FC = () => {
  const router = useRouter();

  const { data, error } = useSWR<Data>(
    `/api/${router.query.tenantId}/links`,
    fetcher
  );

  return (
    <div className='h-screen overflow-auto px-4 pb-24 md:px-6'>
      <div className='flex flex-wrap items-center justify-between gap-2'>
        <Heading title='Links' subtitle='Gerenciador de links' />
        <div className='flex items-center justify-end gap-2'>
          <Link href={`/app/${router.query.tenantId}/links/add-link`}>
            <Button variant='outline'>Criar Link</Button>
          </Link>
          <Link href={`/app/${router.query.tenantId}/links/add-group`}>
            <Button>Criar Grupo</Button>
          </Link>
        </div>
      </div>

      <div className='mx-auto'>
        <div className='py-8'>
          <div className='flex justify-end'>
            <form className='flex w-3/4 max-w-sm flex-col justify-center space-y-3 md:w-full md:flex-row md:space-x-3 md:space-y-0'>
              <div className=' relative '>
                <input
                  type='text'
                  id='"form-subscribe-Filter'
                  className=' w-full flex-1 appearance-none rounded-lg border border-transparent border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600'
                  placeholder='name'
                />
              </div>
              <button
                className='flex-shrink-0 rounded-lg bg-purple-600 px-4 py-2 text-base font-semibold text-white shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200'
                type='submit'
              >
                Filter
              </button>
            </form>
          </div>

          <div className='-mx-4 overflow-x-auto px-4 py-4 sm:-mx-8 sm:px-8'>
            <div className='inline-block min-w-full overflow-hidden rounded-lg shadow'>
              <table className='min-w-full leading-normal'>
                <thead>
                  <tr>
                    <th
                      scope='col'
                      className='border-b border-gray-200 bg-white  px-5 py-3 text-left  text-sm font-normal uppercase text-gray-800'
                    >
                      User
                    </th>
                    <th
                      scope='col'
                      className='border-b border-gray-200 bg-white  px-5 py-3 text-left  text-sm font-normal uppercase text-gray-800'
                    >
                      Role
                    </th>
                    <th
                      scope='col'
                      className='border-b border-gray-200 bg-white  px-5 py-3 text-left  text-sm font-normal uppercase text-gray-800'
                    >
                      Created at
                    </th>
                    <th
                      scope='col'
                      className='border-b border-gray-200 bg-white  px-5 py-3 text-left  text-sm font-normal uppercase text-gray-800'
                    >
                      status
                    </th>
                    <th
                      scope='col'
                      className='border-b border-gray-200 bg-white  px-5 py-3 text-left  text-sm font-normal uppercase text-gray-800'
                    ></th>
                  </tr>
                </thead>
                <tbody>
                  {error && (
                    <tr>
                      <td
                        className='border-b border-gray-200 bg-white px-5 py-5 text-sm'
                        colSpan={5}
                      >
                        failed to load
                      </td>
                    </tr>
                  )}
                  {!data && (
                    <tr>
                      <td
                        className='border-b border-gray-200 bg-white px-5 py-5 text-sm'
                        colSpan={5}
                      >
                        <ImSpinner2 className='animate-spin' />
                      </td>
                    </tr>
                  )}
                  {data &&
                    data.result.length >= 1 &&
                    data.result.map((link) => <LineLink link={link} />)}
                </tbody>
              </table>
              <div className='xs:flex-row xs:justify-between flex flex-col items-center bg-white px-5 py-5'>
                <div className='flex items-center'>
                  <button
                    type='button'
                    className='w-full rounded-l-xl border bg-white p-4 text-base text-gray-600 hover:bg-gray-100'
                  >
                    <svg
                      width='9'
                      fill='currentColor'
                      height='8'
                      className=''
                      viewBox='0 0 1792 1792'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z'></path>
                    </svg>
                  </button>
                  <button
                    type='button'
                    className='w-full border-t border-b bg-white px-4 py-2 text-base text-indigo-500 hover:bg-gray-100 '
                  >
                    1
                  </button>
                  <button
                    type='button'
                    className='w-full border bg-white px-4 py-2 text-base text-gray-600 hover:bg-gray-100'
                  >
                    2
                  </button>
                  <button
                    type='button'
                    className='w-full border-t border-b bg-white px-4 py-2 text-base text-gray-600 hover:bg-gray-100'
                  >
                    3
                  </button>
                  <button
                    type='button'
                    className='w-full border bg-white px-4 py-2 text-base text-gray-600 hover:bg-gray-100'
                  >
                    4
                  </button>
                  <button
                    type='button'
                    className='w-full rounded-r-xl border-t border-b border-r bg-white  p-4 text-base text-gray-600 hover:bg-gray-100'
                  >
                    <svg
                      width='9'
                      fill='currentColor'
                      height='8'
                      className=''
                      viewBox='0 0 1792 1792'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z'></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Links;

interface Props {
  link: Link;
}
const LineLink = ({ link }: Props) => {
  return (
    <tr>
      <td className='border-b border-gray-200 bg-white px-5 py-5 text-sm'>
        <p className='whitespace-no-wrap text-gray-900'>{link.name}</p>
      </td>
      <td className='border-b border-gray-200 bg-white px-5 py-5 text-sm'>
        <p className='whitespace-no-wrap text-gray-900'>{link.publicName}</p>
      </td>
      <td className='border-b border-gray-200 bg-white px-5 py-5 text-sm'>
        <p className='whitespace-no-wrap text-gray-900'>12/09/2020</p>
      </td>
      <td className='border-b border-gray-200 bg-white px-5 py-5 text-sm'>
        <span className='relative inline-block px-3 py-1 font-semibold leading-tight text-green-900'>
          <span
            aria-hidden='true'
            className='absolute inset-0 rounded-full bg-green-200 opacity-50'
          ></span>
          <span className='relative'>active</span>
        </span>
      </td>
      <td className='border-b border-gray-200 bg-white px-5 py-5 text-sm'>
        <a href='#' className='text-indigo-600 hover:text-indigo-900'>
          Editar
        </a>
      </td>
    </tr>
  );
};

/**
 * <div className='-mx-3 mb-2 flex flex-wrap'>
          <div className='mb-6 w-full px-3 md:mb-0 md:w-1/3'>
            <label
              className='mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700'
              htmlFor='grid-city'
            >
              City
            </label>
            <input
              className='block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none'
              id='grid-city'
              type='text'
              placeholder='Albuquerque'
            />
          </div>
          <div className='mb-6 w-full px-3 md:mb-0 md:w-1/3'>
            <label
              className='mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700'
              htmlFor='grid-state'
            >
              State
            </label>
            <div className='relative'>
              <select
                className='block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 pr-8 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none'
                id='grid-state'
              >
                <option>New Mexico</option>
                <option>Missouri</option>
                <option>Texas</option>
              </select>
              <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
                <svg
                  className='h-4 w-4 fill-current'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                >
                  <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                </svg>
              </div>
            </div>
          </div>
          <div className='mb-6 w-full px-3 md:mb-0 md:w-1/3'>
            <label
              className='mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700'
              htmlFor='grid-zip'
            >
              Zip
            </label>
            <input
              className='block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none'
              id='grid-zip'
              type='text'
              placeholder='90210'
            />
          </div>
        </div>
 */
