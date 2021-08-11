import { useEffect } from 'react';
import qs from 'query-string';
import history from '../../src/store/history';

export default ({ data, location, setCollapseItems }) => {
  useEffect(() => {
    const { id } = qs.parse(location.search);
    if (id) {
      history.push(`#${id}`);
    }
  }, [location.search]);

  useEffect(() => {
    const id = location.hash.substr(1);
    if (id) {
      const items = data.map(item => {
        if (item.pgId === id) return item.pgId;
        return null;
      });

      setCollapseItems(items);
      const anchor = document.getElementById(id);
      if (anchor) {
        anchor.scrollIntoView();
      }
    }
  }, [data, location.hash, setCollapseItems]);
};
