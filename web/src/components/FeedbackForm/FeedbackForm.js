import {
  Form,
  FormError,
  FieldError,
  Submit,
  TextField,
} from '@redwoodjs/forms'

const FeedbackForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.feedback?.id)
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
            htmlFor="user"
            className="block text-sm font-medium text-gray-700 py-5 px-2"
          >
            Change User:
          </label>
          <select
            id="user"
            name="user"
            className="mt-1 block w-1/3 px-10 pl-3 pr-10 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-l rounded-md"
          >
            <option>User1</option>
            <option>User2</option>
            <option>User3</option>
          </select>
        </div>
        <div className="px-1 py-3">
          <p className="mt-2 text-sm text-gray-500">
            Please provide feedback on ways we can improve.
          </p>
          <div className="py-3">
            <TextField
              id="editFeedback"
              name="editFeedbackArea"
              rows="3"
              className="rw-input max-w-xl shadow-sm px-1 py-1 block w-1/3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"
              defaultValue={props.feedback?.text}
              validation={{ required: true }}
            />
          </div>
        </div>

        <FieldError name="text" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit
            disabled={props.loading}
            className="inline-flex items-center px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-purple-600 border border-transparent rounded-md hover:bg-purple-500 focus:outline-none focus:shadow-outline-purple focus:border-purple-700 active:bg-indigo-700"
          >
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default FeedbackForm
