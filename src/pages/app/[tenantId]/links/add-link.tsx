import Button from '@/components/buttons/Button';
import Heading from '@/components/Heading';
import Input from '@/components/Input';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

export interface NewLinkForm {
  name: string;
  publicName: string;
  slug: string;
  destination: string;
  appLink: string;
}

const schema = yup.object({
  name: yup.string().required('Campo obrigatório'),
  publicName: yup.string().required('Campo obrigatório'),
  slug: yup.string(),
  destination: yup.string(),
  appLink: yup.string(),
});

const Links: React.FC = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewLinkForm>({
    resolver: yupResolver(schema),
  });

  const submit: SubmitHandler<NewLinkForm> = async (inputs) => {
    try {
      console.log(inputs);
      const data = await fetch(`/api/${router.query.tenantId}/links`, {
        method: 'POST',
        body: JSON.stringify(inputs),
        headers: {
          'content-type': 'application/json',
        },
      });
      const json = await data.json();
      if (json.result.id.length > 0) {
        router.back();
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className='h-screen overflow-auto px-4 pb-24 md:px-6'>
      <div className='flex flex-wrap items-center justify-between gap-2'>
        <Heading title='Links' subtitle='Gerenciador de links' />
        <div className='flex items-center justify-end gap-2'>
          <Button variant='outline'>Criar Link</Button>
          <Button>Criar Grupo</Button>
        </div>
      </div>

      <form
        onSubmit={handleSubmit(submit)}
        className='mt-8 w-full rounded-md bg-gray-400 p-4 text-gray-700 dark:bg-gray-700 dark:text-white'
      >
        <div className='-mx-3 mb-6 flex flex-wrap'>
          <div className='mb-6 w-full px-3 md:mb-0 md:w-1/3'>
            <label
              className='mb-2 block text-xs font-bold uppercase tracking-wide '
              htmlFor='name'
            >
              Nome Interno
            </label>
            <Input
              error={errors.name}
              id='name'
              placeholder='Nome de controle'
              {...register('name')}
            />
          </div>
          <div className='w-full px-3 md:w-1/3'>
            <label
              className='mb-2 block text-xs font-bold uppercase tracking-wide '
              htmlFor='publicName'
            >
              Nome Público
            </label>
            <Input
              error={errors.publicName}
              id='publicName'
              type='text'
              placeholder='Nome de público'
              {...register('publicName')}
            />
          </div>
          <div className='w-full px-3 md:w-1/3'>
            <label
              className='mb-2 block text-xs font-bold uppercase tracking-wide '
              htmlFor='slug'
            >
              Identificador (slug)
            </label>
            <Input
              error={errors.slug}
              id='slug'
              type='text'
              placeholder='Slug'
              {...register('slug')}
            />
          </div>
        </div>
        <div className='-mx-3 mb-6 flex flex-wrap'>
          <div className='mb-6 w-full px-3 md:mb-0 md:w-1/2'>
            <label
              className='mb-2 block text-xs font-bold uppercase tracking-wide '
              htmlFor='destination'
            >
              Destino
            </label>
            <Input
              error={errors.destination}
              id='destination'
              {...register('destination')}
              type='text'
              placeholder='https://'
            />
          </div>
          <div className='w-full px-3 md:w-1/2'>
            <label
              className='mb-2 block text-xs font-bold uppercase tracking-wide '
              htmlFor='appLink'
            >
              Destino APP
            </label>
            <Input
              error={errors.appLink}
              id='appLink'
              {...register('appLink')}
              type='text'
              placeholder='TBD link interno para app'
            />
          </div>
        </div>

        <input type='submit' />
      </form>
    </div>
  );
};

export default Links;

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
