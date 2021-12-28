// import Alert from 'src/components/Alert/Alert'

const PageHeader = ({ children }) => {
  return (
    <div className="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
      <div className="flex-1 min-w-0"></div>
      <div className="fixed right-5  sm:ml-4">{/* <Alert /> */}</div>
      <div className="mt-4 flex sm:mt-0 sm:ml-4">{children}</div>
    </div>
  )
}

export default PageHeader
