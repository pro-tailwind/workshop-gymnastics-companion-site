const plugin = require('tailwindcss/plugin')

module.exports = plugin.withOptions(function (options) {
  return function ({ addUtilities }) {
    const name = options?.name || 'bg-stripes'
    return addUtilities({
      [`.${name}`]: {
        '--stripes-color': options?.color || '255 255 255',
        '--stripes-opacity': options?.opacity || '0.25',
        '--stripes-size': options?.size || 16,
        '--stripes-angle': options?.angle || '-45deg',
        '--stripes-speed': options?.speed || '0.7s',
        position: 'relative',
        overflow: 'hidden',
        '&>*': { 'z-index': 1, position: 'relative' },
        '&:after': {
          content: '""',
          position: 'absolute',
          top: 0,
          right: 0,
          height: '100%',
          width: 'calc(100% + var(--stripes-size))',
          backgroundImage: `linear-gradient(
              var(--stripes-angle),
              rgb(var(--stripes-color) / var(--stripes-opacity)) 0% 10%,
              transparent 10% 50%,
              rgb(var(--stripes-color) / var(--stripes-opacity)) 50% 60%,
              transparent 60% 100%
            )`,
          backgroundSize: 'var(--stripes-size) var(--stripes-size)',
          animation: 'animated-stripes var(--stripes-speed) linear infinite',
        },
      },
      '@keyframes animated-stripes': {
        '0%': {
          transform: 'translateX(0)',
        },
        '100%': {
          transform: 'translateX(var(--stripes-size))',
        },
      },
    })
  }
})
