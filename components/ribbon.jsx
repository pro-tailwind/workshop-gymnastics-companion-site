import cx from 'clsx'

export function Ribbon({ color, position, children }) {
  const colorStyles = {
    violet: {
      bg: 'bg-violet-500',
      backdrop: 'bg-violet-600',
      border: 'border-violet-300',
      text: 'text-violet-100',
    },
    teal: {
      bg: 'bg-teal-500',
      backdrop: 'bg-teal-600',
      border: 'border-teal-300',
      text: 'text-teal-100',
    },
  }[color]

  const positionStyles = {
    'top-right': {
      wrapper: '-top-1 -right-1',
      backdrop1: 'top-0 left-0',
      backdrop2: 'bottom-0 right-0',
      banner: 'bottom-0 right-0 origin-bottom-right rotate-45',
    },
    'top-left': {
      wrapper: '-top-1 -left-1',
      backdrop1: 'bottom-0 left-0',
      backdrop2: 'top-0 right-0',
      banner: 'bottom-0 left-0 origin-bottom-left -rotate-45',
    },
  }[position]

  return (
    <div
      className={cx('absolute aspect-square w-20 overflow-hidden rounded', positionStyles.wrapper)}
    >
      <div className={cx('absolute h-1 w-1', colorStyles.backdrop, positionStyles.backdrop1)}></div>
      <div className={cx('absolute h-1 w-1', colorStyles.backdrop, positionStyles.backdrop2)}></div>
      <div
        className={cx(
          'absolute w-[141.42%] border border-dashed',
          colorStyles.border,
          colorStyles.bg,
          positionStyles.banner
        )}
      >
        <p
          className={cx(
            'py-1 text-center text-xs font-bold uppercase tracking-widest',
            colorStyles.text
          )}
        >
          {children}
        </p>
      </div>
    </div>
  )
}
