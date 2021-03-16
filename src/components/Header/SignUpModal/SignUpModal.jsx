import { useState } from 'react'
import classNames from 'classnames'
import Modal from '../../common/Modal'

import { isValidEmail, isMinLength, isRequire } from '../../../utils'

import styles from './SignUpModal.module.css'

const SignUpModal = ({ onClose }) => {
  const [form, setForm] = useState({
    fio: '',
    email: '',
    password: '',
    date: '',
  })

  const [error, setError] = useState({
    fio: null,
    email: null,
    password: null,
    date: null,
  })

  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const validate = () => {
    const fioError = isRequire(form.fio)
    const dateError = isRequire(form.date)
    const emailError = isValidEmail(form.email)
    const passwordError = isMinLength(6)(form.password)
    
    setError({
      ...error,
      fio: fioError,
      date: dateError,
      email: emailError,
      password: passwordError,
    })

    return !(fioError || dateError || emailError || passwordError)
  }

  const submitHandler = (e) => {
    e.preventDefault()

    if (validate())
      onClose()
  }

  return (
    <Modal onClose={onClose}>
      <form className={classNames('paper', styles.form)} onSubmit={submitHandler}>
        <span className={styles.close} onClick={onClose} >x</span>

        <div className={classNames(styles.field, { [styles.error]: error.fio })}>
          <input
            type='text'
            name='fio'
            value={form.fio}
            onChange={changeHandler}
            placeholder='FIO'
          />
          {error.fio && <p className={styles.error}>{error.fio}</p>}
        </div>

        <div className={classNames(styles.field, { [styles.error]: error.email })}>
          <input
            type='text'
            name='email'
            value={form.email}
            onChange={changeHandler}
            placeholder='Email'
          />
          {error.email && <p className={styles.error}>{error.email}</p>}
        </div>

        <div className={classNames(styles.field, { [styles.error]: error.password })}>
          <input
            type='password'
            name='password'
            value={form.password}
            onChange={changeHandler}
            placeholder='Password'
          />
          {error.password && <p className={styles.error}>{error.password}</p>}
        </div>

        <div className={classNames(styles.field, { [styles.error]: error.date })}>
          <input
            type='date'
            name='date'
            value={form.date}
            onChange={changeHandler}
            placeholder='Date'
          />
          {error.date && <p className={styles.error}>{error.date}</p>}
        </div>

        <button className='btn primary'>Sign Up</button>
      </form>
    </Modal>
  )
}

export default SignUpModal
