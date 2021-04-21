import {createAction} from '@reduxjs/toolkit'

export const registerRequest=createAction('auth/registerRequest')
export const registerSuccess=createAction('auth/registerSuccess')
export const registerError=createAction('auth/registerError')

export const loginSuccess=createAction('auth/loginSuccess')
export const loginRequest=createAction('auth/loginRequest')
export const loginError=createAction('auth/loginError')

export const logoutSuccess=createAction('auth/logoutSuccess')
export const logoutRequest=createAction('auth/logoutRequest')
export const logoutError=createAction('auth/logoutError')

export const getCurrentUserSuccess=createAction('auth/getCurrentUserSuccess')
export const getCurrentUserRequest=createAction('auth/getCurrentUserRequest')
export const getCurrentUserError=createAction('auth/getCurrentUserError')