import { AppProps } from 'next/app';

import LayoutApp from '@/components/layout/LayoutApp';
import LayoutEmpty from '@/components/layout/LayoutEmpty';
import LayoutPublic from '@/components/layout/LayoutPublic';
import LayoutTenent from '@/components/layout/LayoutTenent';
import '@/styles/colors.css';
import '@/styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const router = useRouter();
  const { pathname } = router;
  let LayoutComponent = LayoutPublic;
  if (pathname.indexOf('/app') === 0) {
    LayoutComponent = LayoutApp;
  }
  if (pathname.indexOf('[slug]') === 0) {
    LayoutComponent = LayoutTenent;
  }
  if (pathname === '/app') {
    LayoutComponent = LayoutEmpty;
  }
  return (
    <SessionProvider session={session}>
      <LayoutComponent>
        <Component {...pageProps} />
      </LayoutComponent>
    </SessionProvider>
  );
}

export default MyApp;
