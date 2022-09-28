export const CustomError = ({ type }) => {
  const msg =
    type === '404'
      ? `The page could not be located`
      : `Please try again later an error has occurred`
  return (
    <div
      className='absolute max-w-lg px-4 py-2 text-sm bg-gray-900 shadow-xl pointer-events-none select-none md:text-base top-8 left-1/2 text-gray-50 transform -translate-x-1/2'
      style={{
        width: '520px',
        maxWidth: 'calc(100% - 28px)',
      }}
    >
      <h1 className='mb-5 text-2xl text-center'>{type}</h1>
      <div className='tracking-wider'>
        <p className='text-lg text-center text-red-200'>
          Something went wrong. {msg}.
        </p>
      </div>
    </div>
  )
}
