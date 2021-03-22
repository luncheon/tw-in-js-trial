import tw from 'twin.macro'

const css = tw`text-sm md:text-lg`

const Input = tw.input`border hover:border-black`

const interactionStyles = () => (
  <div tw="hover:(text-black underline) focus:(text-blue-500 underline)" />
)
