const ICONS: Record<string, { t: string; p: string }> = {
  lock: {
    t: 'translate(-220 -296)',
    p: '<path d="M226 306V304C226 300.69 227 298 232 298C237 298 238 300.69 238 304V306" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M232 314.5C233.381 314.5 234.5 313.381 234.5 312C234.5 310.619 233.381 309.5 232 309.5C230.619 309.5 229.5 310.619 229.5 312C229.5 313.381 230.619 314.5 232 314.5Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M237 318H227C223 318 222 317 222 313V311C222 307 223 306 227 306H237C241 306 242 307 242 311V313C242 317 241 318 237 318Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
  },
  calendar: {
    t: 'translate(-540 -232)',
    p: '<path d="M548 234V237" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M556 234V237" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M543.5 241.09H560.5" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M561 240.5V249C561 252 559.5 254 556 254H548C544.5 254 543 252 543 249V240.5C543 237.5 544.5 235.5 548 235.5H556C559.5 235.5 561 237.5 561 240.5Z" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M555.695 245.699H555.704" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M555.695 248.699H555.704" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M551.995 245.699H552.004" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M551.995 248.699H552.004" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M548.294 245.699H548.303" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M548.294 248.699H548.303" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
  },
  doc: {
    t: 'translate(-220 -232)',
    p: '<path d="M242 242V247C242 252 240 254 235 254H229C224 254 222 252 222 247V241C222 236 224 234 229 234H234" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M242 242H238C235 242 234 241 234 238V234L242 242Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M227 245H233" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M227 249H231" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
  },
  list: {
    t: 'translate(-156 -360)',
    p: '<path d="M178 368.27V364.23C178 362.64 177.36 362 175.77 362H171.73C170.14 362 169.5 362.64 169.5 364.23V368.27C169.5 369.86 170.14 370.5 171.73 370.5H175.77C177.36 370.5 178 369.86 178 368.27Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M166.5 368.52V363.98C166.5 362.57 165.86 362 164.27 362H160.23C158.64 362 158 362.57 158 363.98V368.51C158 369.93 158.64 370.49 160.23 370.49H164.27C165.86 370.5 166.5 369.93 166.5 368.52Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M166.5 379.77V375.73C166.5 374.14 165.86 373.5 164.27 373.5H160.23C158.64 373.5 158 374.14 158 375.73V379.77C158 381.36 158.64 382 160.23 382H164.27C165.86 382 166.5 381.36 166.5 379.77Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M171 375.5H177" stroke-width="1.5" stroke-linecap="round"/><path d="M171 379.5H177" stroke-width="1.5" stroke-linecap="round"/>',
  },
  search: {
    t: 'translate(-476 -232)',
    p: '<path d="M487.5 253C492.747 253 497 248.747 497 243.5C497 238.253 492.747 234 487.5 234C482.253 234 478 238.253 478 243.5C478 248.747 482.253 253 487.5 253Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M498 254L496 252" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
  },
  star: {
    t: 'translate(-156 -232)',
    p: '<path d="M169.73 235.511L171.49 239.031C171.73 239.521 172.37 239.991 172.91 240.081L176.1 240.611C178.14 240.951 178.62 242.431 177.15 243.891L174.67 246.371C174.25 246.791 174.02 247.601 174.15 248.181L174.86 251.251C175.42 253.681 174.13 254.621 171.98 253.351L168.99 251.581C168.45 251.261 167.56 251.261 167.01 251.581L164.02 253.351C161.88 254.621 160.58 253.671 161.14 251.251L161.85 248.181C161.98 247.601 161.75 246.791 161.33 246.371L158.85 243.891C157.39 242.431 157.86 240.951 159.9 240.611L163.09 240.081C163.62 239.991 164.26 239.521 164.5 239.031L166.26 235.511C167.22 233.601 168.78 233.601 169.73 235.511Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
  },
  check: {
    t: 'translate(-796 -296)',
    p: '<path d="M805 318H811C816 318 818 316 818 311V305C818 300 816 298 811 298H805C800 298 798 300 798 305V311C798 316 800 318 805 318Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M803.75 308L806.58 310.83L812.25 305.17" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
  },
  chevL: {
    t: 'translate(-412 -296)',
    p: '<path d="M427 315.92L420.48 309.4C419.71 308.63 419.71 307.37 420.48 306.6L427 300.08" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>',
  },
  chevR: {
    t: 'translate(-348 -296)',
    p: '<path d="M356.91 315.92L363.43 309.4C364.2 308.63 364.2 307.37 363.43 306.6L356.91 300.08" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>',
  },
  pin: {
    t: 'translate(-476 -232)',
    p: '<path d="M488 245.429C489.723 245.429 491.12 244.033 491.12 242.309C491.12 240.586 489.723 239.189 488 239.189C486.277 239.189 484.88 240.586 484.88 242.309C484.88 244.033 486.277 245.429 488 245.429Z" stroke-width="1.5"/><path d="M479.62 240.49C481.59 231.83 494.42 231.84 496.38 240.5C497.53 245.58 494.37 249.88 491.6 252.54C489.59 254.48 486.41 254.48 484.39 252.54C481.63 249.88 478.47 245.57 479.62 240.49Z" stroke-width="1.5"/>',
  },
  chat: {
    t: 'translate(-284 -296)',
    p: '<path d="M292.5 313H292C288 313 286 312 286 307V302C286 298 288 296 292 296H300C304 296 306 298 306 302V307C306 311 304 313 300 313H299.5C299.19 313 298.89 313.15 298.7 313.4L297.2 315.4C296.54 316.28 295.46 316.28 294.8 315.4L293.3 313.4C293.14 313.18 292.77 313 292.5 313Z" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M291 302H301" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M291 307H297" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
  },
  card: {
    t: 'translate(-284 -424)',
    p: '<path d="M286 436.609H303" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M303 434.281V441.431C302.97 444.281 302.19 445.001 299.22 445.001H289.78C286.76 445.001 286 444.251 286 441.271V434.281C286 431.581 286.63 430.711 289 430.571C289.24 430.561 289.5 430.551 289.78 430.551H299.22C302.24 430.551 303 431.301 303 434.281Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M306 430.73V437.72C306 440.42 305.37 441.29 303 441.43V434.28C303 431.3 302.24 430.55 299.22 430.55H289.78C289.5 430.55 289.24 430.56 289 430.57C289.03 427.72 289.81 427 292.78 427H302.22C305.24 427 306 427.75 306 430.73Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M289.25 441.811H290.97" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M293.11 441.811H296.55" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>',
  },
  bell: {
    t: 'translate(-220 -232)',
    p: '<path d="M231.02 234.91C227.71 234.91 225.02 237.6 225.02 240.91V243.8C225.02 244.41 224.76 245.34 224.45 245.86L223.3 247.77C222.59 248.95 223.08 250.26 224.38 250.7C228.69 252.14 233.34 252.14 237.65 250.7C238.86 250.3 239.39 248.87 238.73 247.77L237.58 245.86C237.28 245.34 237.02 244.41 237.02 243.8V240.91C237.02 237.61 234.32 234.91 231.02 234.91Z" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/><path d="M232.87 235.199C232.56 235.109 232.24 235.039 231.91 234.999C230.95 234.879 230.03 234.949 229.17 235.199C229.46 234.459 230.18 233.939 231.02 233.939C231.86 233.939 232.58 234.459 232.87 235.199Z" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M234.02 251.061C234.02 252.711 232.67 254.061 231.02 254.061C230.2 254.061 229.44 253.721 228.9 253.181C228.36 252.641 228.02 251.881 228.02 251.061" stroke-width="1.5" stroke-miterlimit="10"/>',
  },
  plus: {
    t: 'translate(-540 -296)',
    p: '<path d="M546 308H558" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M552 314V302" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
  },
  user: {
    t: 'translate(-156 -232)',
    p: '<path d="M168 244C170.761 244 173 241.761 173 239C173 236.239 170.761 234 168 234C165.239 234 163 236.239 163 239C163 241.761 165.239 244 168 244Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M176.59 254C176.59 250.13 172.74 247 168 247C163.26 247 159.41 250.13 159.41 254" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
  },
  shield: {
    t: 'translate(-348 -232)',
    p: '<path d="M358.49 234.231L353.5 236.111C352.35 236.541 351.41 237.901 351.41 239.121V246.551C351.41 247.731 352.19 249.281 353.14 249.991L357.44 253.201C358.85 254.261 361.17 254.261 362.58 253.201L366.88 249.991C367.83 249.281 368.61 247.731 368.61 246.551V239.121C368.61 237.891 367.67 236.531 366.52 236.101L361.53 234.231C360.68 233.921 359.32 233.921 358.49 234.231Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M357.05 243.87L358.66 245.48L362.96 241.18" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
  },
  heart: {
    t: 'translate(-284 -232)',
    p: '<path d="M296.62 252.81C296.28 252.93 295.72 252.93 295.38 252.81C292.48 251.82 286 247.69 286 240.69C286 237.6 288.49 235.1 291.56 235.1C293.38 235.1 294.99 235.98 296 237.34C297.01 235.98 298.63 235.1 300.44 235.1C303.51 235.1 306 237.6 306 240.69C306 247.69 299.52 251.82 296.62 252.81Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
  },
  menu: {
    t: 'translate(0 0)',
    p: '<path d="M4 7H20" stroke-width="1.7" stroke-linecap="round"/><path d="M4 12H20" stroke-width="1.7" stroke-linecap="round"/><path d="M4 17H20" stroke-width="1.7" stroke-linecap="round"/>',
  },
  arrowUp: {
    t: 'translate(0 0)',
    p: '<path d="M12 19V5" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 11L12 5L18 11" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>',
  },
};

export function Icon({
  name,
  size = 17,
  strokeWidth = 1.6,
  fill = 'none',
  style,
}: {
  name: keyof typeof ICONS;
  size?: number;
  strokeWidth?: number;
  fill?: string;
  style?: React.CSSProperties;
}) {
  const d = ICONS[name];
  if (!d) return null;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill}
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ flex: 'none', display: 'block', ...style }}
    >
      <g transform={d.t} dangerouslySetInnerHTML={{ __html: d.p }} />
    </svg>
  );
}
