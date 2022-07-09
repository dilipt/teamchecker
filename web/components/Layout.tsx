import { Grid, GridItem } from '@chakra-ui/react';
import { css } from '@emotion/react';
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Grid templateColumns="1fr min(900px, auto) 1fr" gap={4} templateAreas={`". main ."`}>
      <GridItem area={'main'}>
        {children}
      </GridItem>
    </Grid>
  );
}
