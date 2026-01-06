function search(query) {
  const params = new URLSearchParams({
    q: query,
    domains: "charles.systems",
    sitesearch: "charles.systems",
    ie: "ISO-8859-1",
    oe: "ISO-8859-1",
    cof: "GALT:#D7DFE3;GL:1;DIV:#940200;VLC:D7DFE3;AH:center;BGC:000000;LBGC:000000;ALC:E9DB94;LC:E9DB94;T:D7DFE3;GFNT:D7DFE3;GIMP:D7DFE3;LH:154;LW:270;L:https://www.charles.systems/;S:https://www.charles.systems/;FORID:1;",
    hl: "en"
  });

  window.location.href = "https://www.google.com/custom?" + params.toString();
}
