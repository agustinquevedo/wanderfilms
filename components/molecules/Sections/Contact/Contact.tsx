import { MailIcon } from '@heroicons/react/outline'
import Title, {
  TitleColorEnum,
  TitleSizeEnum,
} from '../../../atoms/Title/Title'
import Section, { SectionHeightEnum } from '../../../layout/Section/Section'
import { useForm } from '@formcarry/react'

function MyForm() {
  // Call the "useForm" hook in your function component
  const { state, submit } = useForm({
    id: 'jBUlHIsAh',
  })

  // Success message
  if (state.submitted) {
    return <div>Thank you! We received your submission.</div>
  }

  return (
    <form onSubmit={submit}>
      <div className="w-full grid gap-y-6">
        <div>
          <label htmlFor="first-name" className="block text-xl text-white">
            Full name
          </label>
          <input
            type="text"
            name="first-name"
            id="first-name"
            autoComplete="given-name"
            className="mt-1 focus:ring-white focus:border-white block w-full shadow-sm sm:text-sm border-gray-400 rounded-md"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-xl text-white">
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            autoComplete="email"
            className="mt-1 focus:ring-white focus:border-white block w-full shadow-sm sm:text-sm border-gray-400 rounded-md"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-xl text-white">
            Message
          </label>
          <div className="mt-1">
            <textarea
              id="message"
              name="message"
              rows={3}
              className="shadow-sm focus:ring-whit focus:border-white mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
              placeholder="Write your message here"
              defaultValue={''}
            />
          </div>
          <p className="mt-2 text-sm text-gray-400">
            Brief description of your ideas or questions.
          </p>
        </div>

        <button
          type="submit"
          className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-[#E72542] to-[#E24336]"
        >
          Send
          <MailIcon className="ml-2 w-6 h-6" />
        </button>
      </div>
    </form>
  )
}

const Contact = () => {
  return (
    <Section id="contact" height={SectionHeightEnum.MIN_CONTENT}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <Title
            text="So tell us about"
            coloredTitle="your project."
            color={TitleColorEnum.ORANGE}
            size={TitleSizeEnum.PRIMARY}
          />
        </div>
        <div className="md:col-span-1 shadow rounded-2xl px-6 py-12 bg-gray-900 overflow-hidden ">
          <MyForm />
        </div>
      </div>
    </Section>
  )
}

export default Contact
