import { NavigationColumn } from './NavigationColumn'

export const ScreenWithSideNavigation = ({ children }: React.ComponentProps<'div'>) => (
  <div className="flex flex-row gap-4 text-2xl bg-white color-black">
    <NavigationColumn />
    <div className="p-4 space-y-4 w-full">{children}</div>
    <div className="w-[280px] hidden md:block">{/* placeholder */}</div>
  </div>
)
