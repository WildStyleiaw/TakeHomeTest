import { Form, FormError, FieldError, Submit, TextArea } from '@redwoodjs/forms'

const UserForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.user?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />
        <div className="px-1">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 py-5 px-2"
          >
            Name:
          </label>
          <TextArea
            id="name"
            name="name"
            rows="3"
            className="rw-input max-w-xl shadow-sm px-1 py-1 block w-1/3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"
            defaultValue={props.user?.text}
            validation={{ required: true }}
          />
        </div>
        <div className="px-1">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 py-5 px-2"
          >
            Email:
          </label>
          <TextArea
            id="email"
            name="email"
            rows="3"
            className="rw-input max-w-xl shadow-sm px-1 py-1 block w-1/3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"
            defaultValue={props.user?.text}
            validation={{ required: true }}
          />
        </div>
        <div className="px-1">
          <label
            htmlFor="user"
            className="block text-sm font-medium text-gray-700 py-5 px-2"
          >
            Phone:
          </label>
          <TextArea
            id="phone"
            name="phone"
            rows="3"
            className="rw-input max-w-xl shadow-sm px-1 py-1 block w-1/3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"
            defaultValue={props.user?.text}
            validation={{ required: false }}
          />
        </div>
        <div className="px-1 py-3">
          <p className="mt-2 text-sm text-gray-500">
            Being a user allows you to provide feedback on ways we can improve.
          </p>
        </div>

        <FieldError name="text" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit
            disabled={props.loading}
            className="inline-flex items-center px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-green-700 border border-transparent rounded-md hover:bg-green-500 focus:outline-none focus:shadow-outline-green focus:border-purple-700 active:bg-indigo-700"
          >
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default UserForm
