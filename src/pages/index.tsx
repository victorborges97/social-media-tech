import UnderlineLink from '@/components/links/UnderlineLink';
import Seo from '@/components/Seo';
import { signIn, useSession } from 'next-auth/react';

export default function HomePage() {
  const { data: session } = useSession();
  return (
    <>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className='bg-white'>
          <div className='layout flex min-h-screen flex-col items-center justify-center text-center'>
            <h1 className='mt-4'>Social Media Tech</h1>

            <div className='my-5'>
              Sign in account <br />
              <button onClick={() => signIn('github', { callbackUrl: '/app' })}>
                Sign in
              </button>
            </div>

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
}
