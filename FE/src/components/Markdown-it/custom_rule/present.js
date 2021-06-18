/* eslint-disable no-param-reassign */
import customFun from './customLogic';

const custom = (md) => {
  md.inline.ruler.push('underLine', (state, silent) => {
    return customFun(state, silent, '@u', 'underLine');
  });
  md.inline.ruler2.push('underLine', (state, silent) => {
    return customFun(state, silent, '@u', 'underLine');
  });

  const underLineRender = (tokens, idx) => {
    return `<u>${tokens[idx].content}</u>`;
  };

  md.inline.ruler.push('blue', (state, silent) => {
    return customFun(state, silent, '@b', 'blue');
  });

  const blueRender = (tokens, idx) => {
    return `<span id='blue'>${tokens[idx].content}</span>`;
  };

  md.inline.ruler.after('emphasis', 'highlight', (state, silent) => {
    return customFun(state, silent, '@h', 'highlight');
  });

  md.inline.ruler2.after('emphasis', 'highlight', (state, silent) => {
    return customFun(state, silent, '@h', 'highlight');
  });

  const highlightRender = (tokens, idx) => {
    return `<span id='highlight'>${tokens[idx].content}</span>`;
  };

  md.renderer.rules.underLine = underLineRender;
  md.renderer.rules.blue = blueRender;
  md.renderer.rules.highlight = highlightRender;

  return md;
};

export default custom;
