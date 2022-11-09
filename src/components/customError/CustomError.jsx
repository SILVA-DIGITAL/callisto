export const CustomError = ({ type }) => {
  const msg =
    type === '404'
      ? `The page could not be located`
      : `Please try again later an error has occurred`
  return (
    <>
      <div className='grid h-screen place-items-center'>
        <div className='text-center tracking-wider'>
          <h1 className='px-6 py-4 text-center text-3xl'>{type} &#128565;</h1>
          Something went wrong. {msg}.
        </div>
      </div>
    </>
  )
}
