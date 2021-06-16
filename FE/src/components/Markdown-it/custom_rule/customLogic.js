/* eslint-disable no-param-reassign */
const underLineFun = (state, silent, tg, name) => {
  let {pos} = state;
  const start = pos;
  const max = state.posMax;
  const marker = tg;
  const checkTg = (pos) => {
    for (let i = 0; i < tg.length; i += 1) {
      const tmp = state.src.charCodeAt(pos + i);
      if (tmp !== tg.charCodeAt(i)) {
        return false;
      }
    }
    return true;
  };

  if (!checkTg(pos)) {
    return false;
  }

  pos += 2;

  // ???
  while (pos < max && checkTg(pos)) {
    pos += 2;
  }

  const openerLength = marker.length;

  if (state.backticksScanned && (state.backticks[openerLength] || 0) <= start) {
    if (!silent) {
      state.pending += marker;
    }
    return true;
  }
  let matchEnd = pos;
  let matchStart;
  let closerLength;
  let token;
  while (state.src.indexOf(tg, matchEnd) !== -1) {
    matchStart = state.src.indexOf(tg, matchEnd);
    // 이건 왜필요해???
    matchEnd = matchStart + 2;

    // 이건 왜필요해???2222222
    while (matchEnd < max && state.src.charCodeAt(matchEnd) === '@') {
      matchEnd += 1;
    }

    closerLength = matchEnd - matchStart;

    if (closerLength === openerLength) {
      if (!silent) {
        token = state.push(name, 'test', 0);
        token.markup = marker;

        token.content = state.src
          .slice(pos, matchStart)
          .replace(/\n/g, ' ')
          .replace(/^ (.+) $/, '$1');
      }
      state.pos = matchEnd;
      return true;
    }
    state.backticks[closerLength] = matchStart;
  }
  state.backticksScanned = true;
  if (!silent) state.pending += marker;
  state.pos += openerLength;
  return true;
};

export default underLineFun;
