// @flow strict
import React from 'react';
import Author from './Author';
import Contacts from './Contacts';
import Copyright from './Copyright';
import Menu from './Menu';
import styles from './Sidebar.module.scss';
import { useSiteMetadata } from '../../hooks';

type Props = {
  isIndex?: boolean,
};

const Sidebar = ({ isIndex }: Props) => {
  const { author, copyright, menu, getStartedUrl } = useSiteMetadata();

  return (
    <div className={styles['sidebar']}>
      <div className={styles['sidebar__inner']}>
        <Author author={author} isIndex={isIndex} />

        <Menu menu={menu} />
        <Contacts contacts={author.contacts} />

        <a style={{ marginBottom: '5pt', fontSize: 'large', backgroundColor: '#ff8800', color: '#fff', padding: '4pt 8pt', borderRadius: '4pt' }}
          href={getStartedUrl}
          target="_blank"
          rel="noopener noreferrer">
          GET STARTED
        </a>
        <br />
        <Copyright copyright={copyright} />

      </div>
    </div>
  );
};

export default Sidebar;
