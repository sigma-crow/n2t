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
    return `<test><input type='text' id='test'><u>${tokens[idx].content}</u></test>`;
  };

  md.inline.ruler.push('blue', (state, silent) => {
    return customFun(state, silent, '@b', 'blue');
  });

  const blueRender = (tokens, idx) => {
    return `<test><input type='text' id='test'><span id='blue'>${tokens[idx].content}</span></test>`;
  };

  md.inline.ruler.after('emphasis', 'highlight', (state, silent) => {
    return customFun(state, silent, '@h', 'highlight');
  });

  md.inline.ruler2.after('emphasis', 'highlight', (state, silent) => {
    return customFun(state, silent, '@h', 'highlight');
  });

  const highlightRender = (tokens, idx) => {
    return `<test><input type='text' id='test'><span id='highlight'>${tokens[idx].content}</span></test>`;
  };

  md.renderer.rules.underLine = underLineRender;
  md.renderer.rules.blue = blueRender;
  md.renderer.rules.highlight = highlightRender;

  return md;
};

export default custom;
