import classnames from 'tailwindcss-classnames'

let x: boolean | undefined

const className = classnames('border-none', 'rounded-sm', { ['bg-gray-200']: x });
