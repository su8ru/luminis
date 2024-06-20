import { useState } from 'preact/hooks';
import Styles from './ArticleListButton.module.css';

const ArticleListButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <button
      className={Styles.button}
      onClick={() => {
        setOpen(!open);
        const listElm = document.getElementById('article-list');
        listElm?.style.setProperty('--display-all', !open ? 'block' : 'none');
      }}
    >
      {open ? (
        <>
          <svg
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            className={Styles.icon}
          >
            <path
              d="M1 10l6.5-7 6.5 7"
              stroke="currentColor"
              stroke-linecap="square"
            ></path>
          </svg>
          <span className={Styles.label}>直近の記事のみ表示</span>
        </>
      ) : (
        <>
          <svg
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            className={Styles.icon}
          >
            <path d="M7.5 1v13M1 7.5h13" stroke="currentColor"></path>
          </svg>
          <span className={Styles.label}>すべて表示</span>
        </>
      )}
      <slot />
    </button>
  );
};

export default ArticleListButton;
