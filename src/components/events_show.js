import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { getEvent, deleteEvent, putEvent } from '../actions';

class EventsShow extends Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
    this.onDeleteClick = this.onDeleteClick.bind(this)
  }
<<<<<<< HEAD

  componentDidMount(){
    const { id } = this.props.match.params;
    if (id) this.props.getEvent(id);
  }

  renderField(field) {
    const { input, label, type, meta: {touched, error} } = field

=======
  renderField(field) {
    const { input, label, type, meta: {touched, error} } = field
>>>>>>> e655a30f9d20615a80cc3294872046294834c742
    return (
      <div>
        <input {...input} type={ type } placeholder={ label }/>
        { touched && error && <span>{ error }</span>}
      </div>
    )
  }

  async onSubmit(values) {
<<<<<<< HEAD
    await this.props.putEvent(values)
=======
    // await this.props.postEvent(values)
>>>>>>> e655a30f9d20615a80cc3294872046294834c742
    this.props.history.push('/')
  }

  async onDeleteClick() {
    const { id } = this.props.match.params
    await this.props.deleteEvent(id)
    this.props.history.push('/')
  }


  render() {

<<<<<<< HEAD
    const { handleSubmit, pristine, submitting, invalid } = this.props
=======
    const { handleSubmit, pristine, submitting } = this.props
>>>>>>> e655a30f9d20615a80cc3294872046294834c742

    return (
      <form onSubmit={ handleSubmit(this.onSubmit) } >
        <div>
<<<<<<< HEAD
          <Field label="Title" name="title" type="text" component={this.renderField}  />
          <Field label="Body" name="body" type="text" component={this.renderField}   />
        </div>

        <div>
          <input type="submit" value="Submit" disabled={ pristine || submitting || invalid } />
=======
          <Field label="Title" name="title" type="text" component={this.renderField} />
          <Field label="Body" name="body" type="text" component={this.renderField} />
        </div>

        <div>
          <input type="submit" value="Submit" disabled={ pristine || submitting } />
>>>>>>> e655a30f9d20615a80cc3294872046294834c742
          <Link to="/">Cancel</Link>
          <Link to="/" onClick={ this.onDeleteClick }>DELETE</Link>
        </div>
      </form>
    )
  }
}


<<<<<<< HEAD
const mapStateToProps = (state, ownProps) => {
  const event = state.events[ownProps.match.params.id]
  return { initialValues: event, event}
}
const mapDispatchToProps = ({ getEvent, deleteEvent, putEvent })
=======
// const mapDispatchToProps = ({ getEvent, deleteEvent, putEvent })
const mapDispatchToProps = ({ deleteEvent })
>>>>>>> e655a30f9d20615a80cc3294872046294834c742

const validate = values => {
  const errors = {};

  if (!values.title) errors.title = "Enter a title"
  if (!values.body)  errors.body = "Enter a body"

  return errors;
}

<<<<<<< HEAD
export default connect(mapStateToProps, mapDispatchToProps)(
  reduxForm({validate, form: 'eventShowForm', enableReinitialize: true})(EventsShow)
=======
export default connect(null, mapDispatchToProps)(
  reduxForm({validate, form: 'eventShowForm'})(EventsShow)
>>>>>>> e655a30f9d20615a80cc3294872046294834c742
);
