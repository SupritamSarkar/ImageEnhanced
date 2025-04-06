

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-full w-full bg-black text-white text-2xl font-bold">
      <svg className="animate-spin h-10 w-10 mr-3 border-t-4 border-b-4 border-blue-500 rounded-full" viewBox="0 0 24 24"></svg>
      loading
    </div>
  )
}

export default Loading
