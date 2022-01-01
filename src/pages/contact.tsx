import { useState } from 'react'

import Container from '@components/Container'

export default function Contact() {
  const [result, setResult] = useState({ show: false, message: '', color: '' })

  const handleFormSubmit = (e: any) => {
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

    fetch(finalUrl, {
      method: 'POST',
      mode: 'no-cors'
    })
      .then((_) => {
        showResult('The form has been submitted successfully.', 'bg-green-600')
        e.target.reset()
      })
      .catch((_) => {
        showResult('Something went wrong! Form failed to submit.', 'bg-red-600')
      })

    e.target.reset()
  }

  const showResult = (message: string, color: string) => {
    setResult({ show: true, message, color })
    setTimeout(() => {
      setResult({ show: false, message: '', color: '' })
    }, 5000)
  }

  return (
    <Container title="Contact Us">
      <div className="max-w-2xl mx-auto mt-8 my-16">
        <h2 className="text-4xl md:text-5xl font-semibold mb-4">Contact Us</h2>
        <p className="mb-8 text-gray-600">
          This is a Web-to-Lead form. The data will be submitted to Salesforce.
        </p>
        {result.show && (
          <div
            className={`${result.color} text-white p-4 rounded-md font-light mb-8 text-xl`}>
            {result.message}
          </div>
        )}
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
                Message
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
