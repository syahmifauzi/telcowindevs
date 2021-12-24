import { useRouter } from 'next/router'

const BackButton = () => {
  const router = useRouter()

  return (
    <button
      className="mx-auto block tracking-wide bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 mt-8 rounded"
      onClick={() => router.back()}>
      Go Back
    </button>
  )
}

export default BackButton
