import Container from '@components/Container'

export default function Contact() {
  const handleFormSubmit = async (e: any) => {
    e.preventDefault()

    const { first_name, last_name, email, description } = e.target
    const params = {
      oid: '00D5j000001wdi4',
      retUrl: 'https://localhost:3000',
      first_name: first_name.value,
      last_name: last_name.value,
      email: email.value,
      description: description.value
    }

    const baseUrl = `https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8`
    const finalUrl = `${baseUrl}&${new URLSearchParams(params)}`

    await fetch(finalUrl, {
      method: 'POST',
      mode: 'no-cors'
    })

    e.target.reset()
  }

  return (
    <Container title="Contact Us">
      <div className="max-w-2xl mx-auto mt-8 my-16">
        <h2 className="text-4xl md:text-5xl font-semibold mb-4">Contact Us</h2>
        <p className="mb-8 text-gray-600">
          This is a Web-to-Lead form. The data will be submitted to Salesforce.
        </p>
        <form onSubmit={handleFormSubmit}>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-first-name">
                First Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Jane"
                required
                name="first_name"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name">
                Last Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Doe"
                required
                name="last_name"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-email">
                Email Address
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-email"
                type="email"
                placeholder="example@company.com"
                required
                name="email"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-8">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-comment">
                Comment
              </label>
              <textarea
                className="resize-y appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-comment"
                placeholder="Hi there!"
                required
                name="description"
              />
            </div>
          </div>
          <button
            className="block w-full uppercase tracking-wide bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded"
            type="submit">
            Submit
          </button>
        </form>
      </div>
    </Container>
  )
}
