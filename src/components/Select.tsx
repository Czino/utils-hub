import React, { useState, type ReactElement } from 'react'
import { FiChevronDown } from 'react-icons/fi'

type Option<T> = { value: T; label: string }

const mapChildToOption = (child: ReactElement) => {
  const children = child.props.children
  const label = Array.isArray(children) ? children.join('') : children
  const val = child.props.value || label
  return { value: val, label }
}
type Props<T> = Omit<React.ComponentProps<'input'>, 'value' | 'onChange'> & {
  value: T
  onChange?: (value: T) => void
}

// TODO close on dropdown click when open
export const Select = <T,>({ className, children, value, defaultValue, onChange, ...props }: Props<T>) => {
  const options = Array.isArray(children) ? children.map(mapChildToOption) : []
  const display = options.find((o) => o.value === value)?.label
  const [isOpen, setIsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState(defaultValue)
  const [filteredOptions, setFilteredOptions] = useState(options)

  const onFocus = () => {
    setSearchTerm('')
    setIsOpen(true)
    setFilteredOptions(options)
  }
  const onSearch = (val: string) => {
    setIsOpen(true)
    setSearchTerm(val)
    if (val === '') {
      setFilteredOptions(options)
    } else {
      const filtered = options.filter((option) => option.label.toLowerCase().includes(String(val).toLowerCase()))
      setFilteredOptions(filtered)
    }
  }
  const handleSelect = (option: Option<T>) => {
    setIsOpen(false)
    setSearchTerm(undefined)
    setFilteredOptions(options)
    if (onChange) onChange(option.value)
  }

  const selectFirst = (code: string) => {
    if (code !== 'Enter') return
    if (filteredOptions[0]) handleSelect(filteredOptions[0])
  }

  return (
    <div className={`relative ${className}`}>
      <input
        type="text"
        value={searchTerm ?? display}
        onChange={(e) => onSearch(e.currentTarget.value)}
        onKeyDown={(e) => selectFirst(e.code)}
        onFocus={onFocus}
        className="p-2 w-full text-xs bg-white rounded border md:text-xl border-dark"
        {...props}
      />
      <FiChevronDown className="absolute right-1 top-1/2 w-6 h-6 transform -translate-y-1/2 pointer-events-none" />
      {isOpen && (
        <ul className="overflow-auto absolute z-10 mt-1 w-full max-h-60 bg-white rounded border border-dark">
          {filteredOptions.map((option) => (
            <li
              key={option.value}
              aria-label={`option ${option.label}`}
              className="p-2 text-xs cursor-pointer md:text-xl hover:bg-gray-100"
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
