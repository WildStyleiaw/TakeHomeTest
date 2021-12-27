import Navigation from 'src/components/Navigation/Navigation'

const CoreLayout = ({ children }) => {
  return (
    <>
      <div className="h-screen flex overflow-hidden bg-white antialiased font-sans">
        <div className="hidden md:flex md:flex-shrink-0">
          <Navigation />
        </div>
        <div className="flex flex-col w-0 flex-1 overflow-hidden">
          {children}
        </div>
      </div>
    </>
  )
}

export default CoreLayout
