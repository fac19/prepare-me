import React, { useContext } from 'react';
import SiteContext from '../model/SiteContext';
import allPages from '../model/allPages';

function PrintPages() {
  const [state] = useContext(SiteContext);
  const pages = allPages(state);
  React.useEffect(() => {
    // TODO, this is a kludge, find an event that
    // allows us to detect when all the images are
    // ready to print. Without this we only get the
    // First one or two images.
    setTimeout(window.print, 2000);
  }, []);

  return <>{pages}</>;
}

export default PrintPages;
