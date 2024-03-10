import { Input } from './Input'

type Props = React.ComponentProps<'input'> & {
  containerClassName?: string
  label: string
}
export const InputWithLabel = ({ containerClassName, label, id, ...props }: Props) => (
  <div className={containerClassName}>
    <label className="text-base" htmlFor={id}>
      {label}
    </label>
    <Input id={id} {...props} />
  </div>
)
