'use client';

import * as React from 'react';
import {
  FluentProvider,
  webLightTheme,
  SSRProvider,
  RendererProvider,
  createDOMRenderer,
  renderToStyleElements,
  makeStyles,
  mergeClasses
} from '@fluentui/react-components';
import { useServerInsertedHTML } from 'next/navigation';

const useStyles = makeStyles({
  root:{  
    margin:'0',
    backgroundImage : 'linear-gradient(to right bottom, #f8f9fa, #eaecee, #dbdfe3, #cdd3d7, #bfc6cc, #b3bbc2, #a8b0b7, #9ca5ad, #9099a1, #848d95, #788189, #6c757d)'
  }
})

export function Providers({ children }: { children: React.ReactNode }) {
  const [renderer] = React.useState(() => createDOMRenderer());
  const didRenderRef = React.useRef(false);

  const classes = useStyles();

  useServerInsertedHTML(() => {
    if (didRenderRef.current) {
      return;
    }
    didRenderRef.current = true;
    return <>{renderToStyleElements(renderer)}</>;
  });

  return (
    <RendererProvider renderer={renderer}>
      <SSRProvider>
        <FluentProvider theme={webLightTheme} className={mergeClasses(classes.root)}>{children}</FluentProvider>
      </SSRProvider>
    </RendererProvider>
  );
}