import Link from 'next/link'
import clsx from 'clsx'

type ButtonProps = {
  invert?: boolean
  large?: boolean
} & (
  | React.ComponentPropsWithoutRef<typeof Link>
  | (React.ComponentPropsWithoutRef<'button'> & { href?: undefined })
)

export function Button({
  invert = false,
  large = false,
  className,
  children,
  ...props
}: ButtonProps) {
  className = clsx(
    className,
    'inline-flex rounded-full font-semibold',
    'transition-all duration-300', // don't think transition works for gradients
    invert
      ? 'bg-white text-brand-charcoal hover:bg-gradient-1 hover:text-white'
      : 'bg-gradient-1 text-white hover:bg-gradient-2',
    large
      ? 'px-8 py-3 text-xl lg:px-12 lg:py-4 lg:text-2xl'
      : 'px-4 py-1.5 lg:px-6 lg:py-2 lg:text-lg',
  )

  let inner = <span className="relative top-px">{children}</span>

  if (typeof props.href === 'undefined') {
    return (
      <button className={className} {...props}>
        {inner}
      </button>
    )
  }

  return (
    <Link className={className} {...props}>
      {inner}
    </Link>
  )
}
