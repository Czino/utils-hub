import { Input } from './Input'

type Props = React.ComponentProps<'input'> & {
  label: string
}
export const InputWithLabel = ({ label, id, ...props }: Props) => (
  <div>
    <label className="text-base" htmlFor={id}>
      {label}
    </label>
    <Input id={id} {...props} />
  </div>
)
